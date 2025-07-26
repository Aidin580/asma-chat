import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import SectionPage from './screens/SectionPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/section/:id" element={<SectionPage />} />
      </Routes>
  );
}

export default App;