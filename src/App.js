import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Shared/Navigation";
import LoginPage from "./pages/admin/LoginPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
