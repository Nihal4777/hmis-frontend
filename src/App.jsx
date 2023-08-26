
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div style={{backgroundColor: "#F8F8F8", minHeight: "100vh"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" name="loginPage" element={<LoginPage />}/>
        <Route path="/dashboard" name="dashboardPage" element={<DashboardPage title="Smart HMIS"/>}/>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </BrowserRouter>
    </div>
  );
}

export default App;
