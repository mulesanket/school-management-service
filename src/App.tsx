import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;