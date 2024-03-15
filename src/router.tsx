import React, {FC} from "react";


import MeetupsPage from "@/pages/MeetUps";
import NewMeetupPage from "@/pages/NewMeetup";
import LandingPage from "@/pages";
import { RouteObject, useRoutes } from 'react-router-dom';


const routeList: RouteObject[] = [
    {
        path: "/",
        element:<LandingPage/>,
        children: [
            {
                index: true,
                element: <MeetupsPage/>,
            },
            {
                path: '/meetups/:id',
                element: <>details</>
            },
            {
                path: "/new-meetup",
                element: <NewMeetupPage/>,
            },
        ]
    },
];

const RenderRouter: FC = () => {
    return useRoutes(routeList);
};

export default RenderRouter;