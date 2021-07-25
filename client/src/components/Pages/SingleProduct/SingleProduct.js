import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProductDetails } from '../../../redux/products/productsActions';
import ErrorPage from '../../Utilities/ErrorPage';
import Loader from '../../Utilities/Loader';
import { SingleProductContainer } from './singleProductStyles';
import { RowNormal, ContainerNormal, Button } from '../../../utilityStyles';
import ProductImages from './ProductImages/ProductImages';
import ProductInfo from './ProductInfo/ProductInfo';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { BounceLoader } from 'react-spinners';
import Reviews from './Reviews/Reviews';
import CreateReview from './Reviews/CreateReview';
const SingleProduct = ({ match, history }) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading: loadingProducts, products: relatedProducts } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <SingleProductContainer>
            <ContainerNormal className='single-product'>
              <RowNormal className='row'>
                <ProductImages product={product} />
                <ProductInfo
                  product={product}
                  history={history}
                  match={match}
                />
              </RowNormal>
            </ContainerNormal>

            {product.reviews.length > 0 && (
              <ContainerNormal>
                <h2>Reviews</h2>
                <RowNormal className='row row-2'>
                  <Reviews product={product} />
                </RowNormal>
              </ContainerNormal>
            )}

            {userInfo ? (
              <ContainerNormal>
                <h2>Write a Customer Review</h2>
                <CreateReview
                  productReviewCreate={productReviewCreate}
                  match={match}
                />
              </ContainerNormal>
            ) : (
              <ContainerNormal>
                <RowNormal className='row row-2'>
                  <h2>Write a Customer Review</h2>
                  <Button dark='dark' to='/login'>
                    Please Login
                  </Button>
                </RowNormal>
              </ContainerNormal>
            )}

            <ContainerNormal>
              <h2>Related Products</h2>
              <RowNormal className='row row-2'></RowNormal>
            </ContainerNormal>

            {loadingProducts ? (
              <BounceLoader />
            ) : (
              <ContainerNormal>
                <RowNormal className='row row-2'>
                  <RelatedProducts
                    relatedProducts={relatedProducts}
                    compare={product}
                    id={match.params.id}
                  />
                </RowNormal>
              </ContainerNormal>
            )}
          </SingleProductContainer>
        </>
      )}
    </>
  );
};

export default SingleProduct;
