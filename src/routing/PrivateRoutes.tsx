import { Navigate } from "react-router-dom";

const checkToken = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).access : null;
};

interface PrivateRoutesProps {
  children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  return checkToken() ? children : <Navigate to="/" replace />;
};