import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { useEffect } from 'react';
import Delete from '../components/Delete';

function Home() {
  const { data, loading, deleteUser } = useFetchData('https://jsonplaceholder.typicode.com/users'); // Zamijenite sa stvarnim URL-om API-ja
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  const handleDelite = (id) => {
    deleteUser(id);
  }

  useEffect(() => {
    console.log(data)
  }, [data])

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

          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
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
    </div>
  );
}

export default Home;