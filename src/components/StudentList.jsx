import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
  const [studentsToShow, setStudentsToShow] = useState(10);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setStudentsToShow((prev) => Math.min(prev + 10, students.length));
  };

  const handleStudentClick = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {students.slice(0, studentsToShow).map((student) => (
          <div key={student.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <StudentCard student={student} onStudentClick={handleStudentClick} />
          </div>
        ))}
      </div>
      {studentsToShow < students.length && (
        <div className="text-center mt-4 mb-4">
          <button className="btn btn-primary" onClick={handleShowMore}>
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentList;