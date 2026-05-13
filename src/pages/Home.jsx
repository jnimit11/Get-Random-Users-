import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=20"
      );
      const data = await res.json();
      setUsers(data.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>Random Users</h1>
        <p>Discover and explore random user profiles around the world</p>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="refresh-btn" onClick={fetchUsers}>
          🔄 Refresh
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : filteredUsers.length > 0 ? (
        <div className="grid">
          {filteredUsers.map((user, index) => (
            <div key={user.login.uuid} style={{ animationDelay: `${index * 0.1}s` }}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🔍</div>
          <p>No users found matching "{search}"</p>
          <p style={{ fontSize: "0.95rem", marginTop: "10px" }}>Try a different search term</p>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Nimit Jain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;