const Loader = () => {
  return (
    <div style={{
      textAlign: "center",
      padding: "60px 20px",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "4px solid rgba(96, 165, 250, 0.2)",
        borderTop: "4px solid #60a5fa",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        marginBottom: "20px"
      }}></div>
      <h2 style={{
        color: "#cbd5e1",
        fontSize: "1.3rem",
        fontWeight: "500",
        letterSpacing: "0.5px"
      }}>Loading amazing users...</h2>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;