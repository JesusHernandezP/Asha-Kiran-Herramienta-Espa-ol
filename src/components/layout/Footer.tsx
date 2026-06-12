export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#00823B]">Vínculos</h3>
            <p className="text-[11px] text-stone-400 uppercase tracking-widest font-semibold mt-1">Plataforma de aprendizaje de español </p>
            <p className="text-[11px] text-stone-400 uppercase tracking-widest font-semibold mt-0.5">Asha-Kiran</p>
          </div>
          <div className="flex space-x-6">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#F5A623] cursor-pointer">
              Contacto: vinculosashakiran@gmail.com
            </span>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-stone-400 font-medium text-center">
          <p>
            &copy; {new Date().getFullYear()} Fundación Asha-Kiran • Vínculos Málaga.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#89C73A]"></span> Sistema Online</span>
            <span className="mx-2">•</span>
            <span>Español</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
