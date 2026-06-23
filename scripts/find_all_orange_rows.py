import pdfplumber
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = "Recursos de Interés Para Alumnos Proyecto Vínculos.xlsx - Hoja1.pdf"

# We want to map y-coordinates of page 1-10 to page 11-20, or simply check all pages for orange rects.
# Let's check all pages, extract the text that overlaps with orange rects (both (1.0, 0.6, 0.0) and (0.945, 0.760, 0.196)).

orange_colors = [
    (1.0, 0.6, 0.0),
    (0.945, 0.760, 0.196),
    (0.94509804, 0.7607843, 0.19607843)
]

def is_orange(color):
    if color is None:
        return False
    # Handle list or tuple
    ct = tuple(color) if isinstance(color, (list, tuple)) else color
    if len(ct) == 3:
        r, g, b = ct
        # check if it is orange/gold/yellow
        if r > 0.9 and g > 0.5 and b < 0.35:
            return True
    return False

with pdfplumber.open(pdf_path) as pdf:
    for page_num, page in enumerate(pdf.pages):
        # Find all orange rects
        orange_rects = []
        for r in page.rects:
            ns = r.get("non_stroking_color")
            if is_orange(ns):
                orange_rects.append(r)
                
        if orange_rects:
            print(f"\nPage {page_num + 1} has {len(orange_rects)} orange rects:")
            words = page.extract_words()
            # Find words on these orange rects
            for r in orange_rects:
                ns = r.get("non_stroking_color")
                rect_words = []
                for w in words:
                    cx = (w["x0"] + w["x1"]) / 2.0
                    cy = (w["top"] + w["bottom"]) / 2.0
                    if r["x0"] <= cx <= r["x1"] and r["top"] <= cy <= r["bottom"]:
                        rect_words.append(w)
                if rect_words:
                    # Sort words by top then x0
                    rect_words.sort(key=lambda w: (w["top"], w["x0"]))
                    # group into lines
                    lines = {}
                    for rw in rect_words:
                        t = round(rw["top"], 1)
                        found = False
                        for lt in lines:
                            if abs(lt - t) < 2:
                                lines[lt].append(rw)
                                found = True
                                break
                        if not found:
                            lines[t] = [rw]
                    print(f"  Rect bbox=({r['x0']:.1f}, {r['top']:.1f}, {r['x1']:.1f}, {r['bottom']:.1f}), color={ns}")
                    for t in sorted(lines.keys()):
                        line_text = " ".join([rw["text"] for rw in sorted(lines[t], key=lambda w: w["x0"])])
                        print(f"    Line at y={t}: {line_text}")
