import { useState } from 'react';
import './App.css';

function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");

  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      address
    }
    setUsers([...users, user]);
    setName("")
    setEmail("")
    setAddress("")
  }

  return (
    <div className="App">
     <h1>CRUD Application</h1>
     <form className='crudd' onSubmit={addUser}>
         <div className="form-group">
         <label>Name</label><br></br>
      <input 
       type="text" 
       className="form-control"
       value={name}
       onChange={(e) => setName(e.target.value)} /><br></br>
      
      <label>Email</label><br></br>
      <input 
       type="text"
       className="form-control" 
       value={email}
       onChange={(e) => setEmail(e.target.value)} 
       /><br></br>
      
      <label>Address</label><br></br>
      <input
       type="text"
       className="form-control"
       value={address}
       onChange={(e) => setAddress(e.target.value)}  /><br></br>
       <button className="btn btn-success form-control">Add</button>
         </div>
      
     </form><br></br>
      <table className="table">
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
          </tr>
          {
                users.map((user) => {
                    return (
                      <tr>
                      <td>{users.name} </td>
                      <td>{users.email} </td>
                      <td>{users.address} </td>
                      <td> <button className='btn btn-info'>Edit</button> </td>
                      <td> <button className='btn btn-info'>Delete</button> </td>
                      </tr>
                    );
                })
              }
      </table>
    </div>
  );
}

export default App;
