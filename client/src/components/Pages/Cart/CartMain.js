import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  ButtonRegular,
  ContainerSmall,
  Image,
} from '../../../utilityStyles';
import { CartContainer, ChangeQty, EmptyCart } from './cartStyles';
import { addToCart, removeFromCart } from '../../../redux/cart/cartActions';
import useNotify from '../../hooks/useNotify';
const CartMain = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  const [notify] = useNotify();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    notify('Product Removed from Cart', 2500);
  };

  const checkOutHandler = () => {
    history.push('/login?redirect=/shipping');
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <CartContainer>
          <ContainerSmall className='cart-page'>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.product}>
                    <td>
                      <div className='cart-info'>
                        <Image src={product.image} />
                        <div>
                          <p>{product.name}</p>
                          <small>{product.price}</small> <br />
                          <Button
                            to='/cart'
                            className='remove'
                            onClick={() =>
                              removeFromCartHandler(product.product)
                            }>
                            Remove
                          </Button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <ChangeQty
                        className='fas fa-plus'
                        value={product.qty}
                        onClick={(e) =>
                          dispatch(
                            addToCart(product.product, Number(++product.qty))
                          )
                        }></ChangeQty>
                      <input
                        id='browser'
                        type='number'
                        value={product.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(product.product, Number(e.target.value))
                          )
                        }
                        max={product.countInStock}
                      />
                      <ChangeQty
                        className='fas fa-minus'
                        onClick={(e) =>
                          dispatch(
                            addToCart(product.product, Number(--product.qty))
                          )
                        }></ChangeQty>
                    </td>
                    <td>{(product.price * product.qty).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className='total-price'>
              <table>
                <tbody>
                  <tr>
                    <td>Total products</td>
                    <td>
                      {cartItems.reduce((acc, product) => acc + product.qty, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>$5.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      $
                      {cartItems
                        .reduce(
                          (acc, product) => acc + product.price * product.qty,
                          0
                        )
                        .toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ButtonRegular
                        dark='dark'
                        className='buy'
                        onClick={checkOutHandler}>
                        Buy Now
                      </ButtonRegular>
                      <Button light='light' className='back' to={`/products`}>
                        Shop
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ContainerSmall>
        </CartContainer>
      ) : (
        <EmptyCart className='empty-cart'>
          <h1>Empty Cart</h1>
        </EmptyCart>
      )}
    </>
  );
};

export default CartMain;
