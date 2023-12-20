import '../src/assets/css/style.css';
import '../src/assets/css/unsemantic-grid.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpenRoutes } from './routing/OpenRoutes';
import MainLayout from './components/mainLayout/mainLayout';
import Home from './components/page/home';
import Business from './components/page/business/business';
import FAQs from './components/page/faqs/faqs';
// import OurTeam from './components/page/ourTeam/ourTeam'
import Privacy from './components/page/privacy-policy/privacy';
import Term from './components/page/terms/terms';
import Career from './components/page/careers/careers';
import Page404 from './components/page/404/404';
import ScrollToTop from './scroll';

function App() {

  return (
    
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<OpenRoutes><MainLayout /></OpenRoutes>}>
          <Route index element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* <Route path="/ourteam" element={<OurTeam />} /> */}
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/terms-of-service" element={<Term/>}></Route>
          <Route path="/careers" element={<Career/>}></Route>
          <Route path="/*" element={<Page404/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
