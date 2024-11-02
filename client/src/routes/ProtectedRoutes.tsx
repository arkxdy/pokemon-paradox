import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const user = true;
  
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;