import React from 'react'

function Header() {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <nav className="container navbar navbar-light bg-dark">
          <a className="navbar-brand text-primary">My Diary</a>
            <div className="row">
              <div className="col">
                <div className="nav-item" >
                  <a className="nav-link" tabIndex="0"  id="navbarDropdown1" role="button">
                    Bluebird
                  </a>
                  <div  aria-labelledby="navbarDropdown1" className="dropdown-menu">
                    <a >Logout</a>
                  </div>
                </div>
                
              </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header