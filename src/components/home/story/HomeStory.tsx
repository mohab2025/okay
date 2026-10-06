import { storyContent } from "@/content/story";
import type { Locale } from "@/i18n/routing";
import { ConversationAction } from "./ConversationAction";
import { ExecutionGap } from "./ExecutionGap";
import { UnstructuredData } from "./UnstructuredData";

type HomeStoryProps = {
  locale: Locale;
};

export function HomeStory({ locale }: HomeStoryProps) {
  const content = storyContent[locale];

  return (
    <>
      <ExecutionGap content={content} />
      <ConversationAction content={content} />
      <UnstructuredData content={content} />
    </>
  );
}
