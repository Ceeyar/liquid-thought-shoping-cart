import Home from "../components/home/Home";
import Products from "../components/Products";
import ProductPreview from "../components/children/product-modal/ProductPreview";
import noMatch from "../components/children/error-page/ErrorPage";
import Cart from "../components/cart/Cart";

const Routes = [
    {
      title: "Home",
      path: "/",
      component: Home,
      exact: true
    },
    {
      title: "Products List",
      path: "/products",
      component: Products,
      exact: true
    },
    {
      title: "Product Details",
      path: "/product",
      component: ProductPreview,
      exact: true
    },
    {
      title: "Bag",
      path: "/cart",
      component: Cart,
      exact: true
    },
    {
      title: "Ooopsie 404",
      path: "*",
      component: noMatch,
      exact: false
    }
  ]
  
  export default Routes
  