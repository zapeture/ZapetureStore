import { useState } from 'react';

const useToggle = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return [sidebar, showSidebar];
};

export default useToggle;
