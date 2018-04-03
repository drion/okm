import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";
import { store, persistor } from "./_helpers/store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Route component={App} />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
