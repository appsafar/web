import { getTranslations } from "next-intl/server";
import { BetaSignup } from "@/components/beta-signup/beta-signup";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="my-8 px-6 md:px-0 md:my-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 w-full md:w-[400px]">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-center">
          {t("title")}
        </h1>
        <BetaSignup />
      </div>
    </section>
  );
}
