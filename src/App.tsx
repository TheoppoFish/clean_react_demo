import React, {FC, Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import RenderRouter from "@/router";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<>...</>}>
                <RenderRouter/>
            </Suspense>
        </BrowserRouter>

    );
};

export default App;