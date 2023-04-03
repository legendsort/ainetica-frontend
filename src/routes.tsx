import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import LoadingScreen from "./components/common/LoadingScreen";
import MainLayout from "./layout/MainLayout";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
// const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
// const Register = Loadable(
//   lazy(() => import('./pages/authentication/Register'))
// );

//  * HOME PAGE
const Home = Loadable(lazy(() => import("./pages/Home")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

];

export default routes;
