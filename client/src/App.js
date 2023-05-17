// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import UpdatePage from './views/UpdatePage';
import CreatePage from './views/CreatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/edit/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
