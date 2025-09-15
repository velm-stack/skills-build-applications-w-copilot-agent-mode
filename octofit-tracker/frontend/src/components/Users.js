import React, { useEffect, useState } from 'react';

// https://potential-lamp-q7px5v7ggr9vhx9gp-8000.app.github.dev/api/users

const Users = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = `${process.env.REACT_APP_CODESPACE_URL}/api/users/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users API endpoint:', apiUrl);
        console.log('Fetched users:', results);
      });
  }, [apiUrl]);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title text-warning">Users</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.team?.name || 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
