import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { Outlet, Navigate } from "react-router-dom";
export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}