import React, {FC, memo, PropsWithChildren} from 'react';
import {Layout} from "@/components/layout";
import {Outlet} from "react-router-dom";

const LandingPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default memo(LandingPage);
