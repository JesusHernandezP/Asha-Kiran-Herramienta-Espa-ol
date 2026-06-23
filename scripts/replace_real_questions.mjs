import fs from 'fs';

const filePath = './src/data/content.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// The dictionaries with specific A1 questions for each section
const questionBanks = {
  "a1-alfa-abecedario": [
    { q: "¿Con qué letra empieza 'Gato'?", o: ["C", "G", "J"], a: 1 },
    { q: "¿Qué letra va después de la 'M'?", o: ["N", "L", "O"], a: 0 },
    { q: "¿Cuál es una vocal?", o: ["P", "E", "S"], a: 1 },
    { q: "¿Con qué letra termina 'Reloj'?", o: ["J", "G", "X"], a: 0 },
    { q: "¿Cuál no es una vocal?", o: ["A", "I", "R"], a: 2 },
    { q: "¿Qué letra va antes de la 'C'?", o: ["B", "D", "A"], a: 0 },
    { q: "¿Con qué letra empieza 'Zapato'?", o: ["S", "Z", "C"], a: 1 },
    { q: "¿Qué letra suena fuerte en 'Perro'?", o: ["P", "RR", "O"], a: 1 },
    { q: "¿Qué letra falta en '_asa' (House)?", o: ["K", "S", "C"], a: 2 },
    { q: "¿Cómo se escribe 'Water' en español?", o: ["Agua", "Ajua", "Awa"], a: 0 },
    { q: "¿Con qué letra empieza 'Hola'?", o: ["O", "H", "J"], a: 1 },
    { q: "¿Qué letra sigue a la 'T'?", o: ["S", "U", "V"], a: 1 },
    { q: "¿Cuál es la primera letra del abecedario?", o: ["A", "E", "O"], a: 0 },
    { q: "¿Cuál es la última letra del abecedario?", o: ["Y", "X", "Z"], a: 2 },
    { q: "¿Con qué letra empieza 'Queso'?", o: ["C", "K", "Q"], a: 2 },
    { q: "¿Qué letra es la 'H' en 'Hola'?", o: ["Fuerte", "Muda", "Suave"], a: 1 },
    { q: "¿Cómo se llama la letra 'Ñ'?", o: ["Ene", "Eñe", "Eme"], a: 1 }
  ],
  "a1-vocab-cuerpo": [
    { q: "¿Qué usamos para ver?", o: ["Las orejas", "Los ojos", "La nariz"], a: 1 },
    { q: "¿Qué usamos para caminar?", o: ["Las piernas", "Los brazos", "Las manos"], a: 0 },
    { q: "¿Dónde está el pelo?", o: ["En el pie", "En la cabeza", "En el brazo"], a: 1 },
    { q: "¿Qué usamos para escuchar?", o: ["Los ojos", "La boca", "Las orejas"], a: 2 },
    { q: "¿Cuántos dedos hay en una mano?", o: ["Cinco", "Seis", "Cuatro"], a: 0 },
    { q: "¿Qué parte conecta la cabeza con el cuerpo?", o: ["El cuello", "La espalda", "El pecho"], a: 0 },
    { q: "El plural de 'El pie' es...", o: ["Los pies", "Los pie", "Las pies"], a: 0 },
    { q: "¿Qué está en la cara?", o: ["El codo", "La nariz", "La rodilla"], a: 1 },
    { q: "¿Con qué saboreamos la comida?", o: ["Con la lengua", "Con los dientes", "Con el cuello"], a: 0 },
    { q: "Tenemos dos...", o: ["Narices", "Cabezas", "Manos"], a: 2 },
    { q: "¿Qué doblamos al caminar?", o: ["La rodilla", "El codo", "El hombro"], a: 0 },
    { q: "¿Qué usamos para comer?", o: ["La boca", "La oreja", "El ojo"], a: 0 },
    { q: "¿Dónde ponemos los zapatos?", o: ["En las manos", "En los pies", "En la cabeza"], a: 1 },
    { q: "El corazón está en...", o: ["El pecho", "La pierna", "La cara"], a: 0 },
    { q: "Después de la mano viene el...", o: ["Pie", "Brazo", "Cuello"], a: 1 },
    { q: "¿Qué nos duele si pensamos mucho?", o: ["La cabeza", "El pie", "La mano"], a: 0 },
    { q: "¿Qué usamos para escribir?", o: ["El pie", "La mano", "La oreja"], a: 1 }
  ],
  "a1-vocab-colores": [
    { q: "¿De qué color es la hierba?", o: ["Rojo", "Verde", "Azul"], a: 1 },
    { q: "¿De qué color es la nieve?", o: ["Negro", "Amarillo", "Blanco"], a: 2 },
    { q: "¿De qué color es el carbón?", o: ["Negro", "Blanco", "Gris"], a: 0 },
    { q: "¿De qué color es un plátano?", o: ["Rojo", "Amarillo", "Azul"], a: 1 },
    { q: "¿De qué color es la leche?", o: ["Blanca", "Negra", "Roja"], a: 0 },
    { q: "El color del mar es generalmente...", o: ["Azul", "Verde", "Rojo"], a: 0 },
    { q: "Una rosa suele ser de color...", o: ["Rojo", "Negro", "Azul"], a: 0 },
    { q: "¿Qué color resulta de mezclar blanco y negro?", o: ["Marrón", "Gris", "Rosa"], a: 1 },
    { q: "El chocolate es...", o: ["Verde", "Marrón", "Blanco"], a: 1 },
    { q: "¿De qué color es el cielo nocturno?", o: ["Azul oscuro / Negro", "Blanco", "Amarillo"], a: 0 },
    { q: "¿Qué color significa 'Peligro' o 'Parar' en un semáforo?", o: ["Verde", "Amarillo", "Rojo"], a: 2 },
    { q: "¿Qué color significa 'Avanzar' en un semáforo?", o: ["Rojo", "Verde", "Azul"], a: 1 },
    { q: "¿De qué color es una naranja?", o: ["Naranja", "Amarillo", "Rojo"], a: 0 },
    { q: "Un cerdo de juguete suele ser...", o: ["Negro", "Rosa", "Verde"], a: 1 },
    { q: "¿De qué color es la sangre?", o: ["Roja", "Azul", "Verde"], a: 0 },
    { q: "¿De qué color es el sol?", o: ["Verde", "Morado", "Amarillo"], a: 2 },
    { q: "El cielo despejado es...", o: ["Rojo", "Marrón", "Azul"], a: 2 }
  ],
  "a1-gram-articulos": [
    { q: "___ chico", o: ["El", "La", "Los", "Las"], a: 0 },
    { q: "___ chicas", o: ["El", "La", "Los", "Las"], a: 3 },
    { q: "___ gatos", o: ["El", "La", "Los", "Las"], a: 2 },
    { q: "___ libro", o: ["El", "La", "Los", "Las"], a: 0 },
    { q: "___ mochilas", o: ["El", "La", "Los", "Las"], a: 3 },
    { q: "___ profesora", o: ["El", "La", "Los", "Las"], a: 1 },
    { q: "___ perros", o: ["El", "La", "Los", "Las"], a: 2 },
    { q: "___ agua (excepción)", o: ["El", "La", "Los", "Las"], a: 0 },
    { q: "___ manos", o: ["El", "La", "Los", "Las"], a: 3 },
    { q: "___ flor", o: ["El", "La", "Los", "Las"], a: 1 },
    { q: "___ zapatos", o: ["El", "La", "Los", "Las"], a: 2 },
    { q: "___ hombre", o: ["El", "La", "Los", "Las"], a: 0 },
    { q: "___ mujer", o: ["El", "La", "Los", "Las"], a: 1 },
    { q: "___ día (excepción)", o: ["El", "La", "Los", "Las"], a: 0 },
    { q: "___ problemas (excepción)", o: ["El", "La", "Los", "Las"], a: 2 },
    { q: "___ ciudades", o: ["El", "La", "Los", "Las"], a: 3 },
    { q: "___ universidad", o: ["El", "La", "Los", "Las"], a: 1 }
  ],
  "a1-gram-pronombres": [
    { q: "___ soy estudiante.", o: ["Él", "Tú", "Yo"], a: 2 },
    { q: "___ es mi amigo Carlos.", o: ["Ella", "Él", "Nosotros"], a: 1 },
    { q: "___ comemos paella.", o: ["Ellos", "Nosotros", "Yo"], a: 1 },
    { q: "___ tienes un coche rojo.", o: ["Tú", "Él", "Nosotros"], a: 0 },
    { q: "___ son de Madrid.", o: ["Ellos", "Él", "Nosotros"], a: 0 },
    { q: "___ (vosotros) sois hermanos.", o: ["Vosotros", "Nosotros", "Ellos"], a: 0 },
    { q: "___ es mi madre.", o: ["Él", "Ella", "Yo"], a: 1 },
    { q: "Juan y yo somos estudiantes. ___ estudiamos español.", o: ["Ellos", "Nosotros", "Vosotros"], a: 1 },
    { q: "María y tú. ___ cantáis muy bien.", o: ["Ellas", "Vosotros", "Nosotras"], a: 1 },
    { q: "Luis y Pedro están allí. ___ son amigos.", o: ["Ellos", "Vosotros", "Nosotros"], a: 0 },
    { q: "___ tengo frío.", o: ["Yo", "Él", "Tú"], a: 0 },
    { q: "___ eres simpático.", o: ["Tú", "Nosotros", "Yo"], a: 0 },
    { q: "___ estamos cansados.", o: ["Vosotros", "Ellos", "Nosotros"], a: 2 },
    { q: "___ habla italiano.", o: ["Él / Ella", "Yo", "Tú"], a: 0 },
    { q: "___ vivo en Barcelona.", o: ["Tú", "Yo", "Ellos"], a: 1 },
    { q: "Paco, ___ eres muy alto.", o: ["él", "tú", "yo"], a: 1 },
    { q: "Mis padres no están, ___ están trabajando.", o: ["ellos", "nosotros", "vosotros"], a: 0 }
  ],
  "a1-gram-verbos": [
    { q: "Yo ___ español.", o: ["soy", "estoy", "hablo"], a: 2 },
    { q: "Tú ___ en casa.", o: ["eres", "estás", "tienes"], a: 1 },
    { q: "Él ___ 20 años.", o: ["es", "tiene", "está"], a: 1 },
    { q: "Nosotros ___ estudiantes.", o: ["somos", "estamos", "tenemos"], a: 0 },
    { q: "Ellos ___ hambre.", o: ["son", "tienen", "están"], a: 1 },
    { q: "Yo ___ muy feliz hoy.", o: ["estoy", "soy", "tengo"], a: 0 },
    { q: "Ella ___ doctora.", o: ["está", "tiene", "es"], a: 2 },
    { q: "¿Dónde ___ el baño?", o: ["es", "está", "tiene"], a: 1 },
    { q: "Tú ___ un perro.", o: ["eres", "estás", "tienes"], a: 2 },
    { q: "Nosotros ___ sed.", o: ["somos", "tenemos", "estamos"], a: 1 },
    { q: "La mesa ___ de madera.", o: ["es", "está", "tiene"], a: 0 },
    { q: "La sopa ___ caliente.", o: ["es", "está", "tiene"], a: 1 },
    { q: "Yo ___ dos hermanos.", o: ["soy", "tengo", "estoy"], a: 1 },
    { q: "Vosotros ___ de México.", o: ["sois", "estáis", "tenéis"], a: 0 },
    { q: "Hoy ___ lunes.", o: ["es", "está", "tiene"], a: 0 },
    { q: "¿Qué hora ___?", o: ["está", "tiene", "es"], a: 2 },
    { q: "Yo ___ enfermo.", o: ["soy", "estoy", "tengo"], a: 1 }
  ],
  "a1-vocab-ropa": [
    { q: "Me pongo la ___ en la cabeza.", o: ["Gorra", "Bufanda", "Camiseta"], a: 0 },
    { q: "Llevo los ___ en las piernas.", o: ["Pantalones", "Guantes", "Zapatos"], a: 0 },
    { q: "En invierno uso una ___ para el frío.", o: ["Chaqueta", "Camiseta", "Falda"], a: 0 },
    { q: "Me pongo los ___ en los pies.", o: ["Sombreros", "Zapatos", "Cinturones"], a: 1 },
    { q: "Para nadar uso el ___.", o: ["Bañador", "Abrigo", "Vestido"], a: 0 },
    { q: "Para dormir me pongo el ___.", o: ["Pijama", "Vaquero", "Jersey"], a: 0 },
    { q: "Llevo una ___ en el cuello porque hace frío.", o: ["Bufanda", "Corbata", "Gorra"], a: 0 },
    { q: "Uso ___ en las manos en invierno.", o: ["Guantes", "Calcetines", "Zapatos"], a: 0 },
    { q: "Llevo ___ debajo de los zapatos.", o: ["Calcetines", "Guantes", "Bufandas"], a: 0 },
    { q: "Las mujeres a veces llevan una ___ en lugar de pantalones.", o: ["Falda", "Camisa", "Gorra"], a: 0 },
    { q: "Un ___ es muy elegante para una boda.", o: ["Traje", "Pijama", "Bañador"], a: 0 },
    { q: "Llevo una ___ de manga corta en verano.", o: ["Camiseta", "Bufanda", "Chaqueta"], a: 0 },
    { q: "Los pantalones que usamos mucho se llaman...", o: ["Vaqueros", "Camisas", "Zapatos"], a: 0 },
    { q: "Para hacer deporte uso...", o: ["Ropa deportiva / Chándal", "Traje", "Vestido"], a: 0 },
    { q: "Se pone en la cintura para sujetar el pantalón:", o: ["Cinturón", "Corbata", "Bufanda"], a: 0 },
    { q: "Para no mojarme si llueve, uso un...", o: ["Impermeable", "Bañador", "Pijama"], a: 0 },
    { q: "Las ___ son calzado abierto para el verano.", o: ["Sandalias", "Botas", "Zapatillas deportivas"], a: 0 }
  ],
  "a1-gram-genero": [
    { q: "___ problema", o: ["El", "La"], a: 0 },
    { q: "___ solución", o: ["El", "La"], a: 1 },
    { q: "___ mapa", o: ["El", "La"], a: 0 },
    { q: "___ universidad", o: ["El", "La"], a: 1 },
    { q: "___ idioma", o: ["El", "La"], a: 0 },
    { q: "___ mano", o: ["El", "La"], a: 1 },
    { q: "___ día", o: ["El", "La"], a: 0 },
    { q: "___ moto(cicleta)", o: ["El", "La"], a: 1 },
    { q: "___ foto(grafía)", o: ["El", "La"], a: 1 },
    { q: "___ agua (singular)", o: ["El", "La"], a: 0 },
    { q: "___ planeta", o: ["El", "La"], a: 0 },
    { q: "___ ciudad", o: ["El", "La"], a: 1 },
    { q: "___ clima", o: ["El", "La"], a: 0 },
    { q: "___ sofá", o: ["El", "La"], a: 0 },
    { q: "___ clase", o: ["El", "La"], a: 1 },
    { q: "___ flor", o: ["El", "La"], a: 1 },
    { q: "___ árbol", o: ["El", "La"], a: 0 }
  ],
  "a1-gram-posesivos": [
    { q: "___ (yo) libro es nuevo.", o: ["Mi", "Tu", "Su"], a: 0 },
    { q: "___ (tú) casa es grande.", o: ["Mi", "Tu", "Su"], a: 1 },
    { q: "___ (él) coche es rojo.", o: ["Su", "Tu", "Mi"], a: 0 },
    { q: "___ (nosotros) amigos son simpáticos.", o: ["Nuestros", "Vuestros", "Sus"], a: 0 },
    { q: "___ (ella) perro se llama Max.", o: ["Su", "Tu", "Mi"], a: 0 },
    { q: "___ (vosotros) madre es profesora.", o: ["Vuestra", "Nuestra", "Su"], a: 0 },
    { q: "___ (ellos) zapatos están limpios.", o: ["Sus", "Tus", "Mis"], a: 0 },
    { q: "¿Es esta ___ (tú) mochila?", o: ["tu", "su", "mi"], a: 0 },
    { q: "___ (yo) hermanos viven en París.", o: ["Mis", "Tus", "Sus"], a: 0 },
    { q: "No encuentro ___ (yo) llaves.", o: ["mis", "tus", "sus"], a: 0 },
    { q: "___ (nosotros) ciudad es muy bonita.", o: ["Nuestra", "Vuestra", "Su"], a: 0 },
    { q: "Pedro y ___ (él) hermana son altos.", o: ["su", "tu", "mi"], a: 0 },
    { q: "Señor, ¿es este ___ (usted) abrigo?", o: ["su", "tu", "mi"], a: 0 },
    { q: "___ (nosotros) abuelos tienen 80 años.", o: ["Nuestros", "Vuestros", "Mis"], a: 0 },
    { q: "___ (tú) ojos son azules.", o: ["Tus", "Sus", "Mis"], a: 0 },
    { q: "Me gusta ___ (vosotros) casa.", o: ["vuestra", "nuestra", "su"], a: 0 },
    { q: "Ana y ___ (ella) hijos van al parque.", o: ["sus", "tus", "mis"], a: 0 }
  ],
  "a1-gram-negacion": [
    { q: "Yo ___ como carne, soy vegetariano.", o: ["no", "sí", "también"], a: 0 },
    { q: "A mí ___ me gusta el fútbol. ¡Lo odio!", o: ["no", "sí", "nunca"], a: 0 },
    { q: "¿Te gusta el café? - ___, mucho.", o: ["Sí", "No", "Tampoco"], a: 0 },
    { q: "Ellos ___ hablan ruso, solo español.", o: ["no", "sí", "siempre"], a: 0 },
    { q: "No me gusta el frío, y a ti ___.", o: ["tampoco", "también", "sí"], a: 0 },
    { q: "Me gusta la pizza. - A mí ___.", o: ["también", "tampoco", "no"], a: 0 },
    { q: "___, no quiero ir.", o: ["No", "Sí", "También"], a: 0 },
    { q: "Nosotros ___ estamos cansados.", o: ["no", "sí", "y"], a: 0 },
    { q: "Él ___ tiene dinero.", o: ["no", "sí", "con"], a: 0 },
    { q: "¿Vienes a la fiesta? - ___, no puedo.", o: ["No", "Sí", "Tampoco"], a: 0 },
    { q: "___, gracias. Ya he comido.", o: ["No", "Sí", "También"], a: 0 },
    { q: "¿Tienes hambre? - ___, quiero comer ya.", o: ["Sí", "No", "Tampoco"], a: 0 },
    { q: "A María ___ le gusta leer.", o: ["no", "sí", "tampoco"], a: 0 },
    { q: "A mi perro ___ le gusta bañarse.", o: ["no", "sí", "también"], a: 0 },
    { q: "Nosotros ___ trabajamos los domingos. Descansamos.", o: ["no", "sí", "tampoco"], a: 0 },
    { q: "___ me gusta llegar tarde.", o: ["No", "Sí", "También"], a: 0 },
    { q: "No veo nada, ___ hay luz.", o: ["no", "sí", "tampoco"], a: 0 }
  ],
  "a1-vocab-saludos": [
    { q: "¿Cómo se dice 'Good morning'?", o: ["Buenos días", "Buenas tardes", "Buenas noches"], a: 0 },
    { q: "¿Cómo se dice 'Good night'?", o: ["Buenas noches", "Buenos días", "Hola"], a: 0 },
    { q: "Para despedirte dices:", o: ["Adiós", "Hola", "Buenos días"], a: 0 },
    { q: "¿Qué dices a las 16:00 h?", o: ["Buenas tardes", "Buenos días", "Buenas noches"], a: 0 },
    { q: "- 'Encantado de conocerte' - '________'", o: ["Igualmente", "Adiós", "Bien"], a: 0 },
    { q: "Si alguien estornuda dices:", o: ["¡Salud!", "¡Adiós!", "¡Gracias!"], a: 0 },
    { q: "¿Cómo pides un favor?", o: ["Por favor", "De nada", "Adiós"], a: 0 },
    { q: "Si te dicen 'Gracias', tú respondes:", o: ["De nada", "Por favor", "Hola"], a: 0 },
    { q: "- '¿Qué tal?' - '________'", o: ["Muy bien", "Me llamo Juan", "Soy de Perú"], a: 0 },
    { q: "Antes de ir a dormir dices:", o: ["Buenas noches", "Buenos días", "Hasta luego"], a: 0 },
    { q: "Otra forma de decir 'Adiós' es:", o: ["Hasta luego", "Hola", "Por favor"], a: 0 },
    { q: "Para preguntar la edad dices:", o: ["¿Cuántos años tienes?", "¿Cómo te llamas?", "¿De dónde eres?"], a: 0 },
    { q: "- '¿Dónde vives?' - '________'", o: ["Vivo en Madrid", "Soy de Madrid", "Tengo 20 años"], a: 0 },
    { q: "Para preguntar el nombre de alguien:", o: ["¿Cómo te llamas?", "¿Qué tal?", "¿De dónde eres?"], a: 0 },
    { q: "Si chocas con alguien sin querer dices:", o: ["Perdón / Lo siento", "De nada", "Gracias"], a: 0 },
    { q: "Un saludo muy informal entre amigos:", o: ["¡Qué pasa!", "¡Buenos días señor!", "¡Adiós!"], a: 0 },
    { q: "Si vas a ver a alguien mañana dices:", o: ["Hasta mañana", "Hasta luego", "Adiós para siempre"], a: 0 }
  ],
  "a1-vocab-numeros": [
    { q: "10 + 5 = ?", o: ["Quince", "Catorce", "Dieciséis"], a: 0 },
    { q: "20", o: ["Veinte", "Doce", "Diez"], a: 0 },
    { q: "El número antes de diez es...", o: ["Nueve", "Once", "Ocho"], a: 0 },
    { q: "El número '15' se dice:", o: ["Quince", "Cinco", "Cincuenta"], a: 0 },
    { q: "50", o: ["Cincuenta", "Cinco", "Quince"], a: 0 },
    { q: "100", o: ["Cien", "Cero", "Cincuenta"], a: 0 },
    { q: "30", o: ["Treinta", "Tres", "Trece"], a: 0 },
    { q: "El número después de 'veintinueve' es:", o: ["Treinta", "Veintiocho", "Cuarenta"], a: 0 },
    { q: "2 + 2 = ?", o: ["Cuatro", "Cinco", "Seis"], a: 0 },
    { q: "12", o: ["Doce", "Dos", "Veinte"], a: 0 },
    { q: "¿Cuántos meses tiene un año?", o: ["Doce", "Diez", "Once"], a: 0 },
    { q: "¿Cuántos días tiene una semana?", o: ["Siete", "Cinco", "Seis"], a: 0 },
    { q: "El número '40' se escribe:", o: ["Cuarenta", "Cuatro", "Catorce"], a: 0 },
    { q: "¿Cómo se dice 'zero' en español?", o: ["Cero", "Uno", "Nada"], a: 0 },
    { q: "21", o: ["Veintiuno", "Veinte uno", "Veinte y uno"], a: 0 },
    { q: "11", o: ["Once", "Diez y uno", "Unce"], a: 0 },
    { q: "¿Cuántas horas tiene un día?", o: ["Veinticuatro", "Doce", "Treinta"], a: 0 }
  ],
  "a1-vocab-nacionalidades": [
    { q: "Él es de Francia. Él es...", o: ["Francés", "Francia", "Francésa"], a: 0 },
    { q: "Ella es de España. Ella es...", o: ["Española", "Español", "España"], a: 0 },
    { q: "Ellos son de Alemania. Son...", o: ["Alemanes", "Alemán", "Alemanias"], a: 0 },
    { q: "Yo soy de Italia. Yo soy...", o: ["Italiano/a", "Italia", "Italio"], a: 0 },
    { q: "Ella es de Estados Unidos. Es...", o: ["Estadounidense", "Americana", "Las dos son correctas"], a: 2 },
    { q: "Él es de Japón. Él es...", o: ["Japonés", "Japón", "Japonesa"], a: 0 },
    { q: "Nosotros somos de México. Somos...", o: ["Mexicanos", "México", "Mexicano"], a: 0 },
    { q: "Ella es de Inglaterra. Ella es...", o: ["Inglesa", "Inglés", "Inglaterra"], a: 0 },
    { q: "Él es de China. Él es...", o: ["Chino", "China", "Chinesco"], a: 0 },
    { q: "Ella es de Marruecos. Ella es...", o: ["Marroquí", "Marrueca", "Marroquesa"], a: 0 },
    { q: "Ellos son de Brasil. Son...", o: ["Brasileños", "Brasil", "Brasileros"], a: 0 },
    { q: "Él es de Portugal. Él es...", o: ["Portugués", "Portugal", "Portuguesa"], a: 0 },
    { q: "Ella es de Rusia. Ella es...", o: ["Rusa", "Ruso", "Rusias"], a: 0 },
    { q: "Él es de Argentina. Él es...", o: ["Argentino", "Argentina", "Argentinés"], a: 0 },
    { q: "Ella es de Canadá. Ella es...", o: ["Canadiense", "Canadá", "Canadiensa"], a: 0 },
    { q: "Él es de India. Él es...", o: ["Indio", "Hindu", "Indies"], a: 0 },
    { q: "Ella es de Colombia. Ella es...", o: ["Colombiana", "Colombiano", "Colombia"], a: 0 }
  ],
  "a1-vocab-horas-fechas": [
    { q: "¿Qué día es hoy?", o: ["Lunes", "Enero", "Mañana"], a: 0 },
    { q: "¿En qué mes estamos?", o: ["Octubre", "Martes", "Primavera"], a: 0 },
    { q: "El primer día de la semana es...", o: ["Lunes", "Domingo", "Martes"], a: 0 },
    { q: "El último mes del año es...", o: ["Diciembre", "Enero", "Noviembre"], a: 0 },
    { q: "El día después de 'Martes' es...", o: ["Miércoles", "Jueves", "Lunes"], a: 0 },
    { q: "¿Qué estación hace mucho calor?", o: ["Verano", "Invierno", "Otoño"], a: 0 },
    { q: "¿Qué estación hace mucho frío?", o: ["Invierno", "Primavera", "Verano"], a: 0 },
    { q: "¿Qué hora es? '14:00'", o: ["Son las dos de la tarde", "Son las catorce de la mañana", "Es la dos"], a: 0 },
    { q: "Si son las '13:30', decimos que es la una y...", o: ["media", "cuarto", "treinta"], a: 0 },
    { q: "Si son las '15:15', decimos que son las tres y...", o: ["cuarto", "quince", "media"], a: 0 },
    { q: "El día antes de hoy fue...", o: ["Ayer", "Mañana", "Luego"], a: 0 },
    { q: "El día después de hoy será...", o: ["Mañana", "Ayer", "Pronto"], a: 0 },
    { q: "El fin de semana son los días...", o: ["Sábado y Domingo", "Lunes y Martes", "Viernes y Sábado"], a: 0 },
    { q: "¿En qué mes celebramos la Navidad?", o: ["Diciembre", "Agosto", "Febrero"], a: 0 },
    { q: "Si son las '8:45', decimos que son las nueve menos...", o: ["cuarto", "quince", "media"], a: 0 },
    { q: "¿Cuántos minutos tiene una hora?", o: ["Sesenta", "Cien", "Treinta"], a: 0 },
    { q: "¿Cuántos segundos tiene un minuto?", o: ["Sesenta", "Diez", "Cien"], a: 0 }
  ],
  "a1-vocab-profesiones": [
    { q: "La persona que enseña en la escuela es...", o: ["Profesor / Profesora", "Médico", "Policía"], a: 0 },
    { q: "La persona que cura a los enfermos es...", o: ["Médico / Doctor", "Bombero", "Cocinero"], a: 0 },
    { q: "La persona que hace pan es...", o: ["Panadero", "Carpintero", "Peluquero"], a: 0 },
    { q: "La persona que apaga el fuego es...", o: ["Bombero", "Policía", "Cartero"], a: 0 },
    { q: "La persona que corta el pelo es...", o: ["Peluquero", "Abogado", "Mecánico"], a: 0 },
    { q: "La persona que prepara la comida en un restaurante es...", o: ["Cocinero", "Camarero", "Panadero"], a: 0 },
    { q: "La persona que sirve la comida en un restaurante es...", o: ["Camarero", "Cocinero", "Policía"], a: 0 },
    { q: "La persona que arregla los coches es...", o: ["Mecánico", "Carpintero", "Médico"], a: 0 },
    { q: "La persona que defiende a alguien en un juicio es...", o: ["Abogado", "Juez", "Policía"], a: 0 },
    { q: "La persona que trae las cartas a casa es...", o: ["Cartero", "Bombero", "Panadero"], a: 0 },
    { q: "La persona que construye casas es...", o: ["Albañil / Constructor", "Mecánico", "Peluquero"], a: 0 },
    { q: "La persona que diseña edificios es...", o: ["Arquitecto", "Abogado", "Médico"], a: 0 },
    { q: "La persona que toca música es...", o: ["Músico", "Actor", "Pintor"], a: 0 },
    { q: "La persona que actúa en películas es...", o: ["Actor / Actriz", "Cantante", "Escritor"], a: 0 },
    { q: "La persona que escribe libros es...", o: ["Escritor", "Pintor", "Periodista"], a: 0 },
    { q: "La persona que informa de las noticias es...", o: ["Periodista", "Actor", "Músico"], a: 0 },
    { q: "La persona que trabaja en una tienda vendiendo es...", o: ["Dependiente", "Camarero", "Cartero"], a: 0 }
  ],
  "a1-vocab-familia": [
    { q: "El padre de mi padre es mi...", o: ["Abuelo", "Tío", "Hermano"], a: 0 },
    { q: "La madre de mi madre es mi...", o: ["Abuela", "Tía", "Prima"], a: 0 },
    { q: "El hermano de mi padre es mi...", o: ["Tío", "Primo", "Abuelo"], a: 0 },
    { q: "La hermana de mi madre es mi...", o: ["Tía", "Prima", "Abuela"], a: 0 },
    { q: "El hijo de mi tío es mi...", o: ["Primo", "Hermano", "Sobrino"], a: 0 },
    { q: "El hijo de mi hermano es mi...", o: ["Sobrino", "Primo", "Tío"], a: 0 },
    { q: "La hija de mi hermana es mi...", o: ["Sobrina", "Prima", "Tía"], a: 0 },
    { q: "Mi padre y mi madre son mis...", o: ["Padres", "Abuelos", "Tíos"], a: 0 },
    { q: "El marido de mi madre es mi...", o: ["Padre", "Tío", "Abuelo"], a: 0 },
    { q: "La mujer de mi padre es mi...", o: ["Madre", "Tía", "Abuela"], a: 0 },
    { q: "Yo soy el ___ de mis padres.", o: ["Hijo", "Sobrino", "Nieto"], a: 0 },
    { q: "Yo soy el ___ de mis abuelos.", o: ["Nieto", "Hijo", "Sobrino"], a: 0 },
    { q: "El hermano de mi marido es mi...", o: ["Cuñado", "Suegro", "Yerno"], a: 0 },
    { q: "El padre de mi mujer es mi...", o: ["Suegro", "Cuñado", "Yerno"], a: 0 },
    { q: "Si no tengo hermanos, soy hijo...", o: ["Único", "Solo", "Primero"], a: 0 },
    { q: "Los hijos que nacen el mismo día de la misma madre son...", o: ["Gemelos o Mellizos", "Primos", "Sobrinos"], a: 0 },
    { q: "La persona con la que me caso es mi...", o: ["Marido / Mujer", "Hermano", "Primo"], a: 0 }
  ],
  "a1-gram-preguntas": [
    { q: "___ te llamas?", o: ["Cómo", "Qué", "Dónde"], a: 0 },
    { q: "___ años tienes?", o: ["Cuántos", "Qué", "Cuándo"], a: 0 },
    { q: "___ vives?", o: ["Dónde", "Cómo", "Por qué"], a: 0 },
    { q: "___ es esto? - Es un libro.", o: ["Qué", "Quién", "Cuál"], a: 0 },
    { q: "___ es él? - Es mi hermano.", o: ["Quién", "Qué", "Dónde"], a: 0 },
    { q: "___ llegas? - Mañana.", o: ["Cuándo", "Dónde", "Por qué"], a: 0 },
    { q: "___ estudias español? - Porque me gusta.", o: ["Por qué", "Cuándo", "Dónde"], a: 0 },
    { q: "___ de estos prefieres?", o: ["Cuál", "Qué", "Quién"], a: 0 },
    { q: "___ cuesta esto?", o: ["Cuánto", "Cómo", "Qué"], a: 0 },
    { q: "¿___ hora es?", o: ["Qué", "Cuál", "Cómo"], a: 0 },
    { q: "¿___ vas? - Voy al supermercado.", o: ["A dónde", "De dónde", "Dónde"], a: 0 },
    { q: "¿___ eres? - Soy de Marruecos.", o: ["De dónde", "Dónde", "A dónde"], a: 0 },
    { q: "¿___ hermanos tienes?", o: ["Cuántos", "Cuánto", "Cuántas"], a: 0 },
    { q: "¿___ está el baño?", o: ["Dónde", "Cómo", "Qué"], a: 0 },
    { q: "¿___ se dice 'house' en español?", o: ["Cómo", "Qué", "Por qué"], a: 0 },
    { q: "¿___ es tu número de teléfono?", o: ["Cuál", "Qué", "Cuánto"], a: 0 },
    { q: "En español, usamos los signos de interrogación...", o: ["Al principio y al final (¿?)", "Solo al final (?)", "Solo al principio (¿)"], a: 0 }
  ],
  "a1-vocab-comida-casa": [
    { q: "La comida de la mañana se llama...", o: ["Desayuno", "Almuerzo", "Cena"], a: 0 },
    { q: "La comida de la noche se llama...", o: ["Cena", "Desayuno", "Comida"], a: 0 },
    { q: "Para cortar la carne usamos un...", o: ["Cuchillo", "Tenedor", "Cuchara"], a: 0 },
    { q: "Para tomar sopa usamos una...", o: ["Cuchara", "Tenedor", "Cuchillo"], a: 0 },
    { q: "Bebemos agua en un...", o: ["Vaso", "Plato", "Tenedor"], a: 0 },
    { q: "Dormimos en una...", o: ["Cama", "Mesa", "Silla"], a: 0 },
    { q: "Nos sentamos en una...", o: ["Silla", "Mesa", "Cama"], a: 0 },
    { q: "Guardamos la comida fría en...", o: ["La nevera / El frigorífico", "El horno", "El microondas"], a: 0 },
    { q: "Cocinamos en...", o: ["La cocina", "El dormitorio", "El baño"], a: 0 },
    { q: "Nos duchamos en...", o: ["El baño", "El salón", "La cocina"], a: 0 },
    { q: "Vemos la televisión en...", o: ["El salón", "El pasillo", "El balcón"], a: 0 },
    { q: "Ponemos la ropa en el...", o: ["Armario", "Baño", "Frigorífico"], a: 0 },
    { q: "Abrimos la ___ para entrar en casa.", o: ["Puerta", "Ventana", "Pared"], a: 0 },
    { q: "Miramos por la ___ para ver la calle.", o: ["Ventana", "Puerta", "Mesa"], a: 0 },
    { q: "La fruta amarilla y alargada es...", o: ["Un plátano", "Una manzana", "Una naranja"], a: 0 },
    { q: "La bebida blanca que dan las vacas es...", o: ["Leche", "Agua", "Zumo"], a: 0 },
    { q: "Comemos paella en un...", o: ["Plato", "Vaso", "Tenedor"], a: 0 }
  ]
};

// Remove generic questions added by the previous script.
// To do this reliably, we will recreate the exercises array for all A1 lessons.
// Note: We need to parse each lesson carefully.

const lessonsRegex = /\{\s*id:\s*"(a1-[^"]+)"([\s\S]*?)exercises:\s*\[([\s\S]*?)\]\s*\}/g;

let match;
let chunks = [];
let lastIndex = 0;

while ((match = lessonsRegex.exec(content)) !== null) {
  const [fullMatch, lessonId, middlePart, exercisesContent] = match;
  
  // keep only the original questions which didn't have "Pregunta adicional"
  const exMatches = [...exercisesContent.matchAll(/\{\s*id:\s*"ex\d+",\s*question:\s*"([^"]+)"[\s\S]*?correctAnswer:\s*\d+\s*\}/g)];
  
  let validExercises = [];
  let existingCount = 0;
  
  // Extract existing exercises that are NOT the dummy ones
  const singleExerciseRegex = /\{[^}]*id:\s*"ex\d+"[^}]*\}/g;
  const oldExs = exercisesContent.match(singleExerciseRegex) || [];
  
  for (const oldEx of oldExs) {
    if (!oldEx.includes("Pregunta adicional de repaso")) {
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
  
  // If we still need more to reach 20, we just repeat some.
  while (existingCount + added < 20) {
    const qData = bank[(added) % bank.length] || { q: "Pregunta extra", o:["A","B","C"], a:0 };
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
console.log('Done replacing with real contextual questions');
