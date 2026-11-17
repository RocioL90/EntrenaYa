import React, { useState } from "react";
import type { Product } from "../data/products";

import Checkout from "./Checkout";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;

  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };
  const handleConfirmOrder = () => {
    onClearCart();
    setIsCheckoutOpen(false);
    onClose();
  };

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div className="relative w-full max-w-md bg-gray-900 h-full overflow-y-auto shadow-2xl border-l border-gray-700">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex items-center justify-between z-10">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            🛒 Mi Carrito
            <span className="text-sm text-gray-400">
              ({items.length} items)
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center p-4">
            <span className="text-5xl mb-4">🛒</span>
            <p className="text-gray-400 text-lg">Tu carrito está vacío</p>
            <p className="text-gray-500 text-sm mt-1">
              Agregá productos para comenzar
            </p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-gray-800 rounded-xl p-3 flex items-center gap-3 border border-gray-700"
                >
                  <span className="text-3xl">{item.product.image}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-orange-400 text-sm font-bold">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center text-sm transition-colors"
                    >
                      -
                    </button>
                    <span className="text-white text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-7 h-7 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center text-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-red-400 hover:text-red-300 text-sm transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Training content reminder */}
            {items.some((item) => item.product.trainingContent) && (
              <div className="mx-4 mb-4 bg-orange-500/10 border border-orange-500/30 rounded-xl p-3">
                <p className="text-orange-300 text-xs font-medium">
                  📋 ¡Incluye contenido de entrenamiento!
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Al completar tu compra recibirás rutinas personalizadas para
                  tus productos.
                </p>
              </div>
            )}

            {/* Total & Checkout */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Total:</span>
                <span className="text-white font-bold text-xl">
                  {formatPrice(total)}
                </span>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-orange-500/30"
              >
                Finalizar Compra 💳
              </button>
              <p className="text-gray-500 text-xs text-center mt-2">
                Envío gratis en compras mayores a $50.000
              </p>
            </div>
          </>
        )}
      </div>
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={items}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
};

export default Cart;
