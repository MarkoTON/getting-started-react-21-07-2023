import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

function User() {
  const { id } = useParams()
  const { data, loading } = useFetchData(`https://jsonplaceholder.typicode.com/users/${id}`); // Zamijenite sa stvarnim URL-om API-ja

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="card mb-3 mt-5" style={{ maxWidth: '1200px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} className="img-fluid w-100 rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title pb-2">{data.name}</h4>
              <p className="card-title"><b>Username</b>: {data.username}</p>
              <p className="card-title"><b>Email</b>: {data.email}</p>
              <p className="card-title"><b>Address</b>: {data.address.street}</p>
              <p className="card-title"><b>Phone</b>: {data.phone}</p>
              <p className="card-title"><b>Website</b>: {data.website}</p>
              <p className="card-title"><b>Company</b>: {data.company.name}</p>
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