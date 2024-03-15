import React from 'react'
import {createRoot} from 'react-dom/client'

import App from "./App";

import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);

async function enableMocking() {

    return

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
}

const renderApp = (): void => {
    import('@/mocks/browser').then(({worker})=>{
        worker.start({
            onUnhandledRequest: "warn"
        })
    })
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

renderApp();