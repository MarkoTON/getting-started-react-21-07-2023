import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;

  return (
    <div className="container" >
      <h3>Contact</h3>
      <input
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <input
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <div style={{ marginTop: "1rem" }}>
        <button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </button>
        <button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </button>
      </div>
    </div>
  );
};
