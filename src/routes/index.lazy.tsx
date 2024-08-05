import { createLazyFileRoute } from "@tanstack/react-router";
import IndexPage from "@/pages/IndexPage";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <IndexPage text="Welcome to my test task!" />;
}
