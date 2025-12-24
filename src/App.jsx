import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { students } from './data/students';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <h1 className="mb-4 text-center">Student Catalog</h1>
        <Routes>
          <Route path="/" element={<StudentList students={students} />} />
          <Route path="/students/:id" element={<StudentDetail students={students} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;