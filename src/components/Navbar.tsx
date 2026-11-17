import React from "react";
import type { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface NavbarProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onCartClick,
  currentPage,
  onNavigate,
}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <span className="text-3xl">⚡</span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              EntrenaYa
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("home")}
              className={`text-sm font-medium transition-colors ${currentPage === "home" ? "text-orange-400" : "text-gray-300 hover:text-white"}`}
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate("catalog")}
              className={`text-sm font-medium transition-colors ${currentPage === "catalog" ? "text-orange-400" : "text-gray-300 hover:text-white"}`}
            >
              Catálogo
            </button>
            <button
              onClick={() => onNavigate("kits")}
              className={`text-sm font-medium transition-colors ${currentPage === "kits" ? "text-orange-400" : "text-gray-300 hover:text-white"}`}
            >
              Kits por Objetivo
            </button>
            <button
              onClick={() => onNavigate("training")}
              className={`text-sm font-medium transition-colors ${currentPage === "training" ? "text-orange-400" : "text-gray-300 hover:text-white"}`}
            >
              Entrenamiento
            </button>
          </div>

          <button
            onClick={onCartClick}
            className="relative bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex gap-4 pb-3 overflow-x-auto">
          <button
            onClick={() => onNavigate("home")}
            className={`text-xs whitespace-nowrap ${currentPage === "home" ? "text-orange-400" : "text-gray-400"}`}
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate("catalog")}
            className={`text-xs whitespace-nowrap ${currentPage === "catalog" ? "text-orange-400" : "text-gray-400"}`}
          >
            Catálogo
          </button>
          <button
            onClick={() => onNavigate("kits")}
            className={`text-xs whitespace-nowrap ${currentPage === "kits" ? "text-orange-400" : "text-gray-400"}`}
          >
            Kits
          </button>
          <button
            onClick={() => onNavigate("training")}
            className={`text-xs whitespace-nowrap ${currentPage === "training" ? "text-orange-400" : "text-gray-400"}`}
          >
            Entrenamiento
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
