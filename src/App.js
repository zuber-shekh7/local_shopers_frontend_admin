import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardSharedLayout from "./components/DashboardSharedLayout";
import Footer from "./components/Shared/Footer";
import Navigation from "./components/Shared/Navigation";
import ProtectedRoute from "./components/Shared/Routes/ProtectedRoute";
import HomePage from "./pages/admin/HomePage";
import LoginPage from "./pages/admin/LoginPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import CategoryPage from "./pages/categories/CategoryPage";
import CreateCategoryPage from "./pages/categories/CreateCategoryPage";
import EditCategoryPage from "./pages/categories/EditCategoryPage";
import NotFoundPage from "./pages/core/NotFoundPage";
import CustomersPage from "./pages/customers/CustomersPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="admin" element={<DashboardSharedLayout />}>
          <Route
            exact
            path="account"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="categories"
            element={
              <ProtectedRoute>
                <CategoriesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories/new"
            element={
              <ProtectedRoute>
                <CreateCategoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories/:category_id/edit"
            element={
              <ProtectedRoute>
                <EditCategoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories/:category_id"
            element={
              <ProtectedRoute>
                <CategoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="customers"
            element={
              <ProtectedRoute>
                <CustomersPage />
              </ProtectedRoute>
            }
            exact
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
