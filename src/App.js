import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import './App.css';
import ProductDetail from "./pages/ProductDetail";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CategoryList from "./components/CategoryList";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:catId" element={<ProductPage />} />
        <Route path="/product/detail/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        
       </Routes>
    </BrowserRouter>
  );
}

export default App;