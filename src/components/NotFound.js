import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const pageRedirect = setTimeout(() => navigate('/'), 3000);

    return () => {
      clearTimeout(pageRedirect);
    };
  }, [navigate]);

  return <h1>Uh oh! This page doesn't exist. Redirecting in 3... 2... 1...</h1>;
}
