import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" width="30" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="icon" />
          <span></span>
        </div>
        <div className="user">
          <img
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/06/christopher-lee-como-dracula-1973693.jpg?tf=3840x"
            alt=""
            className="icon"
          />
          <span>Alucard</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};
