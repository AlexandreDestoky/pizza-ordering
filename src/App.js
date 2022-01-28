import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Pizza from "./components/Pizza/Pizza";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { GlobalStyle } from "./shared/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/pizza"/>}/>
        <Route path="/pizza" element={<Pizza />}/>
        <Route path="/:product/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </div>
  );
}

export default App;
