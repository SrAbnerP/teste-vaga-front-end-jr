import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Provider from "./context/Provider";

function App() {
  return (
    <div>
      <Provider>
        <Header />
        <Home />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
