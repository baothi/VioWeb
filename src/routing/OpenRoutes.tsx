import { Navigate } from "react-router-dom";

const checkToken = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).access : null;
};

interface OpenRoutesProps {
  children: JSX.Element;
}

export const OpenRoutes = ({ children }: OpenRoutesProps) => {
  return !checkToken() ? children : <Navigate to="/admin" replace />;
};