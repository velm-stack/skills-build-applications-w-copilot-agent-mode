import React, { useEffect, useState } from 'react';

// https://potential-lamp-q7px5v7ggr9vhx9gp-8000.app.github.dev/api/activities

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = `${process.env.REACT_APP_CODESPACE_URL}/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', apiUrl);
        console.log('Fetched activities:', results);
      });
  }, [apiUrl]);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title text-primary">Activities</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.type}</td>
                <td>{activity.duration}</td>
                <td>{activity.user?.name || 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
