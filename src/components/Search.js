function Search(props) {
  const handleSearchChange = (value) => {
    props.searchTerm(value)
  }
  return ( 
    <div className="row">
      <div className="col">
       <input
          type="text"
          className="form-control"
          name="search"
          id="search"
          placeholder="Search users..."
          onChange={(e)=>handleSearchChange(e.target.value)}
        />
      </div>
    </div>
   );
}

export default Search;