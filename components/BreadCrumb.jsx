const BreadCrumb = () => (
  <div class="breadcrumb breadcrb">
    {styles}
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            /
            <li>
              <a href="#">Watches</a>
            </li>
            /
            <li>
              <a href="#">Edifice</a>
            </li>
            / <li>EFR-569BL-2AVUDF-ED491</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default BreadCrumb

const styles = (
  <style jsx>{`
    .breadcrumb .container-fluid {
      padding-left: 0;
      padding-right: 0;
      max-width: 1408px;
      margin-left: auto;
      margin-right: auto;
    }
    .breadcrumb .row {
      margin-left: 0;
      margin-right: 0;
    }
    .breadcrumb .col-12 {
      padding-left: 0;
      padding-right: 0;
    }

    .breadcrumb.breadcrb {
      background: #fff;
      padding: 0.25rem 2.49% 0.25rem 3%;
      margin: 0 0 4px 0;
    }
    .breadcrumb.breadcrb ul {
      margin: 0;
      padding: 0;
    }
    .breadcrumb.breadcrb li {
      list-style: none;
      display: inline-block;
      color: #282c3f;
      font-size: 14px;
    }
    .breadcrumb.breadcrb li:before {
      color: #282c3f;
    }
    .breadcrumb.breadcrb li a {
      font-size: 14px;
      color: #282c3f;
    }
  `}</style>
)
