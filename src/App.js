import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Pizza from "./components/Pizza/Pizza";
import { GlobalStyle } from "./shared/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      {/* <Routes>
        <Route path="/" element={<Pizza />}/>
      </Routes> */}
    </div>
  );
}

export default App;
