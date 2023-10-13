import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <h1>Error Page</h1>
      <p>Ud será redirigido al inicio en 5 seg...</p>
    </div>
  );
};

export default NotFound;
