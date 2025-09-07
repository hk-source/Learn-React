import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Authentication
    const data = {
      userName: "Kamran",
    };
    setUserName(data.userName);
  }, []);
  return (
    <UserContext.Provider value={{loggedInUser: userName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

//{resList.map((restaurant) =>
//(<RestaurantCard resData={restaurant}/>))}
