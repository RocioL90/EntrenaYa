import React, { useState } from "react";
import { kits, objectives } from "../data/kits";
import type { Kit } from "../data/kits";
import { products } from "../data/products";
import type { Product } from "../data/products";

interface KitRecommenderProps {
  onAddKitToCart: (kit: Kit) => void;
}

const KitRecommender: React.FC<KitRecommenderProps> = ({ onAddKitToCart }) => {
  const [selectedObjective, setSelectedObjective] = useState<string | null>(
    null,
  );
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [recommendedKit, setRecommendedKit] = useState<Kit | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getKitProducts = (kit: Kit) => {
    return kit.productIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean) as Product[];
  };

  const getKitTotal = (kit: Kit) => {
    const kitProducts = getKitProducts(kit);
    const total = kitProducts.reduce((sum, p) => sum + p.price, 0);
    return total - (total * kit.discount) / 100;
  };

  const quizQuestions = [
    {
      id: "experience",
      question: "¿Cuál es tu nivel de experiencia?",
      options: ["Principiante", "Intermedio", "Avanzado"],
    },
    {
      id: "frequency",
      question: "¿Cuántas veces por semana entrenás?",
      options: ["1-2 veces", "3-4 veces", "5+ veces"],
    },
    {
      id: "space",
      question: "¿Dónde entrenás principalmente?",
      options: ["En casa", "En gimnasio", "Mixto"],
    },
    {
      id: "goal",
      question: "¿Cuál es tu objetivo principal?",
      options: ["Ganar músculo", "Perder peso", "Mejorar rendimiento"],
    },
  ];

  const handleQuizComplete = () => {
    const goal = quizAnswers["goal"];
    if (goal === "Ganar músculo") {
      setRecommendedKit(
        kits.find((k) => k.objective === "ganar-musculo") || null,
      );
    } else if (goal === "Perder peso") {
      setRecommendedKit(
        kits.find((k) => k.objective === "perder-peso") || null,
      );
    } else {
      setRecommendedKit(
        kits.find((k) => k.objective === "resistencia") || null,
      );
    }
  };

  return (
    <section className="bg-gray-900 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🎯 Kits según tu Objetivo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Seleccioná tu objetivo y te recomendamos el kit perfecto con los
            productos ideales y contenido de entrenamiento incluido.
          </p>
        </div>

        {/* Quiz CTA */}
        {!showQuiz && !recommendedKit && (
          <div className="text-center mb-10">
            <button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              🧠 ¡Hacé el test y encontrá tu kit ideal!
            </button>
          </div>
        )}

        {/* Quiz */}
        {showQuiz && !recommendedKit && (
          <div className="max-w-lg mx-auto bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-10">
            <h3 className="text-white font-bold text-xl mb-6 text-center">
              Test Rápido
            </h3>
            {quizQuestions.map((q, idx) => (
              <div key={q.id} className="mb-6">
                <p className="text-gray-300 font-medium mb-3">
                  {idx + 1}. {q.question}
                </p>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() =>
                        setQuizAnswers((prev) => ({ ...prev, [q.id]: opt }))
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        quizAnswers[q.id] === opt
                          ? "bg-orange-500 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleQuizComplete}
              disabled={Object.keys(quizAnswers).length < quizQuestions.length}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors"
            >
              Ver mi Kit Recomendado 🎯
            </button>
          </div>
        )}

        {/* Recommended Kit Result */}
        {recommendedKit && (
          <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
            <div className="text-center mb-4">
              <span className="text-4xl">{recommendedKit.icon}</span>
              <h3 className="text-white font-bold text-xl mt-2">
                ¡Tu Kit Ideal!
              </h3>
              <p className="text-orange-300 font-medium">
                {recommendedKit.name}
              </p>
            </div>
            <p className="text-gray-300 text-sm text-center mb-4">
              {recommendedKit.description}
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => onAddKitToCart(recommendedKit)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Agregar Kit Completo 🛒
              </button>
              <button
                onClick={() => {
                  setRecommendedKit(null);
                  setShowQuiz(false);
                  setQuizAnswers({});
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Repetir Test
              </button>
            </div>
          </div>
        )}

        {/* Objectives Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {objectives.map((obj) => (
            <button
              key={obj.id}
              onClick={() =>
                setSelectedObjective(
                  selectedObjective === obj.id ? null : obj.id,
                )
              }
              className={`p-4 rounded-xl text-center transition-all ${
                selectedObjective === obj.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              <div className="text-2xl mb-1">{obj.icon}</div>
              <div className="text-xs font-medium">{obj.label}</div>
            </button>
          ))}
        </div>

        {/* Kits Display */}
        <div className="space-y-8">
          {(selectedObjective
            ? kits.filter((k) => k.objective === selectedObjective)
            : kits
          ).map((kit) => {
            const kitProducts = getKitProducts(kit);
            const kitTotal = getKitTotal(kit);
            const originalTotal = kitProducts.reduce(
              (sum, p) => sum + p.price,
              0,
            );

            return (
              <div
                key={kit.id}
                className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{kit.icon}</span>
                        <h3 className="text-white font-bold text-xl">
                          {kit.name}
                        </h3>
                        <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full font-medium">
                          -{kit.discount}% OFF
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        {kit.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 line-through text-sm">
                        {formatPrice(originalTotal)}
                      </div>
                      <div className="text-orange-400 font-bold text-2xl">
                        {formatPrice(kitTotal)}
                      </div>
                      <button
                        onClick={() => onAddKitToCart(kit)}
                        className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
                      >
                        Agregar Kit 🛒
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {kitProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-gray-700/50 rounded-xl p-3 flex items-center gap-2"
                      >
                        <span className="text-2xl">{product.image}</span>
                        <div className="min-w-0">
                          <p className="text-white text-xs font-medium truncate">
                            {product.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Training content for kit */}
                  <div className="mt-4 bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-orange-400 font-medium text-sm mb-2">
                      📋 Contenido de Entrenamiento Incluido:
                    </h4>
                    <div className="grid gap-2">
                      {kitProducts
                        .filter((p) => p.trainingContent)
                        .map((product) => (
                          <div
                            key={product.id}
                            className="flex items-start gap-2"
                          >
                            <span className="text-lg">{product.image}</span>
                            <p className="text-gray-300 text-xs">
                              {product.trainingContent}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KitRecommender;
