export interface Kit {
  id: number;
  name: string;
  objective: string;
  description: string;
  productIds: number[];
  discount: number;
  icon: string;
}

export const objectives = [
  {
    id: "ganar-musculo",
    label: "Ganar Músculo",
    icon: "💪",
    description: "Hipertrofia y fuerza",
  },
  {
    id: "perder-peso",
    label: "Perder Peso",
    icon: "🔥",
    description: "Quemar grasa y definir",
  },
  {
    id: "resistencia",
    label: "Resistencia",
    icon: "🏃",
    description: "Cardio y stamina",
  },
  {
    id: "flexibilidad",
    label: "Flexibilidad",
    icon: "🧘",
    description: "Movilidad y balance",
  },
  {
    id: "fuerza-maxima",
    label: "Fuerza Máxima",
    icon: "🏋️",
    description: "Potencia y fuerza bruta",
  },
  {
    id: "entrenamiento-casa",
    label: "Entrenar en Casa",
    icon: "🏠",
    description: "Kit completo para casa",
  },
];

export const kits: Kit[] = [
  {
    id: 1,
    name: "Kit Hipertrofia Total",
    objective: "ganar-musculo",
    description:
      "Todo lo que necesitás para ganar masa muscular. Incluye equipamiento para entrenar en casa, proteína para recuperación y creatina para fuerza.",
    productIds: [1, 11, 12, 10],
    discount: 15,
    icon: "💪",
  },
  {
    id: 2,
    name: "Kit Quema Grasa",
    objective: "perder-peso",
    description:
      "Combinación perfecta de cardio y suplementación para máxima quema calórica. Cuerda para HIIT, bandas para tonificación y BCAA para preservar músculo.",
    productIds: [4, 2, 13, 8],
    discount: 12,
    icon: "🔥",
  },
  {
    id: 3,
    name: "Kit Runner Pro",
    objective: "resistencia",
    description:
      "Equipamiento completo para corredores. Zapatillas de alto rendimiento, short de compresión y BCAA para resistencia prolongada.",
    productIds: [9, 8, 13, 15],
    discount: 10,
    icon: "🏃",
  },
  {
    id: 4,
    name: "Kit Yoga & Mobility",
    objective: "flexibilidad",
    description:
      "Kit completo para mejorar tu flexibilidad y movilidad. Esterilla premium, bandas elásticas y omega 3 para articulaciones.",
    productIds: [6, 2, 16, 15],
    discount: 18,
    icon: "🧘",
  },
  {
    id: 5,
    name: "Kit Fuerza Bruta",
    objective: "fuerza-maxima",
    description:
      "Para los que buscan levantar pesado. Barra olímpica completa, creatina para potencia y pre-workout para los días más duros.",
    productIds: [3, 12, 14, 10],
    discount: 14,
    icon: "🏋️",
  },
  {
    id: 6,
    name: "Kit Home Gym Completo",
    objective: "entrenamiento-casa",
    description:
      "Transformá tu casa en un gym. Mancuernas, bandas, kettlebell, cuerda y esterilla. Todo para entrenar sin salir de casa.",
    productIds: [1, 2, 5, 4, 6],
    discount: 20,
    icon: "🏠",
  },
];
