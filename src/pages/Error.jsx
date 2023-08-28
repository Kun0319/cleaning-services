import Navber from "../components/navbar"
// import { Outlet } from 'react-router-dom'


export default function Error() {
    return (
        <>
            <Navber />
            <div>{window.location.replace("/")}</div>
        </>
    )
}