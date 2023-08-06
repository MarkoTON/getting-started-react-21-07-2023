import { Link } from 'react-router-dom';
import Delete from './Delete';
import { useEffect, useState } from 'react';

function Table(props) {
  const [users, setUsers] = useState();
  const header = props.header;
  const deleteItem = props.deleteItem;

  const handleSort = (value) => {
    const clonedUsers = [...users];
    const sortUsers = clonedUsers.sort((a,b)=> {
      if(value === 'address' || value === 'company' || value === 'id'){
        return 0
      } else {
        const nameA = a[value].toUpperCase();
        const nameB = b[value].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    })
    setUsers(sortUsers);
  }

  useEffect(()=>{
    setUsers(props.users)
  },[props.users])

  return ( 
    <table className="table">
        <thead>
          <tr>
            {header && header.map((header) => (
              <th onClick={()=> handleSort(header)} key={header}>{ header.charAt(0).toUpperCase() + header.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>

          {users && users.map((item, index) => {
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
                  <Delete itemID={item.id} deleteItem={deleteItem} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
   );
}

export default Table;