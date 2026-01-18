
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check for auth token and validate it
  const authToken = localStorage.getItem("authToken");
  const userEmail = localStorage.getItem("userEmail");
  
  // Validate that both token and email exist (basic validation)
  const isAuthenticated = Boolean(authToken && userEmail && authToken.trim() !== '');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
