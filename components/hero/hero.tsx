import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="my-16">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-extrabold leading-tight w-[400px] text-center">
          {t("title")}
        </h1>
      </div>
    </section>
  );
}
