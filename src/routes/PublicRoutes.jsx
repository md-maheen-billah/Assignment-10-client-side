import { createBrowserRouter } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/land.json"),
      },

      {
        path: "/update",
        element:
          //   <PrivateRoute>
          {
            /* <UpdateProfile></UpdateProfile> */
          },
        //   </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allitems",
        element: <AllItems></AllItems>,
      },
      {
        path: "/additems",
        element: <AddItems></AddItems>,
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
