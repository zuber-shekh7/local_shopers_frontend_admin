import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Shared/Navigation";
import ProtectedRoute from "./components/Shared/Routes/ProtectedRoute";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/admin/LoginPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route exact path="admin" element={<ProtectedRoute />}>
          <Route exact path="account" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
