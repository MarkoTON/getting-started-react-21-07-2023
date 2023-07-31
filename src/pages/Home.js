import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { useEffect } from 'react';
import Delete from '../components/Delete';
import { useDispatch, useSelector } from "react-redux";
import { setUserFromAPI, removeUserFromStore } from '../store/actions'

function Home() {
  const { data, loading, deleteUser } = useFetchData('https://jsonplaceholder.typicode.com/users'); // Zamijenite sa stvarnim URL-om API-ja
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];
  const dispatch = useDispatch();


  const { users }  = useSelector(state => state);

  const handleDelite = (id) => {
    console.log(id)
    dispatch(removeUserFromStore(id))
    deleteUser(id);
  }

  const setDataToStore = ()=> {
    dispatch(setUserFromAPI(data));
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  useEffect(() => {
    if(data){
      if (!users) {
        setDataToStore();
      }
    }
  }, [users, dispatch, data]);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>

          {data &&  users.users.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td><Link to={'./user/' + item.id}>{item.name}</Link></td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.phone}</td>
                <td><a target='_blank' href={'https://www.google.rs'}>{item.website}</a></td>
                <td className='d-flex justify-content-between'>
                  {item.company.name}
                  <Delete itemID={item.id} deleteItem={handleDelite} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default Home;