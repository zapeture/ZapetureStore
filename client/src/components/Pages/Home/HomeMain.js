import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerNormal } from '../../../utilityStyles';
import { listProducts } from '../../../redux/products/productsActions';
import Loader from '../../Utilities/Loader';
import ErrorPage from '../../Utilities/ErrorPage';
import HeroSection from './Hero/HeroSection';
import Showcase from './Showcase/Showcase';
import Featured from './Featured/Featured';
import Latest from './Latest/Latest';
import Offer from './Offer/Offer';
import Partners from './Partners/Partners';
import Meta from '../../Utilities/Meta';

const HomeMain = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const partnersList = useSelector((state) => state.partnersList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <ContainerNormal>
            <HeroSection products={products} />
            <Showcase products={products} />
            <Featured products={products} />
            <Latest products={products} />
            <Offer products={products} />
            <Partners partnersList={partnersList} />
          </ContainerNormal>
        </>
      )}
    </>
  );
};

export default HomeMain;
