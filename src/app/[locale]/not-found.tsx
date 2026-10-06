import { getTranslations } from "next-intl/server";
import { PageTransition } from "@/components/motion/PageTransition";
import { Section } from "@/components/primitives";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <PageTransition>
      <Section
        heading="h1"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("body")}
      />
    </PageTransition>
  );
}
