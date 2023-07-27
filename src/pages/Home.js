import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

function Home() {
  const { data, loading } = useFetchData('https://jsonplaceholder.typicode.com/users'); // Zamijenite sa stvarnim URL-om API-ja
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

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
                <td><Link to={'./user/'+ item.id}>{item.name}</Link></td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.phone}</td>
                <td><a target='_blank' href={'https://www.google.rs'}>{item.website}</a></td>
                <td>{item.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;