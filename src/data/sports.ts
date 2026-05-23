export type SportsHighlight = {
  title: string;
  context: string;
  description: string;
  photos?: Array<{
    label: string;
    src: string;
    alt: string;
    note: string;
  }>;
  videos: Array<{
    label: string;
    src: string;
    poster: string;
    note: string;
  }>;
};

export const sportsHighlights: SportsHighlight[] = [
  {
    title: "Club Atlante México — Youth Academy",
    context: "Youth academy · High-performance habits",
    description:
      "An early academy stage that introduced higher expectations, training discipline and the seriousness of competing in structured environments.",
    photos: [
      {
        label: "Atlante academy · Training environment",
        src: "/media/futbol/atlante/atlante-academy-01.jpg",
        alt: "Caleb Perez during his Club Atlante youth academy stage.",
        note: "Training environment from an early stage of Caleb's football path.",
      },
      {
        label: "Atlante academy · Formation stage",
        src: "/media/futbol/atlante/atlante-academy-02.jpg",
        alt: "Club Atlante youth academy photo from Caleb Perez's football path.",
        note: "A formation-stage moment connected to discipline and consistency.",
      },
      {
        label: "Atlante academy · Competitive habits",
        src: "/media/futbol/atlante/atlante-academy-03.jpg",
        alt: "Atlante youth academy memory connected to Caleb Perez's sports discipline.",
        note: "A sports milestone that reflects early competitive habits.",
      },
    ],
    videos: [],
  },
  {
    title: "Quintana Roo State Team — National Tournament",
    context: "State representation · Competitive pressure",
    description:
      "Representing Quintana Roo at a national level taught preparation, collective responsibility and performance under pressure.",
    videos: [
      {
        label: "Quintana Roo · National tournament",
        src: "/media/futbol/quintana-roo-01-optimized.mp4",
        poster: "/media/futbol/quintana-roo-01-poster.jpg",
        note: "Curated clip from national tournament participation.",
      },
      {
        label: "Quintana Roo · Competitive pressure",
        src: "/media/futbol/quintana-roo-02-optimized.mp4",
        poster: "/media/futbol/quintana-roo-02-poster.jpg",
        note: "Moment selected to show match rhythm and intensity.",
      },
      {
        label: "Quintana Roo · Continuity",
        src: "/media/futbol/quintana-roo-03-optimized.mp4",
        poster: "/media/futbol/quintana-roo-03-poster.jpg",
        note: "Additional clip from national-level participation.",
      },
    ],
  },
  {
    title: "Universidad Anáhuac Cancún — Football scholarship / university team",
    context: "University sport · Competition and consistency",
    description:
      "University football reinforced discipline, teamwork and the ability to compete while navigating academic and professional exploration.",
    videos: [
      {
        label: "Anáhuac Cancún highlight 01",
        src: "/media/futbol/anahuac-cancun-01-optimized.mp4",
        poster: "/media/futbol/anahuac-cancun-01-poster.jpg",
        note: "Curated sequence from university-level competition.",
      },
      {
        label: "Anáhuac Cancún highlight 02",
        src: "/media/futbol/anahuac-cancun-02-optimized.mp4",
        poster: "/media/futbol/anahuac-cancun-02-poster.jpg",
        note: "Second clip showing competitive continuity.",
      },
      {
        label: "Anáhuac Cancún highlight 03",
        src: "/media/futbol/anahuac-cancun-03-optimized.mp4",
        poster: "/media/futbol/anahuac-cancun-03-poster.jpg",
        note: "Extended clip showing game reading and field presence.",
      },
    ],
  },
];
