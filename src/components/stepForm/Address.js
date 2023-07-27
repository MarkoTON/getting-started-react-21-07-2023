import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;
  return (
    <div className="container" >
      <h3>Address</h3>
      <input
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <input
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <input
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        
      />
      <input
        label="Zip"
        name="zip"
        type="number"
        value={zip}
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
