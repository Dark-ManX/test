import { createLazyFileRoute } from "@tanstack/react-router";
import Auth from "@/pages/AuthPage/AuthPage";

export const Route = createLazyFileRoute("/auth")({
  component: Auth,
});
