import AppHeader from 'components/AppHeader'
import AppNavBar from 'components/AppNavBar'
import BreadCrumb from 'components/BreadCrumb'
import AppFooter from 'components/AppFooter'
import ProductInformation from 'components/ProductInformation'

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <AppNavBar />
      <BreadCrumb />
      <ProductInformation />
      <AppFooter />
    </>
  )
}
