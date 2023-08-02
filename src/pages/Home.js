import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { useEffect, useState } from 'react';
import Delete from '../components/Delete';
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromStore, filterUser } from '../store/actions'
import Search from '../components/Search';
import Table from '../components/Table';

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

  const handleSearchChange = (value) => {
    const searchTerm = value;
    dispatch(filterUser(searchTerm));
  };

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
    handleSearchChange('')
  }, [users.users])


  return (
    <div className='container pt-1'>
      <Search searchTerm={handleSearchChange} />
      <Table users={users.filterUsers} header={header} deleteItem={handleDelite} />
      <hr />
    </div>
  );
}

export default Home;