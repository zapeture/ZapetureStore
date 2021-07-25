import React from 'react';
import { Column2, ContainerNormal, RowNormal } from '../../../utilityStyles';
import { useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';
import ProfileOrders from './ProfileOrders';
import Loader from '../../Utilities/Loader';
import ErrorPage from '../../Utilities/ErrorPage';

const ProfileMain = ({ match, history }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading: loadingDetails, error: errorDetails } = userDetails;
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrder, error: errorOrder } = orderListMy;
  return (
    <>
      {loadingDetails && loadingOrder ? (
        <Loader />
      ) : errorDetails && errorOrder ? (
        <ErrorPage error={errorDetails || errorOrder} />
      ) : (
        <ContainerNormal>
          <RowNormal>
            <Column2>
              <ProfileDetails match={match} history={history} />
            </Column2>
            <Column2>
              <ProfileOrders match={match} history={history} />
            </Column2>
          </RowNormal>
        </ContainerNormal>
      )}
    </>
  );
};

export default ProfileMain;
