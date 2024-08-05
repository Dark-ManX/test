import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/app/components/Header";
import { navigation } from "@/app/configs/navigation";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header data={navigation} />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
