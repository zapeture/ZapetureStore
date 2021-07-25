import React, { useEffect } from 'react';
import { TableContainer } from '../../../utilityStyles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useUserList from '../../hooks/useUserList';
import useUserDelete from '../../hooks/useUserDelete';
import { deleteUser, listUsers } from '../../../redux/user/userActions';
import Loader from '../../../components/Utilities/Loader';
import ErrorPage from '../../../components/Utilities/ErrorPage';
import { Link } from 'react-router-dom';
const UserList = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [loading, error, users] = useUserList();
  const [successDelete] = useUserDelete();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <TableContainer>
          <div className='table-wrapper'>
            <table className='fl-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ADMIN</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </td>
                    <td>
                      {user.isAdmin ? (
                        <i
                          className='fas fa-check'
                          style={{ color: 'green' }}
                        />
                      ) : (
                        <i className='fas fa-times' style={{ color: 'red' }} />
                      )}
                    </td>
                    <td>
                      {/* edit */}
                      <Link
                        className='table-icons'
                        to={`/admin/user/${user._id}/edit`}>
                        <i className='fas fa-edit'></i>
                      </Link>
                    </td>
                    {/* delete */}
                    <td>
                      <Link
                        className='table-icons'
                        to='#'
                        onClick={() => deleteHandler(user._id)}>
                        <i className='fas fa-trash'></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TableContainer>
      )}
    </>
  );
};

export default UserList;
