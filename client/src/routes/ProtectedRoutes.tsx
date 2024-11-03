import { useAppSelector } from "@app/store/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const user = useAppSelector(state => state.auth.user);
  
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;