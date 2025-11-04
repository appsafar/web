import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { FloatTrip } from "@/components/float-trip/float-trip";
import { TRIP_IMAGES } from "@/components/float-trip/contants";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="w-full min-h-screen bg-diamond">
      <div className="relative md:w-[900px] mx-auto">
        <Navbar />
        <div className="relative py-8 md:py-16">
          <Hero />

          {TRIP_IMAGES.map((trip) => (
            <FloatTrip
              key={trip.src}
              imageUrl={trip.src}
              title={trip.title}
              days={trip.days}
              ageRange={trip.ageRange}
              position={trip.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
