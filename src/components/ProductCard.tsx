import React from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewTraining: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewTraining,
  onViewDetail,
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

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
      <div
        onClick={() => onViewDetail(product)}
        className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        {product.image}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[product.category]}`}
          >
            {product.category}
          </span>
        </div>
        <div onClick={() => onViewDetail(product)} className="cursor-pointer">
          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs mb-3 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-orange-400 font-bold text-lg">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-lg font-medium transition-colors"
          >
            Agregar 🛒
          </button>
          {product.trainingContent && (
            <button
              onClick={() => onViewTraining(product)}
              className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
              title="Ver rutina asociada"
            >
              📋
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
