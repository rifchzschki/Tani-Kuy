import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoryContainer from "./components/CategoryContainer";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pb-24">
        <CategoryContainer />
        <hr className="mx-20 mt-32 mb-3" />
        <h1 className="text-xl ml-10 mb-3">Recommendation</h1>
        <ProductContainer />
      </div>
      {/* <div> */}
      {/* </div> */}
      <Navbar />
    </div>
  );
}

export default App;
