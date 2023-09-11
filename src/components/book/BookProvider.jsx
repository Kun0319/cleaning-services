import BookContext from "./book-context";
const formData = {
    uid: null,
    weeks: 4,
    employeeid: null,
    week: null,
    time: null,
    date: null,
    name: null,
    phone: null,
    email: null,
    city: "台中市",
    rural: "中區",
    address: null,
    note: null,
}
const BookProvider = ({children})=>{
    return (
        <BookContext.Provider value={formData}>{children}</BookContext.Provider>
    )
}
export default BookProvider;