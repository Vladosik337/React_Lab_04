import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { RouteWrapper } from "./components/RouteWrapper";

function App() {
    return ( <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({ path, element: Element, loader }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <RouteWrapper loader={loader}>
                                <Element />
                            </RouteWrapper>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    </BrowserRouter>);
}

export default App;
