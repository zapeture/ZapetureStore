import { useSelector } from 'react-redux';
const useUserList = () => {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  return [loading, error, users];
};

export default useUserList;
