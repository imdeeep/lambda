import { useEffect, useState } from "react";
import Auth from "@/shared/Auth";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../slices/authSlice';
import LoadingScreen from "./LoadingScreen";
const AuthWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      axios.get(`http://localhost:5000/user/me?token=${token}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        dispatch(loginSuccess(res.data));
        setLoading(false);
      })
      .catch(() => {
        dispatch(logout());
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) {
    return <div><LoadingScreen/></div>;  
  }

  if (!user) {
    // return <Auth />;
    return <>{children}</>  // remove this is production
  }

  return <>{children}</>;
};

export default AuthWrapper;
