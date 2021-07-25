import { useSelector } from 'react-redux';

const useUserDelete = () => {
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;
  return [successDelete];
};

export default useUserDelete;
