import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
// import Instamart from "./src/components/Instamart";
import Shimmer from "./src/components/Shimmer";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";
import "./index.css";

function AppLayout() {
  return (
    <div className="bg-red-500">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

const Instamart = lazy(() => import("./src/components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile name={"sunny2"} />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element inside the root

root.render(<RouterProvider router={appRouter} />);
