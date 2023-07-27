import { useEffect, useState } from "react";
import { MultiStepForm } from "../components/MultiStepForm";

function AddUser() {
  const [user, setUser] = useState({
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
      catchPhrase:'',
      bs:''
    }
  })

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">

          <form className="mt-2">
            <div className="form-group row mb-2">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" placeholder="exmp: johndoe" onChange={(e) => setUser({ ...user, username: e.target.value })} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" placeholder="demo@demo.com" onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10 ms-2 form-group row ">
                <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" id="city" placeholder="Pere Perica 22" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Street</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" id="address" placeholder="Pere Perica 22" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Suite</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" id="address" placeholder="Pere Perica 22" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label">Zipcode</label>
                <div className="col-sm-10 mb-2">
                  <input type="text" className="form-control" id="address" placeholder="Pere Perica 22" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                </div>
                <div className="col-sm-10 form-group row">
                  <div className="form-group row ps-3 ms-2 mb-2">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Lat</label>
                    <div className="col-sm-10 mb-2">
                      <input type="text" className="form-control" id="address" placeholder="Pere Perica 22" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                    </div>
                    <label htmlFor="address" className="col-sm-2 col-form-label">Lng</label>
                    <div className="col-sm-10 mb-2">
                      <input type="text" className="form-control" id="address" placeholder="Pere Perica 22" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>




            </div>

            <div className="form-group row mb-2">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="phone" placeholder="+432 45 456 65 67" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="website" placeholder="Exmp: www.deadae.ad" onChange={(e) => setUser({ ...user, website: e.target.value })} />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="company" className="col-sm-2 col-form-label">Company</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="company" placeholder="Company" onChange={(e) => setUser({ ...user, company: e.target.value })} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <MultiStepForm />
    </div>
  );
}

export default AddUser;