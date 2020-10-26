import Home from "../components/home/Home";
import Products from "../components/Products";
import Product from "../components/children/product/Product";
import noMatch from "../components/children/error-page/ErrorPage";

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
      component: Product,
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
  