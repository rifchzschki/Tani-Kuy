import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardProduct from "./components/CardProduct";
import CategoryContainer from "./components/CategoryContainer";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pb-24">
        <CategoryContainer />
        <hr className="mx-20 mt-32 mb-3" />
        <h1 className="text-xl ml-10 mb-3">Recommendation</h1>
        <div className="flex flex-row gap-10 justify-center flex-wrap">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      {/* <div> */}
      {/* </div> */}
      <Navbar />
    </div>
  );
}

export default App;
