import React from "react";
import type { Product } from "../data/products";

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onViewTraining: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onViewTraining,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const categoryColors = {
    equipamiento: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    indumentaria: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    suplementos: "bg-green-500/20 text-green-300 border-green-500/30",
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ✕
        </button>

        {/* Product image */}
        <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-8xl rounded-t-2xl">
          {product.image}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-xs px-3 py-1 rounded-full border ${categoryColors[product.category]}`}
            >
              {product.category}
            </span>
          </div>

          {/* Name */}
          <h2 className="text-white font-bold text-2xl mb-3">{product.name}</h2>

          {/* Price */}
          <div className="text-orange-400 font-bold text-3xl mb-4">
            {formatPrice(product.price)}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span>📝</span> Descripción
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span>🏷️</span> Características
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Training content */}
          {product.trainingContent && (
            <div className="mb-6 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <h3 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                <span>📋</span> Contenido de Entrenamiento Incluido
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {product.trainingContent}
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="bg-gray-700/50 rounded-lg p-3 flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="text-white text-xs font-medium">Envío gratis</p>
                <p className="text-gray-400 text-xs">En compras +$50.000</p>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3 flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <div>
                <p className="text-white text-xs font-medium">Hasta 6 cuotas</p>
                <p className="text-gray-400 text-xs">Sin interés</p>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3 flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="text-white text-xs font-medium">30 días</p>
                <p className="text-gray-400 text-xs">Para cambios</p>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <div>
                <p className="text-white text-xs font-medium">Garantía</p>
                <p className="text-gray-400 text-xs">De 6 meses</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition-colors"
            >
              Agregar al Carrito 🛒
            </button>
            {product.trainingContent && (
              <button
                onClick={() => {
                  onViewTraining(product);
                  onClose();
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-medium transition-colors"
              >
                Ver Rutina 📋
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
