import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
function Mainnav() {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      <nav className="main-nav--bg">
        <div className="container main-nav">
          <div className="main-nav-start">
            <div className="search-wrapper">
              <i data-feather="search" aria-hidden="true" />
              <input type="text" placeholder="Enter keywords ..." required />
            </div>
          </div>
          <div className="main-nav-end">
            <button className="sidebar-toggle transparent-btn" title="Menu" type="button">
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle--gray" aria-hidden="true" />
            </button>
            <div className="lang-switcher-wrapper">
              {userInfo ? (
                <div className="notification-wrapper">
                  <button className="gray-circle-btn dropdown-btn" title="To messages" type="button">
                    <picture><source srcSet="./img/avatar/avatar-illustrated-02.webp" type="image/webp" /><img src="./img/avatar/avatar-illustrated-02.png" alt="User" /></picture>
                  </button>
                  <ul className="users-item-dropdown notification-dropdown dropdown">
                    <li>
                      <a href="/customerprofile">
                        <i data-feather="user" aria-hidden="true" />
                        <span>Customer Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="danger" href="/#" >
                        <i data-feather="log-out" aria-hidden="true" />
                        <span onClick={logoutHandler}>Log out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (<div>
                <a href="/signin"><span style={{ color: 'lemonchiffon' }}>Login&#160;&#160;</span></a>
              <a href="/signup"><span style={{ color: 'lemonchiffon' }}>Register</span></a></div>)}
            </div>
            <button className="theme-switcher gray-circle-btn" type="button" title="Switch theme">
              <span className="sr-only">Switch theme</span>
              <i className="sun-icon" data-feather="sun" aria-hidden="true" />
              <i className="moon-icon" data-feather="moon" aria-hidden="true" />
            </button>
            <div className="notification-wrapper">
              <button className="gray-circle-btn dropdown-btn" title="To messages" type="button">
                <span className="sr-only">To messages</span>
                <span className="icon notification active" aria-hidden="true" />
              </button>
              <ul className="users-item-dropdown notification-dropdown dropdown">
                <li>
                  <a href="##">
                    <div className="notification-dropdown-icon info">
                      <i data-feather="check" />
                    </div>
                    <div className="notification-dropdown-text">
                      <span className="notification-dropdown__title">System just updated</span>
                      <span className="notification-dropdown__subtitle">The system has been successfully upgraded. Read more
                        here.</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="notification-dropdown-icon danger">
                      <i data-feather="info" aria-hidden="true" />
                    </div>
                    <div className="notification-dropdown-text">
                      <span className="notification-dropdown__title">The cache is full!</span>
                      <span className="notification-dropdown__subtitle">Unnecessary caches take up a lot of memory space and
                        interfere ...</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <div className="notification-dropdown-icon info">
                      <i data-feather="check" aria-hidden="true" />
                    </div>
                    <div className="notification-dropdown-text">
                      <span className="notification-dropdown__title">New Subscriber here!</span>
                      <span className="notification-dropdown__subtitle">A new subscriber has subscribed.</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-to-page" href="##">Go to Notifications page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Mainnav
