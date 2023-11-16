import { Outlet } from "react-router-dom"
import HeaderComp from "./components/HeaderComp"

export default function LayoutDefault() {
    return (
        <>
            <HeaderComp />
            <Outlet />
        </>
    )
}