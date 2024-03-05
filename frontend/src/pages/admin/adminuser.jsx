
import{ Link }from 'react-router-dom'
import React,{useState,useEffect,Fragment} from "react";
function Users  ()  {
    const [users, setusers] = useState([]);
    useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () =>
      {
         try
         {
             const response = await fetch('http://localhost:5000/api/v1/Users')
              const data = await response.json();
              setusers(data);
            }
            catch (error)
            { console.error('Error fetching data:', error); } };
    return(
  
    <div className="user11">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ID
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {Array.isArray(users) && users.map((user) => (
        <tr key={user._id}>
          <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.isApproved}</td>
          <Link to={`/AdminNeeder/${user._id}`}><button>View</button></Link>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
}
export default Users;