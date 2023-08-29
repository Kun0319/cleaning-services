import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Book1 from "./pages/book/Book1";
import Book2 from "./pages/book/Book2";
import Book3 from "./pages/book/Book3";
import Book4 from "./pages/book/Book4";
import Book5 from "./pages/book/Book5";
import { OrderList, UndoneOrder, DoneOrder } from "./components/dashboard/DashboardSet"
import Dashboard from "./pages/Dashboard"
import MemberInfo from "./pages/member/MemberInfo"
import PersonalInfo from "./pages/member/PersonalInfo"
import Aboutus from "./components/aboutus/aboutus"
import Accepting from "./components/Accept/Accepting"
import Case from "./components/caseshare/case"
import Question from "./components/opinion/question";
import AdminOrder from "./pages/order/AdminOrder";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/accepting" element={<Accepting />} />
        <Route path="/case" element={<Case />} />
        <Route path="/question" element={<Question />} />
        <Route path="/book" element={<Book />}>
          <Route index="/book/" element={<Book1 />} />
          <Route path="/book/book2" element={<Book2 />} />
          <Route path="/book/book3" element={<Book3 />} />
          <Route path="/book/book4" element={<Book4 />} />
          <Route path="/book/book5" element={<Book5 />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthorised={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index="/dashboard/" element={<OrderList />} />
          <Route
            path="/dashboard/AdminOrder/:memberID"
            element={<AdminOrder />}
          />
          <Route path="/dashboard/UndoneOrder/" element={<UndoneOrder />} />
          <Route path="/dashboard/DoneOrder/" element={<DoneOrder />} />
          <Route path="/dashboard/AdminOrder/:memberID" element={<AdminOrder />} />
          <Route path="/dashboard/memberInfo/" element={<MemberInfo />} />
          <Route
            path="/dashboard/PersonalInfo/:memberID"
            element={<PersonalInfo />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;