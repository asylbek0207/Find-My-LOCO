import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Locos from "./components/Locos";
import LocoMap from "./components/LocoMap";
import LocoForm from "./components/LocoForm";
import NotFound from "./components/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Navigate to="/locos" />} />
                <Route path="/" element={<Sidebar/>}>
                    <Route path="locos" element={<Locos/>}/>
                    <Route path="locos/:id" element={<LocoForm/>}/>
                    <Route path="locos/new" element={<LocoForm/>}/>
                    <Route path="map" exact element={<LocoMap/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
