import React, { useState } from 'react';


export default function StudentForm({ onFormSubmit }) {
  const [studentData, setStudentData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(studentData);
    }
  };

  const styles = {
    formContainer: {
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      maxWidth: '500px',
      margin: 'auto',
      backgroundColor: '#BBDEFB',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <div style={styles.formContainer}>
      <h3>Student Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={studentData.name}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Student Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={studentData.email}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={studentData.phone}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
