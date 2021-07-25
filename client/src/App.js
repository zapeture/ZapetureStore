import Navigation from './components/Layout/Navigations/Navigation';
import { Switch, Route } from 'react-router-dom';
import HomeMain from './components/Pages/Home/HomeMain';
import GlobalStyle from './globalStyles';
import AuthLogin from './components/Pages/Auth/AuthLogin';
import UserList from './components/Pages/Admin/UserList';
import UserEdit from './components/Pages/Admin/UserEdit';
import ProductList from './components/Pages/Admin/ProductList';
import ProductEdit from './components/Pages/Admin/ProductEdit';
import OrderList from './components/Pages/Admin/OrderList';
import ProfileMain from './components/Pages/Profile/ProfileMain';
import FooterMain from './components/Layout/Footer/FooterMain';
import ProductsMain from './components/Pages/Products/ProductsMain';
import SingleProduct from './components/Pages/SingleProduct/SingleProduct';
import ScrollToTop from './components/scrollTop';
import CartMain from './components/Pages/Cart/CartMain';
import Shipping from './components/Pages/Shipping/Shipping';
import Payment from './components/Pages/Payment/Payment';
import PlaceOrderMain from './components/Pages/PlaceOrder/PlaceOrderMain';
import Order from './components/Pages/Order/Order';
import AuthSignIn from './components/Pages/Auth/AuthSignIn';

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomeMain} />
        <Route path='/search/:keyword' component={ProductsMain} exact />
        <Route exact path='/products' component={ProductsMain} />
        <Route path='/products/:id' component={SingleProduct} />
        <Route path='/cart/:id?' component={CartMain} />
        <Route path='/shipping' component={Shipping} />
        <Route path='/payment' component={Payment} />
        <Route path='/placeorder' component={PlaceOrderMain} />
        <Route path='/order/:id' component={Order} />
        <Route exact path='/register' component={AuthSignIn} />
        <Route path='/profile' component={ProfileMain} />
        <Route path='/admin/userlist' component={UserList} />
        <Route path='/admin/orderlist' component={OrderList} />
        <Route path='/admin/user/:id/edit' component={UserEdit} />
        <Route path='/admin/productlist' component={ProductList} />
        <Route path='/admin/product/:id/edit' component={ProductEdit} />
        <Route exact path='/login' component={AuthLogin} />
        {/* adminUser@gmail.com */}
      </Switch>
      <FooterMain />
    </>
  );
}

export default App;
