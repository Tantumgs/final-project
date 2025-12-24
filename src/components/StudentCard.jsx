import React from 'react';

const StudentCard = ({ student, onStudentClick }) => {
  return (
    <div className="card h-100 cursor-pointer" onClick={() => onStudentClick(student.id)}>
      <img src={student.image} className="card-img-top" alt={student.fullName} />
      <div className="card-body">
        <h5 className="card-title">{student.fullName}</h5>
        <p className="card-text">Group: {student.group}</p>
        <p className="card-text">Year: {student.year}</p>
        <p className="card-text">GPA: {student.gpa}</p>
      </div>
    </div>
  );
};

export default StudentCard;