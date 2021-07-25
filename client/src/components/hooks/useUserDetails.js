import { useSelector } from 'react-redux';
const useUserDetails = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  return [loading, error, user];
};

export default useUserDetails;
