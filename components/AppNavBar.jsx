import { navigationList } from './COPY'
import List from './List'

const AppNavBar = () => (
  <div className="menuDsk">
    {styles}
    <nav>
      <List options={navigationList} />
    </nav>
  </div>
)

export default AppNavBar

const styles = (
  <style jsx>
    {`
      .clear {
        clear: both;
      }
      .menuDsk {
        clear: both;
        background: #282c3f;
        height: 64px;
        line-height: 64px;
        text-align: center;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
      }
      .menuDsk ul {
        display: inline-block;
        margin: 0;
        padding: 0;
      }
      .menuDsk ul li {
        display: inline-block;
      }
      .menuDsk ul li a {
        font-size: 15px;
        color: #fff;
        padding: 0 15px;
        text-transform: uppercase;
      }
      .menuDsk > ul li a.hover,
      .menuDsk ul li a.active {
      }
      .menuDsk ul li a:hover + .megaMenuDiv {
        display: block;
      }

      .menuDsk > ul li a:before,
      .menuDsk ul li a.active:before {
        border-bottom: 0;
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        background: #fff;
        z-index: 99;
        left: 0;
      }

      @media (max-width: 1328px) {
        .menuDsk ul li a {
          padding: 0 13px;
        }
      }
      @media (max-width: 1299px) {
        .menuDsk ul li a {
          padding: 0 12px;
        }
      }
      @media (max-width: 1274px) {
        .menuDsk ul li a {
          padding: 0 10px;
        }
      }
      @media (max-width: 1250px) {
        .menuDsk ul li a {
          font-size: 15px;
          padding: 0 11px;
        }
      }
      @media (max-width: 1194px) {
        .menuDsk ul li a {
          padding: 0 9px;
        }
      }
      @media (max-width: 1160px) {
        .menuDsk ul li a {
          font-size: 14px;
          padding: 0 10px;
        }
      }
      @media (max-width: 1120px) {
        .menuDsk ul li a {
          padding: 0 6px;
        }
      }
      @media (max-width: 1045px) {
        .menuDsk ul li a {
          padding: 0 3px;
        }
      `}
  </style>
)
