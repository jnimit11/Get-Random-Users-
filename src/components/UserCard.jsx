const UserCard = ({ user }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(40, 40, 40, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)",
        padding: "28px",
        borderRadius: "16px",
        textAlign: "center",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #ffffff 0%, #cccccc 100%)",
        }}
      />

      {/* Avatar */}
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        style={{
          borderRadius: "50%",
          width: "110px",
          height: "110px",
          marginBottom: "18px",
          border: "3px solid rgba(255, 255, 255, 0.3)",
          objectFit: "cover",
          boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
          transition: "all 0.4s ease",
          animation: "float 3s ease-in-out infinite"
        }}
      />

      {/* Name */}
      <h3 style={{
        fontSize: "1.3rem",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#ffffff",
        letterSpacing: "-0.5px"
      }}>
        {user.name.first} {user.name.last}
      </h3>

      {/* Email */}
      <p style={{
        color: "#cccccc",
        fontSize: "0.95rem",
        marginBottom: "12px",
        wordBreak: "break-all"
      }}>
        {user.email}
      </p>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
        margin: "14px 0"
      }} />

      {/* Info Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px",
      }}>
        <div>
          <p style={{
            fontSize: "0.85rem",
            color: "#888888",
            marginBottom: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontWeight: "600"
          }}>Location</p>
          <p style={{
            color: "#ffffff",
            fontSize: "0.95rem",
            fontWeight: "500"
          }}>
            {user.location.country}
          </p>
        </div>
        <div>
          <p style={{
            fontSize: "0.85rem",
            color: "#888888",
            marginBottom: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontWeight: "600"
          }}>Phone</p>
          <p style={{
            color: "#ffffff",
            fontSize: "0.85rem",
            fontWeight: "500"
          }}>
            {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;