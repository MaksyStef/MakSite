/*========= Import scripts =========*/
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

/*========= Import Pages =========*/
import Landing from './pages/Landing/Landing';
import Homepage from './pages/Homepage/Homepage';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
// import Feedback from './pages/Feedback/Feedback';

/*========= Import Components =========*/
import Navbar from './components/Navbar/Navbar';
import PageLoader from './components/PageLoader/Pageloader';

// Layout Wrapper Component
function Layout({ children }) {
  const location = useLocation();

  // Define routes where Navbar and container should not be displayed
  const noNavbarRoutes = ['/portfolio', '/'];

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {showNavbar ? <div className="container">{children}</div> : children}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const pageLoaderRef = useRef();
  useEffect(() => {
    // Listen for the window load event, which ensures all assets are fully loaded
    const handleLoad = () => {
      setTimeout(()=>setLoading(false), 1000);

    };

    // Attach the load event listener
    window.addEventListener('load', handleLoad);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])

  if (loading) {
    return (
      <PageLoader />
    )
  } else {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/homepage" element={<Homepage />} />
            {/* <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} /> */}
          </Routes>
        </Layout>
      </Router>
    )
  }
}

export default App;