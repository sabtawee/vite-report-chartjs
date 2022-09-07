import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import FooterComponent from "./components/FooterComponent";
import LoginPage from "./pages/Login/LoginPage";
import SetupPage from "./pages/Setup/SetupPage";


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <NavbarComponent />
        <SidebarComponent />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage url="/home" />} />
            <Route path="/setup" element={<SetupPage/>} />

          </Routes>
        </div>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
