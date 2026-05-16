export type SportsHighlight = {
  title: string;
  context: string;
  description: string;
  videos: Array<{
    label: string;
    src: string;
    poster: string;
    note: string;
  }>;
};

export const sportsHighlights: SportsHighlight[] = [
  {
    title: "Universidad Anáhuac Cancún",
    context: "Trayectoria universitaria · Competencia y constancia",
    description:
      "Etapa deportiva que refuerza disciplina, trabajo en equipo y capacidad de competir mientras seguía explorando mi camino académico y profesional.",
    videos: [
      {
        label: "Highlight Anáhuac Cancún 01",
        src: "/media/futbol/anahuac-cancun-01-optimized.mp4",
        poster: "/media/futbol/anahuac-cancun-01-poster.jpg",
        note: "Secuencia curada de competencia universitaria.",
      },
      {
        label: "Highlight Anáhuac Cancún 02",
        src: "/media/futbol/anahuac-cancun-02-optimized.mp4",
        poster: "/media/futbol/anahuac-cancun-02-poster.jpg",
        note: "Segundo clip para mostrar continuidad competitiva.",
      },
      {
        label: "Highlight Anáhuac Cancún 03",
        src: "/media/futbol/anahuac-cancun-03-optimized.mp4",
        poster: "/media/futbol/anahuac-cancun-03-poster.jpg",
        note: "Clip extendido de lectura de juego y presencia en cancha.",
      },
    ],
  },
  {
    title: "Selección Quintana Roo · Torneo Nacional",
    context: "Representación estatal · Alto nivel competitivo",
    description:
      "Experiencia de competencia representando a Quintana Roo, con presión real, preparación constante y enfoque colectivo.",
    videos: [
      {
        label: "Selección Quintana Roo · Nacional",
        src: "/media/futbol/quintana-roo-01-optimized.mp4",
        poster: "/media/futbol/quintana-roo-01-poster.jpg",
        note: "Clip representativo de torneo nacional.",
      },
      {
        label: "Selección Quintana Roo · Presión competitiva",
        src: "/media/futbol/quintana-roo-02-optimized.mp4",
        poster: "/media/futbol/quintana-roo-02-poster.jpg",
        note: "Momento curado para mostrar ritmo e intensidad de partido.",
      },
      {
        label: "Selección Quintana Roo · Continuidad",
        src: "/media/futbol/quintana-roo-03-optimized.mp4",
        poster: "/media/futbol/quintana-roo-03-poster.jpg",
        note: "Clip adicional de participación en torneo nacional.",
      },
    ],
  },
];
