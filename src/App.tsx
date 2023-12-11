import '../src/assets/css/style.css';
import '../src/assets/css/unsemantic-grid.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpenRoutes } from './routing/OpenRoutes';
import MainLayout from './components/mainLayout/mainLayout';
import Home from './components/page/home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpenRoutes><MainLayout /></OpenRoutes>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
