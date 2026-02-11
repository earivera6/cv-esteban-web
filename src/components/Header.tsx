function Header() {
  return (
    <header>
      <img
        src="/og-image.jpg"
        alt="Esteban Rivera"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1.5rem",
        }}
      />

      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        Esteban Rivera
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "1rem" }}>
        Software Engineer (Frontend)
      </p>

      <div style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
        <p>Quito – Ecuador</p>
        <p>estebanrivera200039@gmail.com</p>
        <p>+593 995085634</p>
      </div>
    </header>
  );
}

export default Header;
