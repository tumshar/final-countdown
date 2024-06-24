const Header = () => {
    return (
          <div className="header">

                <div className="logoContainer">
                <img
                 className="logo"
                  src
                 style={{ width: "75%", height: "auto"}}
                 
                />
                </div>

                <div className="navigationItems">

                      <ul>
                            <li>japanese</li>
                            <li>hawaian</li>
                            <li>french</li>
                            <li>italian</li>
                      </ul>

                </div>

          </div>
    );
};

export default Header;