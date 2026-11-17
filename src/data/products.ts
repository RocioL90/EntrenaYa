export interface Product {
  id: number;
  name: string;
  category: "equipamiento" | "indumentaria" | "suplementos";
  price: number;
  image: string;
  description: string;
  tags: string[];
  trainingContent?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Set de Mancuernas Ajustables 20kg",
    category: "equipamiento",
    price: 89990,
    image: "🏋️",
    description:
      "Mancuernas ajustables de 2 a 20kg con sistema de bloqueo rápido. Ideales para entrenamiento en casa.",
    tags: ["fuerza", "hipertrofia", "casa"],
    trainingContent:
      "Rutina de fuerza básica con mancuernas: Press de pecho, remo, curl de bíceps, press militar. 4 series x 10 repeticiones cada ejercicio.",
  },
  {
    id: 2,
    name: "Banda Elástica de Resistencia Pro",
    category: "equipamiento",
    price: 15990,
    image: "🔴",
    description:
      "Set de 5 bandas con diferentes niveles de resistencia. Perfectas para calentamiento y tonificación.",
    tags: ["resistencia", "tonificacion", "movilidad", "casa"],
    trainingContent:
      "Circuito de tonificación: Sentadillas con banda, press lateral, abducción de cadera, face pull. 3 series x 15 repeticiones.",
  },
  {
    id: 3,
    name: "Barra Olímpica 20kg + Discos",
    category: "equipamiento",
    price: 189990,
    image: "🏅",
    description:
      "Barra olímpica de acero con capacidad de 200kg. Incluye discos de goma de 2.5, 5, 10 y 20kg.",
    tags: ["fuerza", "hipertrofia", "potencia"],
    trainingContent:
      "Programa de fuerza 5x5: Sentadilla, press banca, peso muerto, press militar, remo con barra. 5 series x 5 repeticiones.",
  },
  {
    id: 4,
    name: "Cuerda de Saltar Speed Rope",
    category: "equipamiento",
    price: 12990,
    image: "⭕",
    description:
      "Cuerda de saltar profesional con rodamientos de acero. Ideal para cardio y coordinación.",
    tags: ["cardio", "coordinacion", "resistencia"],
    trainingContent:
      "HIIT con cuerda: 30 seg salto rápido / 30 seg descanso x 10 rondas. Alternar con 10 burpees entre rondas.",
  },
  {
    id: 5,
    name: "Kettlebell 16kg",
    category: "equipamiento",
    price: 45990,
    image: "🔔",
    description:
      "Kettlebell de hierro fundido con recubrimiento de vinilo. Base plana para estabilidad.",
    tags: ["fuerza", "cardio", "funcional", "potencia"],
    trainingContent:
      "Circuito kettlebell: Swing (15), Goblet Squat (12), Clean & Press (10), Turkish Get-up (5/lado). 4 rondas con 90 seg descanso.",
  },
  {
    id: 6,
    name: "Esterilla de Yoga Premium 6mm",
    category: "equipamiento",
    price: 24990,
    image: "🧘",
    description:
      "Esterilla antideslizante de TPE ecológico. 183cm x 61cm. Incluye correa de transporte.",
    tags: ["flexibilidad", "yoga", "pilates", "casa"],
    trainingContent:
      "Secuencia de yoga: Saludo al sol (5 ciclos), guerrero I y II, triángulo, cobra, niño. Mantener 5 respiraciones cada postura.",
  },
  {
    id: 7,
    name: "Remera Dry-Fit Training",
    category: "indumentaria",
    price: 18990,
    image: "👕",
    description:
      "Remera deportiva con tecnología dry-fit. Transpirable, ligera y de secado rápido.",
    tags: ["cardio", "gym", "running"],
    trainingContent:
      "Usá esta prenda para sesiones de alta intensidad donde la transpiración es clave. Combiná con calentamiento dinámico de 10 min.",
  },
  {
    id: 8,
    name: "Short Compresión Elite",
    category: "indumentaria",
    price: 22990,
    image: "🩳",
    description:
      "Short con compresión graduada. Mejora la circulación y reduce la fatiga muscular.",
    tags: ["running", "cardio", "recuperacion"],
    trainingContent:
      "Ideal para running de larga distancia. Usá también post-entrenamiento para acelerar la recuperación muscular.",
  },
  {
    id: 9,
    name: "Zapatillas Training Pro X",
    category: "indumentaria",
    price: 79990,
    image: "👟",
    description:
      "Zapatillas de entrenamiento con suela plana estable y amortiguación responsive.",
    tags: ["fuerza", "crossfit", "funcional"],
    trainingContent:
      "Diseñadas para levantamientos pesados y WODs. Suela plana para estabilidad en sentadillas y peso muerto.",
  },
  {
    id: 10,
    name: "Guantes de Entrenamiento Pro",
    category: "indumentaria",
    price: 14990,
    image: "🧤",
    description:
      "Guantes con acolchado de gel y muñequera integrada. Protegen y mejoran el agarre.",
    tags: ["fuerza", "gym", "proteccion"],
    trainingContent:
      "Usá para series pesadas de peso muerto y dominadas. El grip extra te permite enfocarte en la técnica sin preocuparte por el agarre.",
  },
  {
    id: 11,
    name: "Whey Protein Isolate 2lb",
    category: "suplementos",
    price: 42990,
    image: "🥛",
    description:
      "Proteína de suero isolada. 25g de proteína por serving. Bajo en grasas y carbohidratos.",
    tags: ["hipertrofia", "recuperacion", "proteina"],
    trainingContent:
      "Tomar 1 serving (30g) dentro de los 30 min post-entrenamiento. Ideal después de rutinas de hipertrofia para maximizar la síntesis proteica.",
  },
  {
    id: 12,
    name: "Creatina Monohidratada 300g",
    category: "suplementos",
    price: 28990,
    image: "💊",
    description:
      "Creatina pura monohidratada. Aumenta fuerza y volumen muscular. 100 servings.",
    tags: ["fuerza", "hipertrofia", "potencia"],
    trainingContent:
      "Fase de carga: 20g/día por 5 días. Mantenimiento: 5g/día. Tomar con jugo o batido post-entreno. Combinar con rutina de fuerza progresiva.",
  },
  {
    id: 13,
    name: "BCAA 2:1:1 Powder",
    category: "suplementos",
    price: 32990,
    image: "⚡",
    description:
      "Aminoácidos ramificados ratio 2:1:1. Reduce fatiga y acelera recuperación intra-entreno.",
    tags: ["resistencia", "recuperacion", "cardio"],
    trainingContent:
      "Mezclar 10g en 500ml de agua y consumir durante entrenamientos de más de 60 min. Especialmente útil en sesiones de resistencia o volumetría alta.",
  },
  {
    id: 14,
    name: "Pre-Workout Explosive",
    category: "suplementos",
    price: 35990,
    image: "🔥",
    description:
      "Fórmula pre-entreno con cafeína, beta-alanina y citrulina. Energía y pump extremo.",
    tags: ["fuerza", "potencia", "energia"],
    trainingContent:
      "Tomar 1 serving 30 min antes del entreno. Ideal para días de pierna o sesiones de fuerza máxima. No usar después de las 18hs.",
  },
  {
    id: 15,
    name: "Multivitamínico Sport",
    category: "suplementos",
    price: 19990,
    image: "💎",
    description:
      "Complejo multivitamínico diseñado para deportistas. Vitaminas, minerales y antioxidantes.",
    tags: ["salud", "recuperacion", "general"],
    trainingContent:
      "Tomar 1 cápsula con el desayuno. Complementa cualquier programa de entrenamiento asegurando los micronutrientes necesarios.",
  },
  {
    id: 16,
    name: "Omega 3 Fish Oil",
    category: "suplementos",
    price: 24990,
    image: "🐟",
    description:
      "Aceite de pescado concentrado. EPA + DHA para salud articular y cardiovascular.",
    tags: ["recuperacion", "salud", "antiinflamatorio"],
    trainingContent:
      "Tomar 2 cápsulas con comida. Los omega 3 reducen la inflamación articular post-entrenamiento y mejoran la recuperación entre sesiones.",
  },
];
