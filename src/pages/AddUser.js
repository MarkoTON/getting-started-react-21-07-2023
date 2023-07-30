import { useEffect, useState } from "react";
// import { MultiStepForm } from "../components/MultiStepForm";
import useFetchData from "../hooks/useFetchData";
import { v4 as uuidv4 } from 'uuid';

function AddUser() {
  const { addUserPOST } = useFetchData('https://jsonplaceholder.typicode.com/users');

  const [user, setUser] = useState({
    id:'',
    name: '',
    username: '',
    email: '',
    address: {
      city: '',
      geo: {
        lat: '',
        lng: ''
      },
      street: '',
      suite: '',
      zipcode: '',
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value
      }
    }));
  };

  const handleGeoChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        geo: {
          ...prevUser.address.geo,
          [name]: value
        }
      }
    }));
  };

  const handleCompanyChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      company: {
        ...prevUser.company,
        [name]: value
      }
    }));
  };

  const handleSubmit = (event) => {
    setUser((prevUser)=>({
      ...prevUser,
      id: uuidv4()
    }));
    event.preventDefault();
    addUserPOST(user);
    console.log(user); // Ovde možete dalje postupiti sa unetim podacima
  };

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">

          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="form-group row mb-2">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="username" id="username" placeholder="exmp: johndoe" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" name="email" id="email" placeholder="demo@demo.com" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10 ms-2 form-group row ">
                <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="city" id="city" placeholder="Pere Perica 22" onChange={handleAddressChange} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Street</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="street" id="street" placeholder="Pere Perica 22" onChange={handleAddressChange} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Suite</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="suite" id="suite" placeholder="Pere Perica 22" onChange={handleAddressChange} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Zipcode</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="zipcode" id="zipcode" placeholder="Pere Perica 22" onChange={handleAddressChange} />
                </div>
                <div className="col-sm-10 form-group row">
                  <div className="form-group row ps-3 ms-2 mb-2">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Lat</label>
                    <div className="col-sm-10 mb-2">
                      <input type="text" className="form-control" name="lat" id="lat" placeholder="Pere Perica 22" onChange={handleGeoChange} />
                    </div>
                    <label htmlFor="address" className="col-sm-2 col-form-label">Lng</label>
                    <div className="col-sm-10 mb-2">
                      <input type="text" className="form-control" name="lng" id="lng" placeholder="Pere Perica 22" onChange={handleGeoChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="phone" id="phone" placeholder="+432 45 456 65 67" onChange={handleChange} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="website" id="website" placeholder="Exmp: www.deadae.ad" onChange={handleChange} />
              </div>
            </div>
            <div className="col-sm-10 form-group row">
              <div className="form-group row ps-3 ms-2 mb-2">
                <label htmlFor="address" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="name" id="nameComp" placeholder="ILR" onChange={handleCompanyChange} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Catch Phrase</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="catchPhrase" id="catchPhrase" placeholder="..." onChange={handleCompanyChange} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Bs</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" name="bs" id="bs" placeholder="..." onChange={handleCompanyChange} />
                </div>
              </div>
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
      {/* <hr />
      <MultiStepForm /> */}
    </div>
  );
}

export default AddUser;