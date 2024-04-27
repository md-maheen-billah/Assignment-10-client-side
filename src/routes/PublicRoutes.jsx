import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import Error from "../pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllItems from "../Pages/AllItems/AllItems";
import AddItems from "../Pages/AddItems/AddItems";
import MyList from "../Pages/MyList/MyList";
import Root from "../layouts/Root/Root";
import PrivateRoutes from "./PrivateRoutes";
import UpdateItems from "../Pages/UpdateItems/UpdateItems";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import OilPainting from "../Pages/Categories/OilPainting";
import LandscapePainting from "../Pages/Categories/LandscapePainting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: (
          <PrivateRoutes>
            <AddItems></AddItems>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateitems/:id",
        element: (
          <PrivateRoutes>
            <UpdateItems></UpdateItems>
          </PrivateRoutes>
        ),
      },
      {
        path: "/itemdetails/:id",
        element: (
          <PrivateRoutes>
            <ItemDetails></ItemDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
      },
      {
        path: "/oilpaintings",
        element: <OilPainting></OilPainting>,
      },
      {
        path: "/landscapepaintings",
        element: <LandscapePainting></LandscapePainting>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
