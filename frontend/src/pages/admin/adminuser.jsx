
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";


function Users() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/Users')
      const data = await response.json();
      setusers(data);
    }
    catch (error) { console.error('Error fetching data:', error); }
  };
  return (

    <div className="user11 mx-auto w-3/4 mt-20 mb-20 py-20 ">
      <table className="min-w-full divide-y divide--200 ">
        <thead className="text-center">
          <tr>
            <th scope="col" className="py-3 text-xs font-medium text-700  uppercase">
              Name
            </th>
            <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
              ID
            </th>
            <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
              Email
            </th>
            <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
              Status
            </th>
            <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
              Payment
            </th>
            <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide--200 text-center">
          {Array.isArray(users) && users.map((user) => (
            <tr key={user._id}>
              <td className="py-4">{user.name}</td>
              <td className="py-4">{user._id}</td>
              <td className="py-4">{user.email}</td>
              <td className="py-4">{user.isApproved}</td>
              {
                user.isPaid ?(<td> Paid</td>):(<td>Not paid</td>)
               }
              <td className="py-4">{user.isPaid}</td>
              <td className="py-4">
                <Link to={`/AdminNeeder/${user._id}`}><button className=''>View</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
export default Users;