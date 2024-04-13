import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const Root = () => {

    useEffect(() => {

        document.title = "Shop"

    }, [])

    return (
        <>
            <Header />

            <div className="section">

                <Outlet />

            </div>
            
            <Header />
        </>
    )
}

export default Root