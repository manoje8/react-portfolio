import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrap">
        <aside className="sidebar-aside border">
          <div className="text-center">
            <h1 id="logo">
              <a href="/">Mano Deepan</a>
            </h1>
          </div>
          <nav id="main-menu" role="navigation" className="navbar" style={{ paddingTop: "2em" }}>
            <div id="navbar">
              <ul>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skill" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#project" data-nav-section="projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" data-nav-section="experience">
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href="#education" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="resume">
            <a
              className="btn btn-dark"
              href="https://drive.google.com/file/d/1j-XhmOHanH3Nuj6t3JeNRJH28Y_P7Kg1/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
