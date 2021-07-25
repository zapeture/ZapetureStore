import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteProduct,
  listProducts,
  createProduct,
} from '../../../redux/products/productsActions';
import { PRODUCT_CREATE_RESET } from '../../../redux/products/productsTypes';
// import useNotify from '../../hooks/useNotify';
import {
  ButtonRegular,
  RowNormal,
  TableContainer,
} from '../../../utilityStyles';
import ErrorPage from '../../Utilities/ErrorPage';
import Loader from '../../Utilities/Loader';

const ProductList = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  // const [notify] = useNotify();
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
    // eslint-disable-next-line
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createProduct,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      {loadingDelete && <Loader />}
      {errorDelete && <ErrorPage error={errorDelete} />}
      {loadingCreate && <Loader />}
      {errorCreate && <ErrorPage error={errorCreate} />}

      {loading === true ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        loading === false &&
        error === '' && (
          <TableContainer>
            <div className='table-wrapper'>
              <table className='fl-table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>DISPLAY AS</th>
                    <th>STOCK</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {Array.isArray(products) === true &&
                      products.map((product) => (
                        <tr key={product._id}>
                          <td>{product._id}</td>
                          <td>{product.name}</td>
                          <td>${product.price}</td>
                          <td>{product.category}</td>
                          <td>{product.brand}</td>
                          <td>{product.display_in}</td>
                          <td>{product.countInStock}</td>
                          <td>
                            {/* edit */}
                            <Link
                              className='table-icons'
                              style={{ margin: '0px 10px' }}
                              to={`/admin/product/${product._id}/edit`}>
                              <i className='fas fa-edit'></i>
                            </Link>
                          </td>
                          <td>
                            {/* delete */}
                            <Link
                              to={'#'}
                              className='table-icons'
                              style={{ margin: '0px 10px', display: 'block' }}
                              onClick={() => deleteHandler(product._id)}>
                              <i className='fas fa-trash'></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </>
                </tbody>
              </table>
            </div>
          </TableContainer>
        )
      )}

      <RowNormal>
        <ButtonRegular onClick={createProductHandler}>
          Create Product +
        </ButtonRegular>
      </RowNormal>
    </>
  );
};

export default ProductList;
