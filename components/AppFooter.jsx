import IconsList from './IconsList'
import List from './List'
import { footerListData, footerIconsList } from './COPY'

const AppFooter = () => {
  return (
    <div className="footer">
      {styles}
      <div className="container">
        <footer className="footer-bs">
          <div className="row">
            {footerListData?.map(({ title, options, id }, footerId) => (
              <div
                className="col-md-2 footer-nav footer-list"
                key={title || `footer-${footerId}`}
              >
                <List title={title} options={options} />
              </div>
            ))}

            <div className="col-md-4 footer-brand">
              <h4>Subscribe to our newsletter</h4>
              <div className="input-group newslettterCover">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-default subcribeBtn"
                    type="button"
                  ></button>
                </span>
              </div>
              <p className="subsText">
                By subscribing to our newsletter you agree to our privacy
                policy. (restrictions and exclusions apply)
              </p>
              <IconsList
                options={footerIconsList}
                listClassName="footer-social-links"
              />
            </div>
          </div>
        </footer>
        <section className="copyCover">
          <img src="images/pay-logo.png" alt="" />
          <p>© Copyright 2021, CasioIndiaShop | All Rights Reserved.</p>
        </section>
      </div>
    </div>
  )
}
export default AppFooter

const styles = (
  <style jsx>
    {`
      .footer {
        background: #1f2230;
        margin: 50px 0 0 0;
        padding: 53px 0 0 0;
      }
      .footer-list h4 {
        font-family: 'source_sans_probold';
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        text-transform: uppercase;
        color: #ffffff;
      }
      .footer-list ul {
        padding: 0;
        list-style: none;
      }
      .footer-list ul > li > a {
        font-family: 'source_sans_proregular';
        font-size: 12px;
        line-height: 224.2%;
        color: #ffffff;
      }

      .footer p {
        font-family: 'source_sans_proregular';
        font-size: 12px;
        line-height: 19.28px;
        color: #ffffff;
      }
      .newslettterCover {
        border: 1px solid #484a55;
        box-sizing: border-box;
        border-radius: 100px;
      }
      .newslettterCover input[type='text'] {
        background: none;
        border: 0;
        height: 32px;
      }
      .subsText {
        margin: 18px 0 25px 0;
      }
      .subcribeBtn {
        background: url(images/subscribe-arrow.svg) no-repeat 3px center;
        padding: 0 15px 0 5px !important;
        width: 43px;
        height: 100%;
      }

      .footer-social-links {
        display: flex;
      }
      .footer-social-links li {
        margin-right: 28px !important;
      }
      .footer-social-links li:last-child {
        margin-right: 0 !important;
      }
      .footer-social-links i {
        width: 30px;
      }
      .footer-brand h4 {
        color: #ffffff;
      }

      .copyCover {
        border-top: 1px solid #54575f;
        padding: 22px 0 24px 0;
        margin-top: 55px;
      }
      .copyCover p {
        padding-top: 28px;
      }
    `}
  </style>
)
