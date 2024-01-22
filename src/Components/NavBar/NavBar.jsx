import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <div className="NavBar container">
        <section className="NavBar-container ">
          <section className="Logo"><b>Nebula Hub</b></section>
          <div className="navigations">
            <ul className="nav-list">
              <li>
                <button id="nav-btn">Home</button>
              </li>
              <li>
                <button id="nav-btn">Blog</button>
              </li>
              <li>
                <button id="nav-btn">Pricing</button>
              </li>
              <li>
                <button id="nav-btn">Docs</button>
              </li>
            </ul>
          </div>
          <section className="get-started"><b>GET STARTED</b></section>
        </section>
      </div>
    </>
  );
}

export default NavBar;
