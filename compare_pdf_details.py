import pdfplumber

def extract_all_lines(pdf_path):
    all_lines = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                all_lines.extend(text.split("\n"))
    return all_lines

lines1 = extract_all_lines("Recursos de Interés Para Alumnos Proyecto Vínculos.pdf")
lines2 = extract_all_lines("Recursos de Interés Para Alumnos Proyecto Vínculos.xlsx - Hoja1.pdf")

print(f"Total lines in original PDF: {len(lines1)}")
print(f"Total lines in new PDF: {len(lines2)}")

# Let's count occurrences of some resource names
resources = [
    "Todotest", "La resistienda", "Arrabal-AID", "Málaga Acoge", "Cruz Roja", 
    "CEAR", "Accem", "Mitad del Cielo", "Prodiversa", "CODENAF", 
    "La Merced", "Rescate", "Ángeles Malagueños", "Puerta Única", "Centro de Acogida", 
    "Cáritas", "Pozo Dulce", "Calor y Café", "MÉDICOS DEL MUNDO", "Asociación Marroquí", 
    "Palmira", "Bienvenidos Refugiados", "Lucaro", "San Juan de Dios", "Red de Atención", 
    "Comedor Santo Domingo", "Yo Soy Tú", "Antonio Eloy", "Vialia", "Anfremar", 
    "Revolut", "BBVA", "Santander", "Diaconía", "Hogar Betania", "Colegio de Abogados", 
    "CENEC", "CEAR CF", "Maydan", "No-violencia", "OIKIA", "Casa hogar", 
    "Inserta", "Adobe Verde", "CBLINGUA", "Alojamiento de Jovenes", "Embajada"
]

print("\nResource occurrences (Original PDF | New PDF):")
for r in resources:
    count1 = sum(1 for line in lines1 if r.lower() in line.lower())
    count2 = sum(1 for line in lines2 if r.lower() in line.lower())
    print(f"  {r:25s} : {count1} | {count2}")
