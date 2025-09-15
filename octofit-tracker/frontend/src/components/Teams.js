import React, { useEffect, useState } from 'react';

// https://potential-lamp-q7px5v7ggr9vhx9gp-8000.app.github.dev/api/teams

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = `${process.env.REACT_APP_CODESPACE_URL}/api/teams/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams API endpoint:', apiUrl);
        console.log('Fetched teams:', results);
      });
  }, [apiUrl]);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title text-info">Teams</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
