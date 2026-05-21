import { MapPin, Utensils, Building, Briefcase, ExternalLink, Phone } from 'lucide-react';

export function RecursosMalaga() {
  const categories = [
    {
      title: 'Comedores Sociales',
      icon: <Utensils size={32} className="text-[#00823B]" />,
      color: 'bg-[#f4fbf6]',
      description: 'Espacios donde se ofrece alimentación gratuita a personas en situación de vulnerabilidad.',
      items: [
        {
          name: 'Asociación Yo Soy Tú',
          address: 'Calle Moreno Nieto, 18, 29011 Málaga',
          phone: '951 814 171 / 692 889 050',
          info: 'Ofrecen menús (incluido Halal), desayunos y ropero solidario.',
          link: 'https://comedorsocialyosoytu.com/'
        },
        {
          name: 'Servicios Sociales Comunitarios',
          info: 'Se recomienda contactar con los Servicios Sociales de tu distrito para coordinación y derivación a largo plazo.',
          link: 'https://datosabiertos.malaga.eu/'
        }
      ]
    },
    {
      title: 'Ayuntamiento de Málaga',
      icon: <Building size={32} className="text-[#F5A623]" />,
      color: 'bg-[#fff9f0]',
      description: 'Gestión municipal y trámites ciudadanos básicos.',
      items: [
        {
          name: 'Sede Principal',
          address: 'Avenida de Cervantes, 4, 29016 Málaga',
          phone: '951 926 010',
          info: 'Atención general al ciudadano y registro principal.',
          link: 'https://www.malaga.eu'
        }
      ]
    },
    {
      title: 'Empleo y Trabajo',
      icon: <Briefcase size={32} className="text-[#8EAC3E]" />,
      color: 'bg-[#f7faef]',
      description: 'Lugares donde inscribirse para buscar trabajo y solicitar prestaciones.',
      items: [
        {
          name: 'SAE (Servicio Andaluz de Empleo)',
          info: 'Inscripción obligatoria como demandante de empleo.',
          phone: '955 625 695',
          link: 'https://www.saempleo.es',
          extra: 'Puedes inscribirte online o pedir cita previa para atención presencial.'
        },
        {
          name: 'SEPE (Servicio Público de Empleo Estatal)',
          info: 'Gestión de prestaciones por desempleo.',
          link: 'https://www.sepe.es',
          extra: 'Requiere estar inscrito previamente en el SAE.'
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      {/* Header Section */}
      <section className="bg-white pt-12 pb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-[#192A56] mb-4">
            Recursos <span className="text-[#00823B]">Málaga</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-500 font-medium">
            Guía de servicios básicos y ayuda para ciudadanos en Málaga.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center shadow-sm`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#192A56]">{cat.title}</h2>
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-lg font-bold text-[#192A56] mb-3">{item.name}</h3>

                      <div className="space-y-2">
                        {item.address && (
                          <div className="flex items-start gap-2 text-stone-600">
                            <MapPin size={16} className="mt-1 flex-shrink-0 text-[#00823B]" />
                            <span className="text-sm">{item.address}</span>
                          </div>
                        )}

                        {item.phone && (
                          <div className="flex items-center gap-2 text-stone-600">
                            <Phone size={16} className="flex-shrink-0 text-[#00823B]" />
                            <span className="text-sm">{item.phone}</span>
                          </div>
                        )}

                        <p className="text-sm text-stone-500 leading-relaxed mt-2">
                          {item.info}
                        </p>

                        {item.extra && (
                          <p className="text-xs text-stone-400 italic mt-1">
                            {item.extra}
                          </p>
                        )}

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#00823B] hover:underline"
                        >
                          Visitar sitio web <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advice Section */}
      <section className="bg-[#fcfdfa] py-16 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-2 bg-green-50 rounded-full mb-4">
            <div className="bg-[#00823B] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
              Consejo
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#192A56] mb-4">¿Necesitas ayuda adicional?</h2>
          <p className="text-stone-500 leading-relaxed mb-8">
            Si te encuentras en una situación de emergencia o necesitas orientación personalizada, acude al centro de servicios sociales más cercano a tu vivienda. El Ayuntamiento de Málaga cuenta con una red de centros en cada distrito.
          </p>
          <div className="flex justify-center">
            <a
              href="https://derechossociales.malaga.eu/servicios-sociales-comunitarios/centros/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#00823B] text-white font-bold rounded-2xl shadow-lg hover:bg-[#006A30] transition-all hover:-translate-y-1"
            >
              Listado de Centros Sociales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
