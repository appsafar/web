import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/landing-page/feature-card/feature-card";

const features = [
  {
    key: "createTrip",
    imageSrc: "/how-it-works/01-create-trip.png",
    shadowColor: "pink" as const,
  },
  {
    key: "joinGroup",
    imageSrc: "/how-it-works/02-join-group.png",
    shadowColor: "yellow" as const,
  },
  {
    key: "organizeItinerary",
    imageSrc: "/how-it-works/03-itinerary.png",
    shadowColor: "yellow" as const,
  },
  {
    key: "privateChat",
    imageSrc: "/how-it-works/04-chat.png",
    shadowColor: "pink" as const,
  },
];

const HowItWorks = async () => {
  const t = await getTranslations("howItWorks");

  return (
    <section
      id="how-it-works"
      className="my-10 md:my-16 flex flex-col items-center justify-center px-4"
    >
      <h2 className="text-2xl font-semibold text-center md:text-2xl md:font-bold">
        <span className="block">{t("title")}</span> {t("subtitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            title={t(`features.${feature.key}.title`)}
            description={t(`features.${feature.key}.description`)}
            imageSrc={feature.imageSrc}
            imageAlt={t(`features.${feature.key}.imageAlt`)}
            shadowColor={feature.shadowColor}
          />
        ))}
      </div>
    </section>
  );
};

export { HowItWorks };
