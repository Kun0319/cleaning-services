import Navbar from "../components/navbar";
import SidebarAdmin from "../components/SidebarAdmin"
import OrderList from "../components/OrderList";
function CMS() {
    return (
        <div>
            <Navbar />
            <div
                className="container"
                style={{ display: "flex" }}
            >
                <SidebarAdmin />
                <OrderList />
            </div>
        </div>
    )
}




export default CMS;