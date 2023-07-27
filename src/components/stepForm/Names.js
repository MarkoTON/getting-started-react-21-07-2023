import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  return (
    <div className="container">
      <h3>Names</h3>
      <input
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <input
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <input
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <button
        variant="contained"
        
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </button>
    </div>
  );
};
