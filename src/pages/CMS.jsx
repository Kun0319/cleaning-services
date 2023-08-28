import Narbar from "../components/narbar";
import SidebarAdmin from "../components/SidebarAdmin"
import OrderList from "../components/OrderList";
function CMS() {
    return (
        <div>
            <Narbar />
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