import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { useEffect, useState } from 'react';
import Delete from '../components/Delete';
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromStore } from '../store/actions'

function Home() {
  const { deleteUser } = useFetchData('https://jsonplaceholder.typicode.com/users'); // Zamijenite sa stvarnim URL-om API-ja
  const  users  = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [header, setHeader] = useState([])

  const handleDelite = (id) => {
    console.log(id)
    dispatch(removeUserFromStore(id))
    deleteUser(id);
  }

  useEffect(() => {

    const checkUsers = () => {
      console.log(users.users)
      if (users.users.length > 0) {
        const tableHeaders = users.users;
        let keys = Object.keys(tableHeaders[0])
        setHeader(keys)
      }
    }

    checkUsers()
  }, [users.users])


  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            {header.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>

          {users.users && users.users.map((item, index) => {
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