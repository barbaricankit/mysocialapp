import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import { fetchNotificatons } from "./notificationSlice";
import NotificationHeader from "./NotificationHeader";
import NotificationDetails from "./NotificationDetails";

const Notifications = () => {
  const { status, notifications } = useSelector((state) => state.notification);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNotificatons(token));
    }
  });
  console.log({ notifications });
  return (
    <>
      <Loader status={status} />
      <Error status={status} />
      <NotificationHeader />
      <NotificationDetails />
    </>
  );
};

export default Notifications;
