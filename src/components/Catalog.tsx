import React, { useState } from "react";
import { products } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

interface CatalogProps {
  onAddToCart: (product: Product) => void;
  onViewTraining: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onAddToCart, onViewTraining }) => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const categories = [
    { id: "todos", label: "Todos", icon: "🛍️" },
    { id: "equipamiento", label: "Equipamiento", icon: "🏋️" },
    { id: "indumentaria", label: "Indumentaria", icon: "👕" },
    { id: "suplementos", label: "Suplementos", icon: "💊" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategory === "todos" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gray-900 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Nuestro Catálogo
          </h2>
          <p className="text-gray-400">
            Todo lo que necesitás para tu entrenamiento
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos, categorías..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <span className="absolute left-3 top-3 text-gray-500">🔍</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewTraining={onViewTraining}
              onViewDetail={handleViewDetail}
            />
          ))}
        </div>

        <ProductDetail
          product={selectedProduct}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onAddToCart={onAddToCart}
          onViewTraining={onViewTraining}
        />

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">No se encontraron productos</p>
            <p className="text-gray-500 text-sm">
              Probá con otro término de búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
