import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

function User() {
  const { id } = useParams()
  const { data, loading } = useFetchData(`https://jsonplaceholder.typicode.com/users/${id}`); // Zamijenite sa stvarnim URL-om API-ja

  return ( 
    <div>
      User - {id}
      <hr />
      {data && data.name}
    </div>
   );
}

export default User;