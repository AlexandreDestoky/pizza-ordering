import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Pizza from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { GlobalStyle } from "./shared/GlobalStyle";
import ProductList from "./components/ProductList/ProductList";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/pizza"/>}/>
        <Route path="/:product" element={<ProductList />}/>
        <Route path="/:product/:id" element={<ProductDetail/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
