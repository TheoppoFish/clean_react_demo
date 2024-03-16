import React, {FC} from "react";


import LandingPage from "@/pages";
import { RouteObject, useRoutes } from 'react-router-dom';


const routeList: RouteObject[] = [
    {
        path: "/",
        element:<LandingPage/>,
        children: [
        ]
    },
];

const RenderRouter: FC = () => {
    return useRoutes(routeList);
};

export default RenderRouter;