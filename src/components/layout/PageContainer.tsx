import type { ComponentProps } from "react";
import { Container } from "@/components/primitives/Container/Container";

type PageContainerProps = ComponentProps<typeof Container>;

export function PageContainer(props: PageContainerProps) {
  return <Container {...props} />;
}
