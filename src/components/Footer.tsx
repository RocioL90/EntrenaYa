import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⚡</span>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                EntrenaYa
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu tienda de entrenamiento online. Equipamiento, indumentaria y
              suplementos con acompañamiento personalizado.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-tiktok text-sm"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Productos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Equipamiento
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Indumentaria
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Suplementos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Kits por Objetivo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Entrenamiento</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Rutinas Gratis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Programas Premium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Videos Tutoriales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Blog Fitness
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Nutrición
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Envíos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Devoluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold">
                Suscribite al newsletter
              </h4>
              <p className="text-gray-400 text-sm">
                Recibí ofertas exclusivas y contenido de entrenamiento
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 w-full md:w-64"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 EntrenaYa. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">Métodos de pago:</span>
            <div className="flex gap-2">
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                Visa
              </span>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                Master
              </span>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                MercadoPago
              </span>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                Transferencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
