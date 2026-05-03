"""
Fix ADR form PDF: Print and Clear Data were bound to Mouse Enter (/E) so they
fired on hover. Move those actions to Mouse Up (/U) = real click.
Also remove erroneous /Bl (blur) validation from the Print button.
"""
from __future__ import annotations

import io
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject

PDF = Path(__file__).resolve().parent.parent / "public" / "assets" / "suspected-adverse-reaction-reporting-form.pdf"
BACKUP = PDF.with_suffix(".pdf.bak-hover-fix")


def fix_widget_aa(widget: dict, field_name: str) -> bool:
    aa = widget.get("/AA")
    if not aa:
        return False
    aa = aa.get_object()
    changed = False
    if "/E" in aa and field_name in ("Print", "Clear Data"):
        e_val = aa["/E"]
        if "/U" not in aa:
            aa[NameObject("/U")] = e_val
        del aa[NameObject("/E")]
        changed = True
    if field_name == "Print" and "/Bl" in aa:
        del aa[NameObject("/Bl")]
        changed = True
    return changed


def main() -> None:
    if not PDF.is_file():
        raise SystemExit(f"Missing PDF: {PDF}")
    orig_bytes = PDF.read_bytes()
    reader = PdfReader(io.BytesIO(orig_bytes))
    total = 0
    for page in reader.pages:
        annots = page.get("/Annots")
        if not annots:
            continue
        annots = annots.get_object()
        for ref in annots:
            obj = ref.get_object()
            if obj.get("/Subtype") != "/Widget":
                continue
            name = obj.get("/T")
            if name not in ("Print", "Clear Data"):
                continue
            if fix_widget_aa(obj, str(name)):
                total += 1
                print("Fixed:", name)

    if total == 0:
        print("No changes applied (unexpected).")
        return

    if not BACKUP.exists():
        BACKUP.write_bytes(orig_bytes)
        print("Wrote backup:", BACKUP)

    writer = PdfWriter()
    writer.append_pages_from_reader(reader)
    writer.write(str(PDF))
    print("Updated:", PDF, f"({total} widget(s))")


if __name__ == "__main__":
    main()
