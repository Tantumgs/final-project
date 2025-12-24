import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StudentDetail = ({ students }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Student not found.
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to list
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={student.image} className="img-fluid rounded-start" alt={student.fullName} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{student.fullName}</h2>
              <p className="card-text"><strong>ID:</strong> {student.id}</p>
              <p className="card-text"><strong>Group:</strong> {student.group}</p>
              <p className="card-text"><strong>Year:</strong> {student.year}</p>
              <p className="card-text"><strong>GPA:</strong> {student.gpa}</p>
              <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                Back to list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;