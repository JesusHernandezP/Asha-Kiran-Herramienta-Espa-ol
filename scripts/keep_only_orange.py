import re

file_path = 'src/data/recursosMalagaTranslations.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the exact definitions of the 8 orange resources
orange_resources_content = """export const malagaResourcesList: Resource[] = [
  {
    name: 'Red de Atención a Personas sin Hogar',
    description: 'Es un sistema coordinado por el',
    address: 'la Red está vinculada al',
    hours: 'lunes a viernes de 9:00 a 14:00 y de 16:00 a',
    free: 'Sí',
    requirements: 'entrevista de valoración social que realiza',
    contact: 'el',
    web: 'https://derechossociales.malaga.eu/personas-sin-hogar---emergencias/',
    phone: '951 926 010',
    email: '',
    social: '',
    target: 'Personas adultas en situación de sinhogarismo (viviendo en la',
    activities: 'Evaluación social individual, entrevista inicial, derivación al recurso adecuado,',
    status: '',
    category: 'alojamiento',
  },
  {
    name: 'Vialia',
    description: 'planta baja: cargar el móvil, aseos',
    address: 'Explanada de la Estación,',
    hours: '',
    free: 'Sí',
    requirements: '',
    contact: '',
    web: '',
    phone: '',
    email: '',
    social: '',
    target: '',
    activities: '',
    status: '',
    category: 'otros',
  },
  {
    name: 'Anfremar',
    description: 'Curso de Espeteros',
    address: '',
    hours: '',
    free: '',
    requirements: '',
    contact: '',
    web: '',
    phone: '',
    email: '',
    social: '',
    target: '',
    activities: '',
    status: 'Encarni (voluntaria) está en',
    category: 'empleo_formacion',
  },
  {
    name: 'Santander Málaga',
    description: '',
    address: '',
    hours: '',
    free: '',
    requirements: '',
    contact: '',
    web: '',
    phone: '',
    email: '',
    social: '',
    target: '',
    activities: '',
    status: '',
    category: 'salud_finanzas',
  },
  {
    name: 'CEAR CF',
    description: '',
    address: '',
    hours: '',
    free: '',
    requirements: '',
    contact: '',
    web: 'https://www.cear.es/club-de-futbol/equipos/',
    phone: '',
    email: '',
    social: '',
    target: '',
    activities: '',
    status: 'he preguntado a Pablo',
    category: 'apoyo_social',
  },
  {
    name: 'CBLINGUA',
    description: 'traductor jurado en Málaga, Traducción,',
    address: 'online y C/ Marqués de',
    hours: '',
    free: 'no',
    requirements: '',
    contact: '',
    web: 'https://traductorjuradomalaga.es/?ct-referrer=6p3e8rp',
    phone: '8le9x0i t1y53',
    email: 'info@cblingua.com',
    social: '',
    target: '',
    activities: '',
    status: '',
    category: 'tramites_legal',
  },
  {
    name: 'Alojamiento de Jóvenes (La Merced Migraciones)',
    description: 'El director de el lugar se llama Michel es un',
    address: 'ALalo Mjaemriceendt oM pigarraac jioovneense.P sl',
    hours: 'ae9zn5a 1s di t5eu6 al a7csi0o fn0lo 7dr eens uv m5ulenreor,a pbrieliudnatdar por Michael',
    free: 'si',
    requirements: 'Ser joven menor a 30 en situacion de',
    contact: 'vulnerabilidad',
    web: 'https://www.lamercedmigraciones.org/',
    phone: '951 56 70 07',
    email: '',
    social: '',
    target: '',
    activities: '',
    status: '',
    category: 'alojamiento',
  },
  {
    name: 'Embajada de España en Dakar (Senegal)',
    description: 'Legalización de Documentos para la entrada a España (Dirigido a personas de Gambia o Senegal)',
    address: 'Corniche Ouest, Fann Mermoz, Dakar, Senegal',
    hours: 'ohzo Vrailrliao ndºe 7a Bte.Pn. c2ió5n9 0a8l Tpeúlébfliocnoo e: s(+ d2e2 1lu)n 3e3s 8a6 9',
    free: '07 07',
    requirements: 'Ser de Gambia o Senegal',
    contact: '',
    web: 'https://www.exteriores.gob.es/Embajadas/dakar/es/Paginas/index.aspx',
    phone: '(+221) 33 869 07 07',
    email: '',
    social: '',
    target: '',
    activities: '',
    status: '',
    category: 'tramites_legal',
  },
];"""

# We want to replace the part from `export const malagaResourcesList: Resource[] = [` to the matching `];`
# Let's find the start and end of that list
start_match = re.search(r"export const malagaResourcesList: Resource\[\] = \[", content)
if start_match:
    start_idx = start_match.start()
    # Find matching closing bracket ];
    # Since resources are in objects, we can look for the next ];
    # Let's search for "];" starting from start_idx
    end_match = re.search(r"\];\s*\n", content[start_idx:])
    if end_match:
        end_idx = start_idx + end_match.end()
        # Overwrite content
        new_content = content[:start_idx] + orange_resources_content + "\n\n" + content[end_idx:]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Success updating recursosMalagaTranslations.ts to contain only the 8 orange resources.")
    else:
        print("Error: Could not find closing ];")
else:
    print("Error: Could not find malagaResourcesList start declaration")
