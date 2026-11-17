import React from "react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-pulse">💪</div>
        <div className="absolute top-40 right-20 text-6xl animate-bounce">
          🏋️
        </div>
        <div className="absolute bottom-20 left-1/3 text-7xl animate-pulse">
          ⚡
        </div>
        <div className="absolute bottom-40 right-10 text-5xl animate-bounce">
          🔥
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Entrená mejor,
            </span>
            <br />
            <span className="text-white">llegá más lejos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Equipamiento, indumentaria y suplementos de primera calidad. Te
            recomendamos el kit perfecto según tus objetivos y te acompañamos
            con contenido de entrenamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("kits")}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              🎯 Encontrá tu Kit
            </button>
            <button
              onClick={() => onNavigate("catalog")}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              🛍️ Ver Catálogo
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "🏋️", label: "Equipamiento" },
            { icon: "👕", label: "Indumentaria" },
            { icon: "💊", label: "Suplementos" },
            { icon: "📋", label: "Rutinas" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
