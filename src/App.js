import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;