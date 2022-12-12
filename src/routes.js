import Home from "./pages/home/Home";
import UserList from "./pages/User/UserList";
import NewUser from "./pages/newUser/newUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Tran from "./pages/tran/Tran";
import Reports from "./pages/reports/Reports";
import Analy from "./pages/analy/Analy";
import Sales from "./pages/sales/Sales";


let routes =[
    {path :"/" , element :<Home />},
    {path :"/UserList" , element :<UserList />},
    {path :"/NewUser" , element : <NewUser />},
    {path :"/Products" , element : <Products />},
    {path :"/user/:ProductID" , element : <Product />},
    {path : '/Tran' , element :<Tran />},
    {path :'/Reports' , element: <Reports />},
    {path : "/Analy" , element : < Analy />},
    {path : "/Sales" , element : <Sales />}
]

export default routes;