import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function User() {
  const { id } = useParams()
  const users = useSelector(state => state.users);
  const [user, setUser] = useState()
  
  useEffect(()=>{
    const user = users.users.filter(user => {
      if(String(user.id) === String(id)){
        return user
      }
    });
    setUser(user[0])

  },[users.users.length])

  return (
    <div className="container">
      <div className="card mb-3 mt-5" style={{ maxWidth: '1200px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://randomuser.me/api/portraits/men/${parseInt(id)}.jpg`} className="img-fluid w-100 rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              
              <h4 className="card-title pb-2">{user && user.name}</h4>
              <p className="card-title"><b>Username</b>: {user && user.username}</p>
              <p className="card-title"><b>Email</b>: {user && user.email}</p>
              <p className="card-title"><b>Address</b>: {user && user.address.street}</p>
              <p className="card-title"><b>Phone</b>: {user && user.phone}</p>
              <p className="card-title"><b>Website</b>: {user && user.website}</p>
              <p className="card-title"><b>Company</b>: {user && user.company.name}</p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;