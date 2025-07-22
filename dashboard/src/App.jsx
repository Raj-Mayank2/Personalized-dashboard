import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { FavoritesProvider } from "./context/FavoritesContext"; // Note plural "Favorites"

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
