
import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (  
    <div className="App">
      <h1>Hello from React!</h1>
        <Navbar></Navbar>
        <Catalog></Catalog>
        <Footer></Footer>

    </div>
  );
}

export default App;
