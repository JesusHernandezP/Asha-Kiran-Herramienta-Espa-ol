import pdfplumber
import sys

sys.stdout.reconfigure(encoding='utf-8')

def get_color_name(color_tuple):
    if color_tuple is None:
        return "None"
    ct = tuple(color_tuple) if isinstance(color_tuple, (list, tuple)) else color_tuple
    if len(ct) == 3:
        r, g, b = ct
        if r > 0.9 and g > 0.9 and b > 0.9:
            return "White"
        elif r > 0.9 and g > 0.5 and g < 0.7 and b < 0.1:
            return "Orange"
        elif r > 0.9 and g > 0.7 and g < 0.85 and b < 0.3:
            return "Yellow/Orange" # (0.945, 0.760, 0.196) -> #F1C232
        elif r < 0.1 and g > 0.9 and b < 0.1:
            return "Bright Green"
        elif r < 0.5 and g > 0.6 and b < 0.4:
            return "Green"
        elif r < 0.1 and g > 0.9 and b > 0.9:
            return "Cyan"
    return f"RGB({ct[0]:.2f}, {ct[1]:.2f}, {ct[2]:.2f})"

def extract_from_original():
    results = []
    pdf_path = "Recursos de Interés Para Alumnos Proyecto Vínculos.pdf"
    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[0]
        words = page.extract_words()
        
        # Group words by line (approximate y)
        lines = {}
        for w in words:
            top = round(w["top"], 1)
            found = False
            for line_top in lines:
                if abs(line_top - top) < 2:
                    lines[line_top].append(w)
                    found = True
                    break
            if not found:
                lines[top] = [w]
                
        sorted_tops = sorted(lines.keys())
        for top in sorted_tops:
            line_words = sorted(lines[top], key=lambda w: w["x0"])
            # In the 1-page PDF, resource names are around x0=317 to x1=450
            name_words = [w for w in line_words if 310 < w["x0"] < 460]
            if not name_words:
                continue
            name_text = " ".join([w["text"] for w in name_words])
            if any(term in name_text for term in ["Nombre del Recurso", "Persona de Contacto", "Recursos de Interés"]):
                continue
            if len(name_text.strip()) < 3:
                continue
                
            # Find background color
            bg_color = "None"
            cx = (min(w["x0"] for w in name_words) + max(w["x1"] for w in name_words)) / 2.0
            cy = (min(w["top"] for w in name_words) + max(w["bottom"] for w in name_words)) / 2.0
            for r in page.rects:
                if r["top"] <= cy <= r["bottom"] and r["x0"] <= cx <= r["x1"]:
                    ns = r.get("non_stroking_color")
                    if ns is not None:
                        bg_color = get_color_name(ns)
                        break
            results.append((name_text, bg_color))
    return results

def extract_from_new():
    results = []
    pdf_path = "Recursos de Interés Para Alumnos Proyecto Vínculos.xlsx - Hoja1.pdf"
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in range(10): # Names are on pages 1-10 (the left tile columns)
            page = pdf.pages[page_num]
            words = page.extract_words()
            
            lines = {}
            for w in words:
                top = round(w["top"], 1)
                found = False
                for line_top in lines:
                    if abs(line_top - top) < 2:
                        lines[line_top].append(w)
                        found = True
                        break
                if not found:
                    lines[top] = [w]
                    
            sorted_tops = sorted(lines.keys())
            for top in sorted_tops:
                line_words = sorted(lines[top], key=lambda w: w["x0"])
                name_words = [w for w in line_words if w["x1"] < 220]
                if not name_words:
                    continue
                name_text = " ".join([w["text"] for w in name_words])
                if any(term in name_text for term in ["Nombre del Recurso", "Persona de Contacto", "Recursos de Interés"]):
                    continue
                if len(name_text.strip()) < 3:
                    continue
                    
                bg_color = "None"
                cx = (min(w["x0"] for w in name_words) + max(w["x1"] for w in name_words)) / 2.0
                cy = (min(w["top"] for w in name_words) + max(w["bottom"] for w in name_words)) / 2.0
                for r in page.rects:
                    if r["top"] <= cy <= r["bottom"] and r["x0"] <= cx <= r["x1"]:
                        ns = r.get("non_stroking_color")
                        if ns is not None:
                            bg_color = get_color_name(ns)
                            break
                results.append((name_text, bg_color))
    return results

orig = extract_from_original()
new_pdf = extract_from_new()

print(f"Extracted from Original PDF: {len(orig)} resources")
print(f"Extracted from New PDF: {len(new_pdf)} resources")

print("\n--- ORIGINAL PDF ---")
for idx, (name, color) in enumerate(orig):
    print(f"{idx+1:2d}. [{color:15s}] {name}")
    
print("\n--- NEW PDF ---")
for idx, (name, color) in enumerate(new_pdf):
    print(f"{idx+1:2d}. [{color:15s}] {name}")
