import { useEffect,useState } from "react";
import Header from "./header1";
import PopularProducts from "./popularProducts";
import axios from "axios";
// import Cart from "./cart";

function App() {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState({
    items:[],
    totalQuantity:0,
    totalPrice:0
  });
  const fetchData=async()=>{
    const resp=await axios.get("http://localhost:2000/products/all?limit=20&page=1");
    setProducts(resp.data);
  }
  useEffect(()=>{
    fetchData()
  },[]);
  return (
    <div>
      <Header/>
      <PopularProducts products={products} cart={cart} setCart={setCart}/>
      {/* <Cart/> */}
    </div>
  );
}

export default App;
