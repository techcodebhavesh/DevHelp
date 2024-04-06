import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
    
      return isLoggedIn ? children : null;
    };
    
  
  export default ProtectedRoute;