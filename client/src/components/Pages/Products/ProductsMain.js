import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContainerNormal, RowNormal } from '../../../utilityStyles';
import ErrorPage from '../../Utilities/ErrorPage';
import Loader from '../../Utilities/Loader';
import Header from './AllProductsHeader/Header';
import { AllProductsContainer } from './productsStyles';
import AllProducts from './AllProducts/AllProducts';
import PageButtons from './PageButtons/PageButtons';
import Search from '../../Utilities/Search';
import { listProducts } from '../../../redux/products/productsActions';
import { Route, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const ProductsMain = ({ match }) => {
  const keyword = match.params.keyword;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <Search history={history} />
          <AllProductsContainer>
            <ContainerNormal>
              <RowNormal className='row-2'>
                <Header />
              </RowNormal>
              <RowNormal>
                <AllProducts products={products} />
              </RowNormal>
              <RowNormal>
                <PageButtons />
              </RowNormal>
            </ContainerNormal>
          </AllProductsContainer>
        </>
      )}
    </>
  );
};

export default ProductsMain;
