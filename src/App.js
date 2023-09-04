import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Book1 from "./pages/book/Book1";
import Book2 from "./pages/book/Book2";
import Book3 from "./pages/book/Book3";
import Book4 from "./pages/book/Book4";
import Book5 from "./pages/book/Book5";
import {
  OrderList,
  UndoneOrder,
  DoneOrder,
} from "./components/dashboard/DashboardSet";
import Dashboard from "./pages/Dashboard";
import MemberInfo from "./components/member/MemberInfo";
import PersonalInfo from "./components/member/PersonalInfo";
import Aboutus from "./components/aboutus/aboutus";
import Accepting from "./components/Accept/Accepting";
import Case from "./components/caseshare/case";
import Question from "./components/opinion/question";
import AdminOrder from "./pages/order/AdminOrder";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./pages/Error";
import Member from "./pages/Member";
import Order from "./components/dashboard/Order";
import OrderDone from "./components/dashboard/OrderDone";
import Score from "./components/dashboard/score";
import LoginPage from "./components/login/LoginPage";
function App() {
  const [formData, setFormData] = useState({
    weeks: 4,
    employeeid: null,
    week: null,
    time: null,
    date: null,
    name: null,
    phone: null,
    email: null,
    city: null,
    rural: null,
    address: null,
    note: null,
    pay: null,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Accepting />} />
        <Route path="/case" element={<Case />} />
        <Route path="/question" element={<Question />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/book" element={<Book />}>
          <Route
            index="/book/"
            element={<Book1 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/book/book2"
            element={<Book2 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/book/book3"
            element={<Book3 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/book/book4"
            element={<Book4 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/book/book5"
            element={<Book5 formData={formData} setFormData={setFormData} />}
          />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthorised={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index="/dashboard" element={<OrderList />} />
          <Route path="/dashboard/UndoneOrder/" element={<UndoneOrder />} />
          <Route path="/dashboard/DoneOrder/" element={<DoneOrder />} />
          <Route
            path="/dashboard/AdminOrder/:memberID"
            element={<AdminOrder />}
          />
          <Route path="/dashboard/memberInfo/" element={<MemberInfo />} />
          <Route
            path="/dashboard/PersonalInfo/:memberID"
            element={<PersonalInfo />}
          />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/member" element={<Member />}>
          <Route index="/member/" element={<Order />} />
          <Route path="/member/orderdone" element={<OrderDone />} />
          <Route path="/member/Score/:orderID" element={<Score />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
