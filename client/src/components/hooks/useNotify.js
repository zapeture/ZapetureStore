import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const useNotify = () => {
  const notify = (message, shouldClose) => {
    toast(
      ({ closeToast }) => {
        return (
          <>
            {message && <p>{message}</p>}
            {!shouldClose && <button onClick={closeToast}>Yes</button>}
          </>
        );
      },
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: shouldClose ? shouldClose : false,
        className: 'info-toast',
        pauseOnHover: false,
        progressClassName: 'h-full opacity-100 bg-green-200 z-auto',
        transition: Slide,
        hideProgressBar: true,
      }
    );
  };
  return [notify, toast];
};

export default useNotify;
