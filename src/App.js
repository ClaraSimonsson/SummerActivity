import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Pages/Home'));
const Camera = lazy(() => import('./Pages/Camera'));

const App = () => {
  return (
     <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camera" element={<Camera />} />
          </Routes>
        </Suspense>
     </>
  );
 };

export default App;
