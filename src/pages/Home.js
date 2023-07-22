import useFetchData from '../hooks/useFetchData';

function Home() {
  const { loading } = useFetchData('https://jsonplaceholder.typicode.com/users'); // Zamijenite sa stvarnim URL-om API-ja

  if (loading) {
    return <p>Loading...</p>;
  }

  return ( 
    <div>
      Home page
      <ul>
        {/* {data && <p>True</p>} */}
        {/* {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
    </div>
   );
}

export default Home;