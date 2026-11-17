import React, { useState } from "react";
import type { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onConfirmOrder: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({
  isOpen,
  onClose,
  items,
  onConfirmOrder,
}) => {
  const [copied, setCopied] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // Generar número de orden único
  const orderNumber = `EY-${Date.now().toString().slice(-8)}`;

  const cbu = "0140415303610053858571";
  const whatsappNumber = "5492235623555";

  const handleCopyCBU = () => {
    navigator.clipboard.writeText(cbu);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmTransfer = () => {
    const orderDetails = items
      .map((item) => `- ${item.product.name} x${item.quantity}`)
      .join("\n");
    const message = [
      "Hola, realicé una transferencia para mi compra en EntrenaYa.",
      `Pedido: ${orderNumber}`,
      `Total: ${formatPrice(total)}`,
      "Productos:",
      orderDetails,
      "Adjunto el comprobante de pago.",
    ].join("\n");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setOrderConfirmed(true);
    setTimeout(() => {
      onConfirmOrder();
      setOrderConfirmed(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex items-center justify-between z-10">
          <h2 className="text-white font-bold text-2xl flex items-center gap-2">
            💳 Finalizar Compra
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            ✕
          </button>
        </div>

        {!orderConfirmed ? (
          <div className="p-6 space-y-6">
            {/* Order Summary */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                📦 Resumen del Pedido
              </h3>
              <div className="bg-gray-900 rounded-xl p-4 space-y-2 border border-gray-700">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-xl">{item.product.image}</span>
                      <span className="text-gray-300 truncate">
                        {item.product.name} x{item.quantity}
                      </span>
                    </div>
                    <span className="text-orange-400 font-medium ml-2">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between">
                  <span className="text-white font-bold">Total:</span>
                  <span className="text-orange-400 font-bold text-xl">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Bank Transfer Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                🏦 Datos para Transferencia Bancaria
              </h3>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm font-medium block mb-1">
                      CBU
                    </label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-mono text-lg border border-gray-700">
                        {cbu}
                      </code>
                      <button
                        onClick={handleCopyCBU}
                        className={`px-4 py-3 rounded-lg font-medium transition-all ${
                          copied
                            ? "bg-green-500 text-white"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                      >
                        {copied ? "✓ Copiado" : "Copiar"}
                      </button>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                    <p className="text-yellow-300 text-sm font-medium mb-1">
                      ⚠️ Importante:
                    </p>
                    <ul className="text-gray-300 text-xs space-y-1 list-disc list-inside">
                      <li>
                        Realizá la transferencia por el monto exacto:{" "}
                        <strong className="text-orange-400">
                          {formatPrice(total)}
                        </strong>
                      </li>
                      <li>
                        En el concepto/referencia indicá:{" "}
                        <strong className="text-white">{orderNumber}</strong>
                      </li>
                      <li>
                        Una vez realizada, enviá el comprobante por WhatsApp
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                📋 Pasos a seguir
              </h3>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <span className="text-gray-300">
                      Copiá el CBU y abrí tu homebanking o app del banco
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <span className="text-gray-300">
                      Realizá una transferencia por{" "}
                      <strong className="text-orange-400">
                        {formatPrice(total)}
                      </strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <span className="text-gray-300">
                      En concepto poné:{" "}
                      <strong className="text-white">{orderNumber}</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </span>
                    <span className="text-gray-300">
                      Hacé clic abajo y adjuntá el comprobante en WhatsApp
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Order Number */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 text-center">
              <p className="text-gray-400 text-sm mb-1">Número de Orden:</p>
              <p className="text-white font-bold text-xl font-mono">
                {orderNumber}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Guardá este número para tu comprobante
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleConfirmTransfer}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/30"
              >
                ✓ Ya transferí, enviar comprobante por WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Volver al carrito
              </button>
            </div>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="p-6 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4 animate-bounce">✅</div>
              <h3 className="text-white font-bold text-2xl mb-2">
                ¡Enviá tu comprobante!
              </h3>
              <p className="text-gray-300">
                Se abrió WhatsApp para continuar con tu compra
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 mb-6">
              <p className="text-gray-400 text-sm mb-2">Número de Orden:</p>
              <p className="text-orange-400 font-bold text-2xl font-mono mb-4">
                {orderNumber}
              </p>
              <div className="space-y-2 text-sm text-left">
                <p className="text-gray-300">
                  ✓ Adjuntá el comprobante en el chat
                </p>
                <p className="text-gray-300">
                  ✓ Incluí tu número de pedido en el mensaje
                </p>
                <p className="text-gray-300">
                  ✓ Verificaremos la transferencia
                </p>
                <p className="text-gray-300">
                  ✓ Conservá este número: {orderNumber}
                </p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
              <p className="text-blue-300 text-sm font-medium mb-2">
                📱 ¿No se abrió WhatsApp?
              </p>
              <p className="text-gray-300 text-xs">
                Escribinos al{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  +54 9 223 562-3555
                </a>{" "}
                y adjuntá el comprobante con tu número de orden
              </p>
            </div>

            <button
              onClick={onConfirmOrder}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
