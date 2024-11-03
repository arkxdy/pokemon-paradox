import { useAppSelector } from "@app/store/store";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }: { children: JSX.Element }) => {
    const role: string | undefined = useAppSelector((state) => state.auth.user?.role);
    //const role = 'admin'
    if (role == undefined || role !== 'admin') {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  
  export default AdminRoutes;