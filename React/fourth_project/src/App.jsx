import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <h1 className="bg-red-300 p-6">React Router</h1>
      <Home />
      <Footer />
    </>
  );
}

export default App;
