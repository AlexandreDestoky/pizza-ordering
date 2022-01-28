import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./shared/GlobalStyle";

import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { Content } from "./App.style";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Navigate to="/pizza" />} />
          <Route path="/:product" element={<ProductList />} />
          <Route path="/:product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cart />
      </Content>
      <GlobalStyle />
    </div>
  );
}

export default App;
