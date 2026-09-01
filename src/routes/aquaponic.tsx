import { createFileRoute } from "@tanstack/react-router";
import { SystemPage } from "@/components/SystemPage";

export const Route = createFileRoute("/aquaponic")({
  component: AquaponicPage,
  head: () => ({
    meta: [
      { title: "Aquaponic Living Wall — Vertical Oxygen" },
      {
        name: "description",
        content:
          "Closed-loop aquaponic living walls that pair freshwater fish and plants for a self-regulating indoor ecosystem.",
      },
      {
        property: "og:title",
        content: "Aquaponic Living Wall — Vertical Oxygen",
      },
      {
        property: "og:description",
        content:
          "Closed-loop aquaponic living walls that pair freshwater fish and plants for a self-regulating indoor ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/aquaponic" }],
  }),
});

function AquaponicPage() {
  return <SystemPage systemKey="aquaponic" />;
}
