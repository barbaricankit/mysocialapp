import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { verifyToken } from "../auth/authSlice";

const PrivateRoute = ({ path, ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, status } = useSelector((state) => state.auth);
  useEffect(() => {
    const data = JSON.parse(localStorage?.getItem("token"));

    if (data?.token && status === "idle") {
      dispatch(verifyToken(data.token));
    } else if (!data) {
      navigate("/login");
    }
  }, [token, dispatch, navigate, status]);
  useEffect(() => {
    if (status === "error") {
      navigate("/login");
    }
  }, [status, navigate]);

  return token && <Route {...props} path={path} />;
};

export default PrivateRoute;
