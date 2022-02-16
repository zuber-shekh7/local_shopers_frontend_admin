import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navigation from "./components/Shared/Navigation";
import ProtectedRoute from "./components/Shared/Routes/ProtectedRoute";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/admin/LoginPage";
import CategoriesPage from "./pages/categories/CategoriesPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route
          exact
          path="/admin/account"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin/categories"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
