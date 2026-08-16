import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const Agents = React.lazy(() => import('./pages/Agents'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <SmoothScroll>
      <CustomCursor />
      
      {loading ? (
        <LoadingScreen onLoadingComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <React.Suspense fallback={<div className="min-h-screen bg-background" />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/agents" element={<Agents />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </React.Suspense>
          </main>
          <Footer />
        </div>
      )}
    </SmoothScroll>
  );
}

export default App;
