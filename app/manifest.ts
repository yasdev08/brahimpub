import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MB PUB | Publicité & Impression",
    short_name: "MB PUB",
    description:
      "Agence de publicité, impression et communication visuelle à Oran.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#C8102E",
    orientation: "portrait",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}