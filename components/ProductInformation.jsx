import { currencyFormatter } from 'utils/currencyFormatter'
import { getDiscountPercentage } from 'utils/getDiscountPercentage'

const ProductInformation = () => {
  const product = {
    title: 'EDIFICE EFR-569BL-2AVUDF-ED491',
    subtitle: "Retrogarade Chronograph-Men's-Watch",
    salePrice: 8936,
    price: 11995,
    rating: 4,
    reviews: 330
  }

  return (
    <div class="prodDetInfo">
      {styles}
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <img src="images/details/gallery.jpg" alt="product" />
          </div>
          <div class="col-lg-7">
            <h1 class="position-relative">
              {product.title}
              <a href="" class="shareIconDsk">
                <img src="images/share-icon.svg" alt="share" />
              </a>
            </h1>
            <div class="prodDetTitleAotr pr-0">
              <span class="prodDetGender">{product.subtitle}</span>
              <span class="prodDetPrice">
                <span class="prodDetSalePrice">
                  <i class="fas fa-rupee-sign"></i>
                  {currencyFormatter(product.salePrice || product.price)}
                </span>
                &nbsp;
                {product.salePrice > 0 && (
                  <>
                    <span class="prodDetOldPrice">
                      <i class="fas fa-rupee-sign"></i>
                      {currencyFormatter(product.price)}
                    </span>
                    &nbsp;
                    <span class="prodDetPercentagePrice">{`(${getDiscountPercentage(
                      product.price,
                      product.salePrice
                    )}% off)`}</span>
                  </>
                )}
              </span>
              <div class="ratingStarDsk">
                <img src="images/rating.jpg" alt="rating" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInformation

const styles = (
  <style jsx>{`
    .prodDetInfo > .container {
      max-width: 1272px;
    }
    .prodDetInfo h1 {
      font-size: 24px;
      font-weight: bold;
      font-family: 'source_sans_problack';
      line-height: 30px;
      color: #282c3f;
      margin: 0;
      padding: 0 0 6px 0;
    }
    .prodDetInfo .shareIconDsk {
      position: absolute;
      right: 39px;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
    .prodDetTitleAotr {
      position: relative;
    }
    .prodDetGender {
      font-size: 20px;
      line-height: 25px;
      padding-bottom: 13px;
      display: block;
      color: #282c3f;
      opacity: 0.7;
    }
    .prodDetPrice {
      display: block;
      font-weight: bold;
      font-size: 24px;
      font-family: 'source_sans_problack';
      line-height: 20px;
      color: #282c3f;
      padding-top: 2px;
      padding-bottom: 5px;
    }
    .prodDetSalePrice {
      font-weight: bold;
      font-size: 24px;
      line-height: 20px;
      color: #282c3f;
      display: inline-block;
    }
    .prodDetSalePrice i {
      font-size: 17px;
      margin-right: 2px;
    }
    .prodDetOldPrice {
      font-size: 20px;
      font-family: 'source_sans_prolight';
      line-height: 20px;
      text-decoration-line: line-through;
      color: #282c3f;
      opacity: 0.7;
      padding-left: 6px;
    }
    .prodDetOldPrice i {
      font-size: 16px;
      font-weight: normal;
      color: #282c3f;
    }
    .prodDetPercentagePrice {
      font-weight: bold;
      font-size: 20px;
      font-family: 'source_sans_problack';
      line-height: 20px;
      color: #ff0000;
      padding-left: 6px;
    }
    .ratingStarDsk {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  `}</style>
)
