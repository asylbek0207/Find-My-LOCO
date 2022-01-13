import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Locos from "./components/Locos";
import LocoMap from "./components/LocoMap";
import LocoForm from "./components/LocoForm";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar/>}>
                    {/*<Route index element={<Home/>}/>*/}
                    {/*<Route path="/" element={<Locos />} />*/}
                    <Route path="locos" element={<Locos/>}/>
                    <Route path="locos/:id" element={<LocoForm/>}/>
                    <Route path="locos/new" element={<LocoForm/>}/>
                    <Route path="map" exact element={<LocoMap/>}/>
                    {/*<Route path="*" element={<NoPage/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
