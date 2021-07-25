import { useSelector } from 'react-redux';
const useUpdateProfile = () => {
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  return [success];
};

export default useUpdateProfile;
