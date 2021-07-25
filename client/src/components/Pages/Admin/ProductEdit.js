import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  listProductDetails,
  updateProduct,
} from '../../../redux/products/productsActions';
import { PRODUCT_UPDATE_RESET } from '../../../redux/products/productsTypes';
import { ButtonRegular, FormContainer } from '../../../utilityStyles';
import ErrorPage from '../../Utilities/ErrorPage';
import Loader from '../../Utilities/Loader';
import useNotify from '../../hooks/useNotify';
const ProductEdit = ({ history, match }) => {
  const productId = match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [display_in, setDisplay_in] = useState('');
  const [isHero, setIsHero] = useState(false);
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const [notify] = useNotify();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/admin/productlist');
      if (
        product.name !== name ||
        product.price !== price ||
        product.image !== image ||
        product.brand !== brand ||
        product.countInStock !== countInStock ||
        product.display_in !== display_in ||
        product.isHero !== isHero ||
        product.description !== description
      ) {
        notify('Product update Successful', 3000);
      }
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setDisplay_in(product.display_in);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
        setIsHero(product.isHero);
      }
    }
    // eslint-disable-next-line
  }, [product, history, product, productId, dispatch, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        isHero,
        display_in,
        description,
        countInStock,
      })
    );
  };

  return (
    <>
      {loadingUpdate && <Loader />}
      {errorUpdate && <ErrorPage error={errorUpdate} />}

      {loadingUpdate && <Loader small />}
      {errorUpdate && <ErrorPage error={errorUpdate} />}
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <FormContainer>
          <div className='container'>
            <header>
              <h1 id='title'>Edit product</h1>
            </header>
            <form id='survey-form' onSubmit={submitHandler}>
              <div className='form-input'>
                <label id='name-label'>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='form-input-size'
                />
              </div>
              <div className='form-input'>
                <label id='price-label'>Price</label>
                <input
                  name='price'
                  type='number'
                  placeholder='Price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='form-input'>
                <label id='image-label'>Image</label>
                <input
                  name='image'
                  type='text'
                  placeholder='Set image url'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                {uploading && <Loader />}
                <input
                  type='file'
                  id='image-file'
                  label='Choose File'
                  name='filename'
                  onChange={uploadFileHandler}
                />
              </div>
              <div className='form-input'>
                <label id='brand-label'>Brand</label>
                <input
                  name='brand'
                  type='text'
                  placeholder='Brand'
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className='form-input'>
                <label id='stock-count'>Count in stock</label>
                <input
                  name='stock-count'
                  type='number'
                  placeholder='Count in Stock'
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </div>
              <div className='form-input'>
                <label id='display-in'>Display in</label>
                <input
                  name='display-in'
                  type='text'
                  placeholder='Display In'
                  value={display_in}
                  onChange={(e) => setDisplay_in(e.target.value)}
                />
              </div>
              <div className='form-input'>
                <label id='category'>Category</label>
                <input
                  name='category'
                  type='text'
                  placeholder='Category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className='form-input'>
                <label id='description'>Description</label>
                <input
                  name='description'
                  type='text'
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='form-input'>
                <label>
                  <input
                    name='is-hero'
                    type='checkbox'
                    checked={isHero}
                    id='check-box'
                    onChange={(e) => setIsHero(e.target.checked)}
                  />
                  Is Hero
                </label>
              </div>
              <br />

              <ButtonRegular light='light' type='submit' id='submit'>
                Update
              </ButtonRegular>
            </form>
          </div>
        </FormContainer>
      )}
    </>
  );
};

export default ProductEdit;
