import React from "react";
import { products } from "../data/products";
import type { Product } from "../data/products";

interface TrainingContentProps {
  selectedProduct?: Product | null;
  onAddToCart: (product: Product) => void;
}

const TrainingContent: React.FC<TrainingContentProps> = ({
  selectedProduct,
  onAddToCart,
}) => {
  const productsWithTraining = products.filter((p) => p.trainingContent);

  const trainingPrograms = [
    {
      title: "Programa Principiante - 4 Semanas",
      icon: "🌱",
      level: "Principiante",
      duration: "4 semanas",
      frequency: "3 días/semana",
      description:
        "Programa de adaptación para quienes recién comienzan. Enfocado en técnica y construcción de base.",
      days: [
        {
          day: "Lunes - Cuerpo Superior",
          exercises: [
            "Flexiones: 3x10",
            "Remo con mancuerna: 3x12",
            "Press hombros: 3x10",
            "Curl bíceps: 3x12",
            "Extensión tríceps: 3x12",
          ],
        },
        {
          day: "Miércoles - Cuerpo Inferior",
          exercises: [
            "Sentadilla: 3x12",
            "Zancadas: 3x10/pierna",
            "Puente de glúteos: 3x15",
            "Elevación pantorrillas: 3x15",
            "Plancha: 3x30seg",
          ],
        },
        {
          day: "Viernes - Full Body",
          exercises: [
            "Sentadilla goblet: 3x12",
            "Flexiones: 3x10",
            "Remo: 3x12",
            "Swing kettlebell: 3x15",
            "Abdominales: 3x15",
          ],
        },
      ],
      productsRecommended: [1, 2, 5],
    },
    {
      title: "Programa Hipertrofia - 8 Semanas",
      icon: "💪",
      level: "Intermedio",
      duration: "8 semanas",
      frequency: "4-5 días/semana",
      description:
        "Programa de volumen muscular con progresión de cargas. División push/pull/legs.",
      days: [
        {
          day: "Lunes - Push (Pecho/Hombro/Tríceps)",
          exercises: [
            "Press banca: 4x8",
            "Press inclinado mancuernas: 4x10",
            "Aperturas: 3x12",
            "Press militar: 4x8",
            "Elevaciones laterales: 3x15",
            "Fondos: 3x10",
          ],
        },
        {
          day: "Martes - Pull (Espalda/Bíceps)",
          exercises: [
            "Dominadas: 4x8",
            "Remo con barra: 4x8",
            "Remo mancuerna: 3x10",
            "Face pull: 3x15",
            "Curl barra: 3x10",
            "Curl martillo: 3x12",
          ],
        },
        {
          day: "Miércoles - Legs",
          exercises: [
            "Sentadilla: 4x8",
            "Peso muerto rumano: 4x10",
            "Prensa: 3x12",
            "Extensión cuádriceps: 3x12",
            "Curl femoral: 3x12",
            "Elevación pantorrillas: 4x15",
          ],
        },
        {
          day: "Jueves - Push (Variación)",
          exercises: [
            "Press con mancuernas: 4x10",
            "Press declinado: 3x10",
            "Cruce de poleas: 3x12",
            "Arnold press: 4x10",
            "Extensiones tríceps: 3x12",
          ],
        },
        {
          day: "Viernes - Pull (Variación)",
          exercises: [
            "Peso muerto: 4x6",
            "Jalón al pecho: 4x10",
            "Remo en polea: 3x12",
            "Curl concentrado: 3x12",
            "Curl predicador: 3x10",
          ],
        },
      ],
      productsRecommended: [1, 3, 11, 12, 14],
    },
    {
      title: "Programa HIIT Quema Grasa - 6 Semanas",
      icon: "🔥",
      level: "Intermedio",
      duration: "6 semanas",
      frequency: "4 días/semana",
      description:
        "Entrenamiento de alta intensidad para máxima quema calórica. Sesiones de 30-45 minutos.",
      days: [
        {
          day: "Lunes - HIIT Full Body",
          exercises: [
            "Burpees: 30seg on/30seg off x10",
            "Mountain climbers: 30/30 x8",
            "Jump squats: 30/30 x8",
            "Push-ups: 30/30 x8",
            "High knees: 30/30 x10",
          ],
        },
        {
          day: "Martes - Circuito Bandas",
          exercises: [
            "Sentadilla con banda: 15 reps",
            "Press lateral: 12 reps",
            "Abducción: 15 reps",
            "Pull apart: 12 reps",
            "Todo x4 rondas, 60seg descanso",
          ],
        },
        {
          day: "Jueves - Tabata",
          exercises: [
            "20seg trabajo / 10seg descanso x8 rondas por ejercicio:",
            "Kettlebell swings",
            "Jump lunges",
            "Plank jacks",
            "Box jumps (o step ups)",
          ],
        },
        {
          day: "Sábado - Cardio + Core",
          exercises: [
            "Cuerda: 3min",
            "Descanso: 1min (x5 rondas)",
            "Plancha: 45seg",
            "Russian twists: 20",
            "Bicycle crunches: 20",
            "Leg raises: 15",
          ],
        },
      ],
      productsRecommended: [4, 2, 5, 13, 8],
    },
    {
      title: "Programa Fuerza 5x5 - 12 Semanas",
      icon: "🏋️",
      level: "Avanzado",
      duration: "12 semanas",
      frequency: "3 días/semana",
      description:
        "Programa clásico de fuerza progresiva. Aumentá peso cada sesión. Los 3 grandes: sentadilla, press banca y peso muerto.",
      days: [
        {
          day: "Día A - Lunes",
          exercises: [
            "Sentadilla: 5x5",
            "Press banca: 5x5",
            "Remo con barra: 5x5",
            "Agregar 2.5kg por sesión cuando completes todas las reps",
          ],
        },
        {
          day: "Día B - Miércoles",
          exercises: [
            "Sentadilla: 5x5",
            "Press militar: 5x5",
            "Peso muerto: 1x5",
            "Agregar 2.5kg por sesión cuando completes todas las reps",
          ],
        },
        {
          day: "Día A - Viernes",
          exercises: [
            "Sentadilla: 5x5",
            "Press banca: 5x5",
            "Remo con barra: 5x5",
            "Mismo esquema que el lunes A",
          ],
        },
      ],
      productsRecommended: [3, 12, 14, 10],
    },
  ];

  return (
    <section className="bg-gray-900 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            📋 Contenido de Entrenamiento
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Rutinas y programas de entrenamiento asociados a nuestros productos.
            Comprá tu equipamiento y seguí las rutinas recomendadas.
          </p>
        </div>

        {/* Selected product training */}
        {selectedProduct && selectedProduct.trainingContent && (
          <div className="mb-10 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{selectedProduct.image}</span>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {selectedProduct.name}
                </h3>
                <p className="text-orange-300 text-sm">
                  Rutina asociada al producto
                </p>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4">
              <p className="text-gray-200 text-sm leading-relaxed">
                {selectedProduct.trainingContent}
              </p>
            </div>
            <button
              onClick={() => onAddToCart(selectedProduct)}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Agregar al Carrito 🛒
            </button>
          </div>
        )}

        {/* Training Programs */}
        <div className="space-y-8">
          {trainingPrograms.map((program, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{program.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {program.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                          {program.level}
                        </span>
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
                          {program.duration}
                        </span>
                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">
                          {program.frequency}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {program.description}
                </p>

                {/* Program Days */}
                <div className="space-y-3">
                  {program.days.map((day, dayIdx) => (
                    <div
                      key={dayIdx}
                      className="bg-gray-900/50 rounded-xl p-4 border border-gray-700"
                    >
                      <h4 className="text-orange-400 font-medium text-sm mb-2">
                        {day.day}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {day.exercises.map((exercise, exIdx) => (
                          <div key={exIdx} className="flex items-center gap-2">
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-300 text-xs">
                              {exercise}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommended products for this program */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-xs mb-2 font-medium">
                    Productos recomendados para este programa:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.productsRecommended.map((productId) => {
                      const product = products.find((p) => p.id === productId);
                      if (!product) return null;
                      return (
                        <button
                          key={productId}
                          onClick={() => onAddToCart(product)}
                          className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg px-3 py-1.5 transition-colors"
                        >
                          <span className="text-sm">{product.image}</span>
                          <span className="text-white text-xs">
                            {product.name.split(" ").slice(0, 3).join(" ")}
                          </span>
                          <span className="text-orange-400 text-xs">🛒</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product-specific training content */}
        <div className="mt-12">
          <h3 className="text-white font-bold text-xl mb-6 text-center">
            📖 Rutinas por Producto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsWithTraining.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{product.image}</span>
                  <h4 className="text-white font-medium text-sm">
                    {product.name}
                  </h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {product.trainingContent}
                </p>
                <button
                  onClick={() => onAddToCart(product)}
                  className="mt-3 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors"
                >
                  Agregar al carrito →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContent;
