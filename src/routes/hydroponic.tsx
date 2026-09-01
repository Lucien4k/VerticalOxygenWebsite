import { createFileRoute } from "@tanstack/react-router";
import { SystemPage } from "@/components/SystemPage";

export const Route = createFileRoute("/hydroponic")({
  component: HydroponicPage,
  head: () => ({
    meta: [
      { title: "Hydroponic Living Wall — Vertical Oxygen" },
      {
        name: "description",
        content:
          "Recirculating, soilless hydroponic living walls engineered for offices, lobbies, and atriums across Canada.",
      },
      {
        property: "og:title",
        content: "Hydroponic Living Wall — Vertical Oxygen",
      },
      {
        property: "og:description",
        content:
          "Recirculating, soilless hydroponic living walls engineered for offices, lobbies, and atriums across Canada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hydroponic" }],
  }),
});

function HydroponicPage() {
  return <SystemPage systemKey="hydroponic" />;
}
