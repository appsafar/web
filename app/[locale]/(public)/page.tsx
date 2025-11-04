import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="w-[900px] mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}
