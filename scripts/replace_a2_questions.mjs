import fs from 'fs';

const filePath = './src/data/content.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const questionBanks = {
  "a2-vocab-animales": [
    { q: "¿Qué animal produce leche?", o: ["La vaca", "El perro", "El pez"], a: 0 },
    { q: "Este animal tiene cuello largo:", o: ["Jirafa", "Elefante", "Caballo"], a: 0 },
    { q: "Es el rey de la selva:", o: ["León", "Tigre", "Mono"], a: 0 },
    { q: "¿Qué animal ladra?", o: ["El perro", "El gato", "El pájaro"], a: 0 },
    { q: "¿Qué animal vuela?", o: ["El pájaro", "La tortuga", "El pez"], a: 0 },
    { q: "Vive en el agua y nada:", o: ["Pez", "Pájaro", "Conejo"], a: 0 },
    { q: "El animal que maúlla es...", o: ["El gato", "El perro", "La vaca"], a: 0 },
    { q: "Es un animal muy lento y lleva su casa:", o: ["Tortuga", "Conejo", "León"], a: 0 },
    { q: "¿Qué animal tiene orejas largas y salta?", o: ["Conejo", "Caballo", "Elefante"], a: 0 },
    { q: "Es grande, gris y tiene trompa:", o: ["Elefante", "Jirafa", "Tigre"], a: 0 },
    { q: "Animal que produce miel:", o: ["Abeja", "Mosca", "Mariposa"], a: 0 },
    { q: "¿Cuál de estos animales es un ave?", o: ["Pingüino", "Mono", "Caballo"], a: 0 },
    { q: "¿Qué animal corre muy rápido?", o: ["Guepardo / Tigre", "Tortuga", "Oso"], a: 0 },
    { q: "Animal que come plátanos y trepa árboles:", o: ["Mono", "Perro", "Jirafa"], a: 0 },
    { q: "Es verde y salta cerca del agua:", o: ["Rana", "Pez", "Araña"], a: 0 },
    { q: "Produce lana para la ropa:", o: ["Oveja", "Vaca", "Cerdo"], a: 0 },
    { q: "Animal que cacarea y pone huevos:", o: ["Gallina", "Vaca", "Pájaro"], a: 0 }
  ],
  "a2-comp-lectura": [
    { q: "En un texto, 'ayer' se refiere a...", o: ["El pasado", "El presente", "El futuro"], a: 0 },
    { q: "Si alguien dice 'estoy muy cansado', ¿cómo se siente?", o: ["Sin energía", "Feliz", "Enfadado"], a: 0 },
    { q: "Si la lectura dice 'Mañana lloverá', ¿cuándo ocurrirá?", o: ["En el futuro", "En el pasado", "Hoy"], a: 0 },
    { q: "¿Qué significa 'leer un cuento'?", o: ["Leer una historia corta", "Escribir una carta", "Comprar un libro"], a: 0 },
    { q: "Si alguien tiene hambre, normalmente...", o: ["Come", "Duerme", "Corre"], a: 0 },
    { q: "Si en el texto dice 'Juan corre rápido', ¿qué hace Juan?", o: ["Va a mucha velocidad", "Duerme", "Camina lento"], a: 0 },
    { q: "Cuando un personaje 'se despide', significa que...", o: ["Dice adiós", "Dice hola", "Llora"], a: 0 },
    { q: "Si la tienda está 'cerrada', tú...", o: ["No puedes comprar", "Puedes entrar", "Compras pan"], a: 0 },
    { q: "'Había una vez' se usa al principio de...", o: ["Un cuento", "Una carta formal", "Una noticia"], a: 0 },
    { q: "Si el protagonista 'encuentra' un tesoro, ¿qué significa?", o: ["Lo halla o lo ve", "Lo pierde", "Lo esconde"], a: 0 },
    { q: "¿Qué es un 'resumen'?", o: ["La idea principal breve", "Un cuento largo", "Una pregunta"], a: 0 },
    { q: "Si alguien dice 'No entiendo', necesita...", o: ["Una explicación", "Comida", "Dormir"], a: 0 },
    { q: "Si el texto habla del 'invierno', probablemente mencione...", o: ["Nieve y frío", "Playa y sol", "Mucho calor"], a: 0 },
    { q: "¿Qué significa 'subrayar' una palabra?", o: ["Poner una línea debajo", "Borrarla", "Ignorarla"], a: 0 },
    { q: "Si María 'estudió toda la noche', ella...", o: ["Está cansada hoy", "Durmió muy bien", "No sabe nada"], a: 0 },
    { q: "En un diálogo, '—' significa que...", o: ["Alguien habla", "El texto terminó", "Es un título"], a: 0 },
    { q: "Si el texto dice 'Al final, fueron felices', es...", o: ["La conclusión", "La introducción", "El título"], a: 0 }
  ],
  "a2-vocab-mapas": [
    { q: "El país al sur de España es...", o: ["Marruecos", "Francia", "Italia"], a: 0 },
    { q: "La capital de Francia es...", o: ["París", "Madrid", "Roma"], a: 0 },
    { q: "País situado al norte de México:", o: ["Estados Unidos", "Brasil", "Argentina"], a: 0 },
    { q: "¿Dónde está la Torre Eiffel?", o: ["Francia", "Italia", "España"], a: 0 },
    { q: "¿En qué continente está China?", o: ["Asia", "Europa", "América"], a: 0 },
    { q: "¿En qué país se encuentra Roma?", o: ["Italia", "Grecia", "Portugal"], a: 0 },
    { q: "La capital de España es...", o: ["Madrid", "Barcelona", "Sevilla"], a: 0 },
    { q: "El país más grande de Sudamérica es...", o: ["Brasil", "Chile", "Perú"], a: 0 },
    { q: "¿Qué país comparte la península Ibérica con España?", o: ["Portugal", "Francia", "Italia"], a: 0 },
    { q: "¿En qué continente está Egipto?", o: ["África", "Asia", "Europa"], a: 0 },
    { q: "Londres es la capital de...", o: ["Inglaterra / Reino Unido", "Irlanda", "Alemania"], a: 0 },
    { q: "¿Qué océano está entre América y Europa?", o: ["Atlántico", "Pacífico", "Índico"], a: 0 },
    { q: "¿En qué continente está Argentina?", o: ["América", "África", "Europa"], a: 0 },
    { q: "¿Dónde está Tokio?", o: ["Japón", "China", "Corea"], a: 0 },
    { q: "Marruecos está en el continente de...", o: ["África", "Europa", "Asia"], a: 0 },
    { q: "Rusia está situada en...", o: ["Europa y Asia", "Solo Asia", "Solo Europa"], a: 0 },
    { q: "¿Qué país tiene forma de bota?", o: ["Italia", "España", "Grecia"], a: 0 }
  ],
  "a2-vocab-direcciones": [
    { q: "Para indicar que vayas en la misma dirección, dices:", o: ["Sigue todo recto", "Gira a la izquierda", "Ve hacia atrás"], a: 0 },
    { q: "Lo contrario de 'derecha' es...", o: ["Izquierda", "Arriba", "Recto"], a: 0 },
    { q: "Si el banco no está lejos, está...", o: ["Cerca", "Allí", "A la vuelta"], a: 0 },
    { q: "¿Cómo preguntas dónde está el metro?", o: ["¿Dónde está el metro?", "¿Qué es el metro?", "¿Cuándo es el metro?"], a: 0 },
    { q: "Si necesitas cambiar de calle, debes...", o: ["Girar / Torcer", "Seguir recto", "Parar"], a: 0 },
    { q: "El lugar donde dos calles se cruzan es la...", o: ["Esquina / Cruce", "Avenida", "Plaza"], a: 0 },
    { q: "Si pasas la plaza, significa que la dejas...", o: ["Atrás", "Delante", "Arriba"], a: 0 },
    { q: "Para subir a la planta 2, usas el...", o: ["Ascensor / Escaleras", "Sótano", "Coche"], a: 0 },
    { q: "El parque está 'enfrente' significa que está...", o: ["Cara a cara", "Al lado", "Detrás"], a: 0 },
    { q: "Un lugar para caminar al lado de la calle es...", o: ["La acera", "La carretera", "El semáforo"], a: 0 },
    { q: "Lo opuesto a 'Cerca' es...", o: ["Lejos", "Dentro", "Encima"], a: 0 },
    { q: "¿Qué haces en un paso de cebra?", o: ["Cruzar la calle", "Aparcar el coche", "Girar"], a: 0 },
    { q: "El museo está 'al lado de' la iglesia, significa...", o: ["Muy cerca, contiguo", "Lejos", "Detrás"], a: 0 },
    { q: "Si te dicen 'Coge la primera calle a la derecha', tú...", o: ["Giras en la primera calle a la derecha", "Vas recto", "Giras a la izquierda"], a: 0 },
    { q: "Lo contrario de 'Subir' es...", o: ["Bajar", "Entrar", "Cruzar"], a: 0 },
    { q: "Un coche debe parar si el semáforo está en...", o: ["Rojo", "Verde", "Ámbar"], a: 0 },
    { q: "'Sigue hasta el final de la calle' significa...", o: ["No gires hasta llegar al final", "Date la vuelta", "Cruza ahora"], a: 0 }
  ],
  "a2-gram-necesidades": [
    { q: "Para vivir, el ser humano ___ beber agua.", o: ["necesita", "quiere", "odia"], a: 0 },
    { q: "Si estás cansado, ___ dormir.", o: ["tienes que / necesitas", "puedes", "sabes"], a: 0 },
    { q: "Yo ___ comprar pan, no hay en casa.", o: ["tengo que", "soy", "estoy"], a: 0 },
    { q: "Nosotros ___ estudiar para el examen.", o: ["debemos", "somos", "tenemos"], a: 0 },
    { q: "¿Qué ___ hacer mañana?", o: ["tienes que", "eres", "estás"], a: 0 },
    { q: "Para viajar a otro país, a veces ___ pasaporte.", o: ["necesitas", "comes", "lees"], a: 0 },
    { q: "Ella ___ trabajar todos los días.", o: ["tiene que", "tengo que", "tienes que"], a: 0 },
    { q: "___ silencio en la biblioteca. (Obligación general)", o: ["Hay que hacer", "Tengo que", "Necesitas"], a: 0 },
    { q: "Para aprender español, ___ practicar mucho.", o: ["hay que", "tengo", "debo de"], a: 0 },
    { q: "Yo no ___ ir, no es obligatorio.", o: ["tengo que", "necesito", "debo"], a: 0 },
    { q: "¿Tú ___ ayuda?", o: ["necesitas", "necesito", "necesita"], a: 0 },
    { q: "Ellos ___ descansar después del partido.", o: ["necesitan", "tienen", "deben de"], a: 0 },
    { q: "Para comprar, ___ dinero.", o: ["hace falta", "tiene", "es"], a: 0 },
    { q: "___ comer más verduras para estar sano.", o: ["Debes", "Tienes", "Haces"], a: 0 },
    { q: "Me duele la cabeza, ___ una aspirina.", o: ["necesito", "tengo", "quiero que"], a: 0 },
    { q: "Nosotros no ___ dinero, es gratis.", o: ["necesitamos", "debemos", "tenemos que"], a: 0 },
    { q: "Vosotros ___ hacer los deberes.", o: ["tenéis que", "tenéis", "debéis de"], a: 0 }
  ],
  "a2-gram-tener-estados": [
    { q: "Si hace 40 grados, yo ___.", o: ["tengo calor", "tengo frío", "tengo miedo"], a: 0 },
    { q: "Si hace -5 grados, nosotros ___.", o: ["tenemos frío", "tenemos calor", "tenemos sueño"], a: 0 },
    { q: "No he comido nada hoy, ___.", o: ["tengo hambre", "tengo sed", "tengo frío"], a: 0 },
    { q: "He caminado por el desierto, ___.", o: ["tengo sed", "tengo hambre", "tengo sueño"], a: 0 },
    { q: "Son las 3 de la madrugada, ___.", o: ["tengo sueño", "tengo calor", "tengo hambre"], a: 0 },
    { q: "Veo un león en la calle, ___.", o: ["tengo miedo", "tengo sed", "tengo frío"], a: 0 },
    { q: "Necesito ir al baño, ___.", o: ["tengo prisa / urgencia", "tengo frío", "tengo hambre"], a: 0 },
    { q: "Llego tarde al trabajo, ___.", o: ["tengo prisa", "tengo miedo", "tengo sueño"], a: 0 },
    { q: "Ella ___ razón, 2 + 2 son 4.", o: ["tiene", "es", "está"], a: 0 },
    { q: "¿___ hambre vosotros?", o: ["Tenéis", "Estáis", "Sois"], a: 0 },
    { q: "Si trabajas mucho sin parar, tú ___.", o: ["tienes cansancio", "estás cansado", "Las dos son comunes"], a: 1 },
    { q: "Ellos no han bebido agua, ___.", o: ["tienen sed", "tienen hambre", "tienen prisa"], a: 0 },
    { q: "¡Abre la ventana! ___ mucho calor.", o: ["Tengo", "Estoy", "Soy"], a: 0 },
    { q: "¡Cierra la puerta! ___ frío.", o: ["Tengo", "Hace", "Ambas pueden ser correctas"], a: 2 },
    { q: "El bebé llora porque ___ sueño.", o: ["tiene", "está", "es"], a: 0 },
    { q: "Yo nunca ___ miedo de los perros.", o: ["tengo", "soy", "estoy"], a: 0 },
    { q: "Cuando no como en todo el día, ___.", o: ["tengo mucha hambre", "soy hambre", "estoy hambre"], a: 0 }
  ],
  "a2-gram-me-duele": [
    { q: "Si como mucho caramelo, me duele ___.", o: ["la barriga / el estómago", "la rodilla", "el pelo"], a: 0 },
    { q: "Si escucho música muy alta, me duelen ___.", o: ["los oídos", "los ojos", "los pies"], a: 0 },
    { q: "He corrido 20 km, me duelen ___.", o: ["las piernas", "las manos", "las orejas"], a: 0 },
    { q: "Llevo gafas porque me duelen ___ al leer.", o: ["los ojos", "los dientes", "los brazos"], a: 0 },
    { q: "¿A ti ___ la garganta?", o: ["te duele", "me duele", "le duele"], a: 0 },
    { q: "A Juan ___ la cabeza.", o: ["le duele", "me duele", "te duele"], a: 0 },
    { q: "A nosotros ___ los pies.", o: ["nos duelen", "nos duele", "me duelen"], a: 0 },
    { q: "A ellos ___ la espalda.", o: ["les duele", "le duelen", "les duelen"], a: 0 },
    { q: "A mí ___ el estómago.", o: ["me duele", "te duele", "me duelen"], a: 0 },
    { q: "¿Qué te pasa? - ___ la muela.", o: ["Me duele", "Me duelen", "Te duele"], a: 0 },
    { q: "Si algo está en plural usamos:", o: ["duelen", "duele", "doler"], a: 0 },
    { q: "A ella ___ los brazos hoy.", o: ["le duelen", "le duele", "les duelen"], a: 0 },
    { q: "Si trabajas mucho frente al ordenador, te duele...", o: ["La espalda / los ojos", "Los pies", "Las rodillas"], a: 0 },
    { q: "Doctor, ___ mucho el pecho.", o: ["me duele", "le duele", "te duele"], a: 0 },
    { q: "A vosotros ___ las piernas de jugar al fútbol.", o: ["os duelen", "nos duelen", "les duelen"], a: 0 },
    { q: "¿A quién ___ la cabeza?", o: ["le duele", "me duele", "les duelen"], a: 0 },
    { q: "Me he caído, me ___ todo el cuerpo.", o: ["duele", "duelen", "doler"], a: 0 }
  ],
  "a2-comp-supermercado": [
    { q: "¿Dónde compras la fruta y verdura?", o: ["En la frutería / supermercado", "En la farmacia", "En la zapatería"], a: 0 },
    { q: "Para comprar carne voy a...", o: ["La carnicería", "La panadería", "La pescadería"], a: 0 },
    { q: "El lugar donde pagas en el supermercado es...", o: ["La caja", "La puerta", "El baño"], a: 0 },
    { q: "¿Qué usamos para llevar los productos en la tienda?", o: ["Un carrito o cesta", "Una mochila", "Una maleta"], a: 0 },
    { q: "¿Qué compras en la pescadería?", o: ["Pescado", "Pollo", "Queso"], a: 0 },
    { q: "El pan se compra en...", o: ["La panadería", "La ferretería", "La librería"], a: 0 },
    { q: "Si quieres comprar yogures o leche, buscas la sección de...", o: ["Lácteos", "Limpieza", "Bebidas"], a: 0 },
    { q: "¿Qué frase usas para preguntar el precio?", o: ["¿Cuánto cuesta?", "¿Dónde está?", "¿Cómo se llama?"], a: 0 },
    { q: "La lista de cosas que necesitas comprar es...", o: ["La lista de la compra", "El recibo", "La factura"], a: 0 },
    { q: "Cuando pagas, te dan un papel que se llama...", o: ["Ticket / Recibo", "Billete", "Libro"], a: 0 },
    { q: "¿Qué artículo NO está en la sección de limpieza?", o: ["Cebollas", "Jabón", "Lejía"], a: 0 },
    { q: "En la charcutería puedes comprar...", o: ["Jamón y queso", "Pescado", "Zapatos"], a: 0 },
    { q: "Para comprar medicina vas a...", o: ["La farmacia", "La panadería", "La carnicería"], a: 0 },
    { q: "El agua y los zumos están en la sección de...", o: ["Bebidas", "Lácteos", "Carnes"], a: 0 },
    { q: "Para pagar con tarjeta necesitas...", o: ["Una tarjeta de crédito/débito", "Efectivo", "Un cheque"], a: 0 },
    { q: "¿Qué compras por docenas?", o: ["Huevos", "Leche", "Carne"], a: 0 },
    { q: "Si el producto pesa mucho, el supermercado lo vende por...", o: ["Kilos", "Litros", "Metros"], a: 0 }
  ],
  "a2-comp-medico": [
    { q: "El lugar al que vas si estás enfermo es...", o: ["El médico / El hospital", "El supermercado", "La escuela"], a: 0 },
    { q: "La persona que te receta medicinas es...", o: ["El doctor / La doctora", "El profesor", "El policía"], a: 0 },
    { q: "Si tienes fiebre, el médico te toma la...", o: ["Temperatura", "Altura", "Edad"], a: 0 },
    { q: "Si te duele la garganta y toses, tienes...", o: ["Tos / Resfriado", "Alergia al sol", "Hambre"], a: 0 },
    { q: "El papel que el médico te da para comprar medicina se llama...", o: ["Receta", "Factura", "Carta"], a: 0 },
    { q: "Si te rompes un brazo, te ponen...", o: ["Una escayola / yeso", "Una tirita", "Una bufanda"], a: 0 },
    { q: "¿Cómo te sientes si estás resfriado?", o: ["Cansado y con dolor de cabeza", "Con mucha energía", "Muy feliz"], a: 0 },
    { q: "Para curar un corte pequeño te pones...", o: ["Una tirita", "Una escayola", "Una inyección"], a: 0 },
    { q: "¿Qué te pones en la axila para medir la fiebre?", o: ["Un termómetro", "Una venda", "Un fonendoscopio"], a: 0 },
    { q: "¿Qué preguntas al llegar a la consulta?", o: ["¿Quién es el último?", "¿Cuánto cuesta?", "¿Qué hora es?"], a: 0 },
    { q: "Si un alimento te hace daño siempre, tienes...", o: ["Alergia o intolerancia", "Fiebre", "Gripe"], a: 0 },
    { q: "La enfermera te puede poner una...", o: ["Inyección / Vacuna", "Tirita en el zapato", "Gorra"], a: 0 },
    { q: "Las pastillas y jarabes son...", o: ["Medicamentos", "Comida", "Bebidas"], a: 0 },
    { q: "¿Qué médico cuida los dientes?", o: ["El dentista", "El pediatra", "El cirujano"], a: 0 },
    { q: "¿Qué médico cuida a los niños?", o: ["El pediatra", "El dentista", "El oftalmólogo"], a: 0 },
    { q: "Si te duele el estómago, quizás tengas un dolor de...", o: ["Barriga", "Cabeza", "Espalda"], a: 0 },
    { q: "¿Qué necesitas pedir antes de ir al médico?", o: ["Cita previa", "Permiso de conducir", "La cuenta"], a: 0 }
  ],
  "a2-gram-preterito-perfecto": [
    { q: "Hoy ___ una manzana.", o: ["he comido", "ha comido", "hemos comido"], a: 0 },
    { q: "Esta mañana María ___ temprano.", o: ["se ha levantado", "se han levantado", "se he levantado"], a: 0 },
    { q: "Esta semana nosotros ___ mucho.", o: ["hemos trabajado", "han trabajado", "habéis trabajado"], a: 0 },
    { q: "¿Tú ___ alguna vez a España?", o: ["has viajado", "ha viajado", "he viajado"], a: 0 },
    { q: "Este año ellos no ___ de vacaciones.", o: ["han ido", "hemos ido", "habéis ido"], a: 0 },
    { q: "Yo nunca ___ sushi.", o: ["he probado", "has probado", "ha probado"], a: 0 },
    { q: "El pretérito perfecto de 'hacer' (yo) es...", o: ["he hecho", "he hacido", "he echo"], a: 0 },
    { q: "El pretérito perfecto de 'escribir' (él) es...", o: ["ha escrito", "ha escribido", "ha escrebido"], a: 0 },
    { q: "El pretérito perfecto de 'ver' (nosotros) es...", o: ["hemos visto", "hemos vido", "hemos veído"], a: 0 },
    { q: "¿___ (vosotros) las llaves?", o: ["Habéis encontrado", "Han encontrado", "Has encontrado"], a: 0 },
    { q: "Aún no ___ (yo) mis deberes.", o: ["he terminado", "ha terminado", "has terminado"], a: 0 },
    { q: "Pedro ya ___ (volver) a casa.", o: ["ha vuelto", "ha volvido", "ha volvedo"], a: 0 },
    { q: "Esta tarde ___ (llover) mucho.", o: ["ha llovido", "he llovido", "han llovido"], a: 0 },
    { q: "¿Qué ___ (pasar) hoy?", o: ["ha pasado", "han pasado", "has pasado"], a: 0 },
    { q: "Mis padres ___ (decir) que no.", o: ["han dicho", "han decido", "han diciado"], a: 0 },
    { q: "Hoy me ___ (levantar) a las 8.", o: ["he levantado", "ha levantado", "has levantado"], a: 0 },
    { q: "El verbo auxiliar del pretérito perfecto es...", o: ["Haber", "Tener", "Ser"], a: 0 }
  ],
  "a2-gram-futuro-proximo": [
    { q: "Mañana yo ___ a comprar pan.", o: ["voy", "vas", "vamos"], a: 0 },
    { q: "El próximo año, ella ___ a viajar a Francia.", o: ["va", "voy", "van"], a: 0 },
    { q: "Este fin de semana, nosotros ___ a ver una película.", o: ["vamos", "van", "vais"], a: 0 },
    { q: "¿Qué ___ a hacer tú esta tarde?", o: ["vas", "va", "voy"], a: 0 },
    { q: "Mis amigos ___ a venir a mi fiesta.", o: ["van", "vamos", "va"], a: 0 },
    { q: "Vosotros ___ a aprender español muy rápido.", o: ["vais", "van", "vamos"], a: 0 },
    { q: "El cielo está negro, ___ a llover.", o: ["va", "voy", "van"], a: 0 },
    { q: "Yo no ___ a comer más, estoy lleno.", o: ["voy", "vas", "va"], a: 0 },
    { q: "La estructura del futuro próximo es...", o: ["Ir + a + infinitivo", "Ir + infinitivo", "Estar + infinitivo"], a: 0 },
    { q: "¿Dónde ___ a dormir ellos hoy?", o: ["van", "vamos", "vais"], a: 0 },
    { q: "Nosotros ___ a cocinar una tortilla.", o: ["vamos", "vais", "van"], a: 0 },
    { q: "Tú y yo ___ a salir esta noche.", o: ["vamos", "vais", "van"], a: 0 },
    { q: "Usted ___ a entender esto pronto.", o: ["va", "vas", "voy"], a: 0 },
    { q: "Ellas ___ a llegar tarde.", o: ["van", "vamos", "va"], a: 0 },
    { q: "Yo ___ a estudiar más.", o: ["voy", "vas", "vamos"], a: 0 },
    { q: "¿A qué hora ___ a terminar tú?", o: ["vas", "va", "voy"], a: 0 },
    { q: "El tren ___ a salir en 5 minutos.", o: ["va", "van", "voy"], a: 0 }
  ],
  "a2-gram-comparaciones": [
    { q: "Juan es ___ alto que Pedro.", o: ["más", "muy", "tan"], a: 0 },
    { q: "Esta casa es ___ grande como la otra.", o: ["tan", "más", "menos"], a: 0 },
    { q: "Yo tengo ___ libros como tú.", o: ["tantos", "tan", "más"], a: 0 },
    { q: "Ella tiene ___ años que yo.", o: ["menos", "tan", "igual"], a: 0 },
    { q: "El león es ___ rápido que la tortuga.", o: ["más", "menos", "tan"], a: 0 },
    { q: "Mi coche es ___ bueno como el tuyo.", o: ["tan", "igual", "más"], a: 0 },
    { q: "Madrid es ___ grande que Toledo.", o: ["más", "menos", "tan"], a: 0 },
    { q: "Este examen es ___ fácil que el anterior.", o: ["menos", "tan", "igual"], a: 0 },
    { q: "Yo como ___ como tú.", o: ["tanto", "tan", "más"], a: 0 },
    { q: "El invierno es ___ frío que el verano.", o: ["más", "menos", "tan"], a: 0 },
    { q: "El oro es ___ caro que la plata.", o: ["más", "tan", "igual"], a: 0 },
    { q: "Nosotros trabajamos ___ que ellos (menos cantidad).", o: ["menos", "tan", "igual"], a: 0 },
    { q: "Para igualdad con adjetivos usamos...", o: ["tan ... como", "más ... que", "tanto ... que"], a: 0 },
    { q: "Para igualdad con sustantivos (nombres) usamos...", o: ["tanto/a/os/as ... como", "tan ... como", "más ... como"], a: 0 },
    { q: "Tengo ___ amigas como tú.", o: ["tantas", "tantos", "tan"], a: 0 },
    { q: "Mejor es el comparativo de...", o: ["Bueno", "Malo", "Grande"], a: 0 },
    { q: "Peor es el comparativo de...", o: ["Malo", "Bueno", "Pequeño"], a: 0 }
  ],
  "a2-vocab-restaurante": [
    { q: "El papel donde está la lista de platos y precios es...", o: ["El menú / La carta", "La factura", "El recibo"], a: 0 },
    { q: "La persona que te trae la comida es...", o: ["El camarero", "El cocinero", "El recepcionista"], a: 0 },
    { q: "Para pagar, pides...", o: ["La cuenta", "La carta", "El menú"], a: 0 },
    { q: "El primer plato que comes se llama...", o: ["Primer plato o entrante", "Postre", "Bebida"], a: 0 },
    { q: "Lo dulce que comes al final de la comida es...", o: ["El postre", "El entrante", "La guarnición"], a: 0 },
    { q: "Para reservar una mesa dices...", o: ["Quería reservar una mesa, por favor", "Quiero pagar la cuenta", "¿Dónde está el baño?"], a: 0 },
    { q: "¿Qué le dices al camarero para pedir?", o: ["Para mí, la ensalada por favor", "Tráeme la cuenta", "Adiós"], a: 0 },
    { q: "Si la comida no tiene sal, le falta...", o: ["Sabor / Sal", "Azúcar", "Agua"], a: 0 },
    { q: "El dinero extra que dejas si el servicio es bueno es...", o: ["La propina", "El impuesto", "El billete"], a: 0 },
    { q: "¿Qué usas para limpiarte la boca en la mesa?", o: ["La servilleta", "El mantel", "El vaso"], a: 0 },
    { q: "Si la carne está muy hecha, está...", o: ["Muy cocinada", "Poco cocinada", "Cruda"], a: 0 },
    { q: "Una bebida con gas muy común es...", o: ["El refresco / Agua con gas", "El vino tinto", "El café"], a: 0 },
    { q: "Si eres vegetariano, no comes...", o: ["Carne ni pescado", "Verduras", "Frutas"], a: 0 },
    { q: "El cuchillo, tenedor y cuchara son los...", o: ["Cubiertos", "Platos", "Vasos"], a: 0 },
    { q: "¿Qué pides para beber por la mañana normalmente?", o: ["Un café o té", "Una cerveza", "Una copa de vino"], a: 0 },
    { q: "Si no quieres comer en el restaurante, pides comida para...", o: ["Llevar", "Tirar", "Dormir"], a: 0 },
    { q: "¿Qué significa 'Menú del día'?", o: ["Un menú cerrado más económico", "El plato más caro", "Comida para niños"], a: 0 }
  ]
};

const lessonsRegex = /\{\s*id:\s*"(a2-[^"]+)"([\s\S]*?)exercises:\s*\[([\s\S]*?)\]\s*\}/g;

let match;
let chunks = [];
let lastIndex = 0;

while ((match = lessonsRegex.exec(content)) !== null) {
  const [fullMatch, lessonId, middlePart, exercisesContent] = match;
  
  // keep only the original questions which didn't have "Pregunta adicional"
  let validExercises = [];
  let existingCount = 0;
  
  const singleExerciseRegex = /\{[^}]*id:\s*"ex\d+"[^}]*\}/g;
  const oldExs = exercisesContent.match(singleExerciseRegex) || [];
  
  for (const oldEx of oldExs) {
    if (!oldEx.includes("Pregunta adicional")) {
      validExercises.push(oldEx);
      existingCount++;
    }
  }

  // Generate new real questions
  const bank = questionBanks[lessonId] || [];
  let added = 0;
  
  for (let i = 0; existingCount + added < 20 && i < bank.length; i++) {
    const qData = bank[i];
    const qNum = existingCount + added + 1;
    const exStr = `{
        id: "ex${qNum}",
        question: "${qData.q}",
        options: ${JSON.stringify(qData.o)},
        correctAnswer: ${qData.a}
      }`;
    validExercises.push(exStr);
    added++;
  }
  
  while (existingCount + added < 20) {
    const qData = bank[(added) % bank.length] || { q: "Pregunta extra A2", o:["A","B","C"], a:0 };
    const qNum = existingCount + added + 1;
    const exStr = `{
        id: "ex${qNum}",
        question: "${qData.q} (Extra)",
        options: ${JSON.stringify(qData.o)},
        correctAnswer: ${qData.a}
      }`;
    validExercises.push(exStr);
    added++;
  }

  const newExercisesStr = '\n      ' + validExercises.join(',\n      ') + '\n    ';
  const modifiedMatch = `{
    id: "${lessonId}"${middlePart}exercises: [${newExercisesStr}]
  }`;
  
  chunks.push(content.slice(lastIndex, match.index));
  chunks.push(modifiedMatch);
  lastIndex = match.index + fullMatch.length;
}

chunks.push(content.slice(lastIndex));

fs.writeFileSync(filePath, chunks.join(''), 'utf-8');
console.log('Done replacing A2 with real contextual questions');
