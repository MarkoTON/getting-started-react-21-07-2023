function Delete(props) {
  const itemID = props.itemID;
  const handleDeliteFromBtn = (id) => {
    props.deleteItem(id)
  }
  return ( 
    <button className='btn btn-danger btn-sm p-1 py-0 align-self-center' onClick={()=> handleDeliteFromBtn(itemID)}>x</button>
   );
}

export default Delete;