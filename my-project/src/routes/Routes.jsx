import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import CoffeCard from "../components/CoffeeCard/CoffeCard";


const routes= createBrowserRouter([
    {
      path: '/',
      element:<MainLayout />,
      children:[
        {
            path:'/',
            element:<Home />,
            loader: ()=> fetch('categories.json'),
            children:[
                {
                    path:'/category/:category',
                    element:<CoffeCard />
                }
            ]
        },
        {
            path:'/coffee',
            element: <Coffee></Coffee>
        },
        {
            path:'/dashboard',
            element: <Dashboard></Dashboard>
        }
      ]
    }
  ]);

  export default routes;