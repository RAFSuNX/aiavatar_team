import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/ABD002" element={<Navigate to="/ABD0020" replace />} />
        <Route path="/:slug" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;