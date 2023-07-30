import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const addUserPOST = (user) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log('response: ' + JSON.stringify(json));
      })
  }

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, addUserPOST, deleteUser };
};

export default useFetchData;