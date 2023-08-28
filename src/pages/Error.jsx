import Narber from "../components/narbar"
// import { Outlet } from 'react-router-dom'


export default function Error() {
    return (
        <>
            <Narber />
            <div>{window.location.replace("/")}</div>
        </>
    )
}