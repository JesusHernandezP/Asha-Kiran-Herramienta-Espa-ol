/**
 * Curated resources data maintained by developers.
 * Each resource type (lectura, video, audio, imagen) has its own array of entries.
 * Developers add new resources by editing this file directly.
 */
import type { Level } from './content';

export type ResourceType = 'lecturas' | 'videos' | 'audios' | 'imagenes';

export interface ResourceEntry {
  id: string;
  title: string;
  description: string;
  level?: Level;
  url?: string;
  imageUrl?: string;
  embedUrl?: string;       // for YouTube embeds
  tags: string[];
  emoji: string;
}

export const lecturas: ResourceEntry[] = [
  {
    id: 'lec-1',
    title: 'Mi primer día en España',
    description: 'Una historia sencilla sobre la llegada de Ali a Málaga. Nivel A1-A2.',
    level: 'A2',
    url: '/leccion/a2-comp-lectura',
    emoji: '📖',
    tags: ['comprensión', 'presentaciones'],
  },
  {
    id: 'lec-2',
    title: 'Recuerdos de Andalucía',
    description: 'Narración sobre un viaje por el sur de España con tiempos del pasado.',
    level: 'B1',
    url: '/leccion/b1-comp-narracion',
    emoji: '✈️',
    tags: ['narración', 'pasado'],
  },
  {
    id: 'lec-3',
    title: 'Editorial: El porvenir ecológico',
    description: 'Texto formal sobre el cambio climático para análisis de registros avanzados.',
    level: 'C1',
    url: '/leccion/c1-comp-textos-complejos',
    emoji: '📰',
    tags: ['formal', 'opinión'],
  },
  {
    id: 'lec-4',
    title: 'Lectura en PDF: Rutina Diaria',
    description: 'Ficha de lectura en PDF para descargar o abrir en el navegador con ejercicios sobre las rutinas.',
    level: 'A1',
    url: '/docs/rutina_diaria_a1.pdf',
    emoji: '📄',
    tags: ['rutina', 'pdf', 'ejercicios'],
  },
  {
    id: 'lec-5',
    title: 'Noticias en español fácil',
    description: 'Noticias adaptadas al nivel intermedio con vocabulario explicado.',
    level: 'B1',
    url: 'https://www.newsinslowspanish.com/',
    emoji: '📰',
    tags: ['noticias', 'actualidad'],
  },
];

export const videos: ResourceEntry[] = [
  {
    id: 'vid-1',
    title: 'Español para principiantes: Saludos',
    description: 'Video introductorio sobre cómo saludar y presentarse en español.',
    level: 'A1',
    embedUrl: 'https://www.youtube.com/embed/DAp_v7EH9AA',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop&q=60',
    emoji: '👋',
    tags: ['saludos', 'presentaciones'],
  },
  {
    id: 'vid-2',
    title: 'Los verbos SER y ESTAR',
    description: 'Explicación clara de la diferencia entre SER y ESTAR con ejemplos.',
    level: 'A1',
    embedUrl: 'https://www.youtube.com/embed/bLq-RIcMGJc',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60',
    emoji: '📝',
    tags: ['gramática', 'verbos'],
  },
  {
    id: 'vid-3',
    title: 'Vocabulario: La comida española',
    description: 'Aprende nombres de platos típicos y cómo pedir en un restaurante.',
    level: 'A2',
    embedUrl: 'https://www.youtube.com/embed/aRDfz6sUbsc',
    imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&auto=format&fit=crop&q=60',
    emoji: '🍽️',
    tags: ['comida', 'vocabulario'],
  },
  {
    id: 'vid-4',
    title: 'Conversación en español: En el hospital',
    description: 'Diálogos prácticos para situaciones médicas y describir síntomas.',
    level: 'A2',
    embedUrl: 'https://www.youtube.com/embed/LD45PYp37_c',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&auto=format&fit=crop&q=60',
    emoji: '🏥',
    tags: ['hospital', 'conversación'],
  },
];

export const audios: ResourceEntry[] = [
  {
    id: 'aud-1',
    title: 'El abecedario en español',
    description: 'Pronunciación de cada letra del abecedario con ejemplos de palabras.',
    level: 'A1',
    url: '/leccion/a1-alfa-abecedario',
    emoji: '🔤',
    tags: ['pronunciación', 'abecedario'],
  },
  {
    id: 'aud-2',
    title: 'Audio: Diálogo en el supermercado',
    description: 'Escucha un diálogo cotidiano en el supermercado (archivo MP3 local).',
    level: 'A2',
    url: '/audio/dialogo_supermercado_a2.mp3',
    emoji: '🛒',
    tags: ['diálogo', 'compras', 'mp3'],
  },
  {
    id: 'aud-3',
    title: 'Podcast: Noticias lentas en español',
    description: 'Noticias de actualidad habladas despacio y con vocabulario explicado.',
    level: 'B1',
    url: 'https://www.newsinslowspanish.com/',
    emoji: '🎙️',
    tags: ['podcast', 'noticias'],
  },
];

export const imagenes: ResourceEntry[] = [
  {
    id: 'img-1',
    title: 'Flashcards: Los colores',
    description: 'Tarjetas visuales con todos los colores básicos en español.',
    level: 'A1',
    url: '/leccion/a1-vocab-colores',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop&q=60',
    emoji: '🎨',
    tags: ['flashcards', 'colores'],
  },
  {
    id: 'img-2',
    title: 'Infografía: El cuerpo humano',
    description: 'Imagen detallada con las partes del cuerpo etiquetadas en español.',
    level: 'A1',
    url: '/leccion/a1-vocab-cuerpo',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=60',
    emoji: '🧍',
    tags: ['infografía', 'cuerpo'],
  },
  {
    id: 'img-3',
    title: 'Vocabulario visual: La ropa',
    description: 'Imágenes con prendas de vestir y sus nombres en español.',
    level: 'A1',
    url: '/leccion/a1-vocab-ropa',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&auto=format&fit=crop&q=60',
    emoji: '👕',
    tags: ['vocabulario', 'ropa'],
  },
  {
    id: 'img-4',
    title: 'Mapa de España y países hispanohablantes',
    description: 'Mapa visual de las nacionalidades y países del mundo hispano.',
    level: 'A2',
    url: '/leccion/a2-vocab-mapas',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=60',
    emoji: '🌍',
    tags: ['mapa', 'países'],
  },
];

export const allResources: Record<ResourceType, ResourceEntry[]> = {
  lecturas,
  videos,
  audios,
  imagenes,
};

export const resourceMeta: Record<ResourceType, { emoji: string; color: string; gradient: string }> = {
  lecturas: { emoji: '📖', color: '#00823B', gradient: 'from-emerald-500 to-teal-600' },
  videos: { emoji: '🎬', color: '#E58C2C', gradient: 'from-amber-500 to-orange-600' },
  audios: { emoji: '🎧', color: '#8EAC3E', gradient: 'from-lime-500 to-green-600' },
  imagenes: { emoji: '🖼️', color: '#D34D3D', gradient: 'from-rose-500 to-red-600' },
};
