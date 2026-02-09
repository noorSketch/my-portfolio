

function Header() {
  return (
    <header className="header">
      
      <img
        src="/profile.jpg"
        alt="Profile"
        className="profile-img"
      />

      <div className="header-text">
        <h1>
          Fiqa Zahid<span className="accent-dot">.</span>
        </h1>

        <p className="title">Junior Frontend Developer</p>

        <span className="accent-line" />
      </div>

    </header>
  );
}

export default Header;
