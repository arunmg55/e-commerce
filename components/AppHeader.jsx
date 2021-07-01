import 'styles/css/header-desktop.module.css'

const AppHeader = () => (
  <div className="container-fluid sticky-top">
    {styles}
    <header className="header-cover">
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="headerRight" align="center">
        <div className="searchIcon">
          <label className="open-search" htmlFor="open-search">
            <div className="searchBar">
              <input
                type="text"
                placeholder="Search for Products, Brands & more"
                className="input-search"
              />
              <button className="button-search">
                <img src="images/search-icon-dsk.svg" alt="search" />
              </button>
            </div>
          </label>
        </div>
        <nav className="rightIcons">
          <ul className="nav-content-list">
            <li className="nav-content-item track-order">
              <a href="">
                <span className="toTxt">Track Order</span>
                <img src="images/track-order.svg" alt="track-order" />
              </a>
            </li>
            <li className="nav-content-item account-login">
              <label
                className="open-menu-login-account"
                htmlFor="open-menu-login-account"
              >
                <input
                  className="input-menu"
                  id="open-menu-login-account"
                  type="checkbox"
                  name="menu"
                />
                <img src="images/user-icon-dsk.png" alt="userIcon" />
                <ul className="login-list">
                  <li className="login-list-item">
                    <a href="https://www.cupcom.com.br/">My account</a>
                  </li>
                  <li className="login-list-item">
                    <a href="https://www.cupcom.com.br/">Create account</a>
                  </li>
                  <li className="login-list-item">
                    <a href="https://www.cupcom.com.br/">logout</a>
                  </li>
                </ul>
              </label>
            </li>
            <li className="nav-content-item">
              <a className="nav-content-link" href="#">
                <img src="images/wishlist-icon-dsk.svg" alt="wishlist" />
              </a>
            </li>
            <li className="nav-content-item">
              <a className="nav-content-link" href="#">
                <img src="images/cart-icon-dsk.svg" alt="cart" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="clear"></div>
    </header>
  </div>
)

export default AppHeader

const styles = (
  <style jsx>{`
    @media (min-width: 1199px) {
      .container {
        max-width: 1154px;
      }
    }

    .sticky-top {
      background: #fff;
    }
    .header-cover {
      /*padding: 0 2.49% 7px 2.49%;*/
      max-width: 1408px;
      /*padding: 0 0 7px 0;*/
      padding: 0 0 0 0;
      margin-left: auto;
      margin-right: auto;
    }
    .header-cover .container {
      width: 100%;
    }
    .header-cover .logo {
      width: 261px;
      margin-top: 17px;
      margin-left: 18px;
      float: left;
    }
    .headerRight {
      float: right;
      width: 72%;
      margin-right: 0;
    }
    .rightIcons {
      width: 256px; /*width:272px;*/
      float: right;
      padding-top: 16px;
    }
    .toTxt {
      display: inline-block;
      font-size: 12px;
      color: #282c3f;
      margin-right: 5px;
    }
    .header-cover .open-menu-login-account {
      margin-bottom: 0;
    }
    .header-cover .open-menu-login-account img {
      width: 21px;
      height: 21px;
    }

    .header-cover .nav-content-list {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 0 0 0 15px;
      margin-bottom: 0;
    }
    .header-cover .nav-content-list li:last-child {
      margin-right: 0;
    }

    .searchIcon {
      float: left;
      padding-top: 16px;
      width: 68%;
    }
    .searchIcon .open-search {
      width: 100%;
    }
    .searchBar {
      width: 100%;
      height: 38px;
      padding: 2px 0;
      border: 1px solid #282c3f;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;

      border: 1px solid rgba(173, 173, 173, 0.7);
      box-sizing: border-box;
    }

    .searchBar input[type='text'] {
      width: 90.5%;
      padding-left: 1.5%;
      font-size: 12px;
      border: 0;
      font-size: 14px;
      line-height: 30px;
      text-align: left; /*color: #ADADAD;*/
    }
    .searchBar input::-webkit-input-placeholder {
      color: #adadad;
    }
    .searchBar input::-moz-placeholder {
      color: #adadad;
    }
    .searchBar input:-ms-input-placeholder {
      color: #adadad;
    }
    .searchBar input:-moz-placeholder {
      color: #adadad;
    }

    .searchBar input[type='button'],
    .searchBar button {
      background: none;
      border: 0;
    }
    .searchBar input[type='button']:focus,
    .searchBar button:focus {
      outline: none;
    }
    .searchBar input[type='button'] img,
    .searchBar button img {
      width: 18px;
      height: 18px;
    }

    .header-cover .rightIcons .nav-content-list .nav-content-item {
      align-items: center;
      display: flex;
      height: 28px;
      margin: 0 10px;
      position: relative;
      transition: 100ms all linear 0s;
    }
    .header-cover
      .rightIcons
      .nav-content-list
      .nav-content-item
      .open-menu-login-account {
      align-items: center;
      cursor: pointer;
      display: flex;
      position: relative;
    }
    .header-cover .rightIcons .nav-content-list .nav-content-item .input-menu {
      display: none;
    }
    .header-cover
      .rightIcons
      .nav-content-list
      .nav-content-item
      .input-menu:checked
      ~ .login-list {
      display: block;
    }
    .header-cover .rightIcons .nav-content-list .nav-content-item .login-list {
      background: #fff;
      border-bottom: 3px solid #0066b1;
      border-radius: 3px;
      display: none;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 28px;
      transition: 100ms all linear 0s;
      width: 200px;
      z-index: 10;
    }

    @media (max-width: 1280px) {
      .searchIcon {
        width: 66%;
      }
    }
    @media (max-width: 1200px) {
      .searchIcon {
        width: 64%;
      }
    }
    @media (max-width: 1140px) {
      .searchIcon {
        width: 62%;
      }
    }
    @media (max-width: 1080px) {
      .headerRight {
        width: 68%;
      }
      .searchIcon {
        width: 57.6%;
      }
    }
    @media (max-width: 1025px) {
      .headerRight {
        width: 68%;
      }
      .searchIcon {
        width: 55%;
      }
      .searchBar input[type='text'] {
        width: 90%;
      }
    }
  `}</style>
)
