import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit !== null) {
      const updatedStudents = [...students];
      updatedStudents[edit] = { name, phoneNumber, address };
      setStudents(updatedStudents);
      setEdit(null);
    } else {
      if (name && phoneNumber && address) {
        setStudents([...students, { name, phoneNumber, address }]);
        setCount(count + 1);
      } else {
        alert("Please fill in all fields.");
      }
    }
    setName("");
    setphoneNumber("");
    setAddress("");
  };

  const deleteBtn = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    setCount(count - 1);
  };

  const editBtn = (index) => {
    const studentToEdit = students[index];
    setName(studentToEdit.name);
    setphoneNumber(studentToEdit.phoneNumber);
    setAddress(studentToEdit.address);
    setEdit(index);
  };

  return (
    <>
      <h1>Student Manager</h1>
      <h3>All Students: {count}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nam">Name: </label>
        <input
          id="nam"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="phNo">Mobile: </label>
        <input
          id="phNo"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <br />
        <label htmlFor="address">Address: </label>
        <input
          id="address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <button type="submit">{edit !== null ? "Update" : "Submit"}</button>
      </form>
      <div>
        <h2>All Student </h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <div>
                <strong>Name:</strong> {student.name}
              </div>
              <div>
                <strong>Phone Number:</strong> {student.phoneNumber}
              </div>
              <div>
                <strong>Address:</strong> {student.address}
              </div>
              <button onClick={() => editBtn(index)}>Edit </button>
              <button onClick={() => deleteBtn(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Form;
