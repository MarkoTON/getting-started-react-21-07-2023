import { Link } from 'react-router-dom';
import Delete from './Delete';

function Table(props) {
  const users = props.users;
  const header = props.header;
  const deleteItem = props.deleteItem;
  return ( 
    <table className="table">
        <thead>
          <tr>
            {header.map((header) => (
              <th key={header}>{header}</th>
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