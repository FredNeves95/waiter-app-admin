import { useEffect } from 'react';
import { SplashScreen } from './pages/SplashScreen';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, []);

  return(
    <SplashScreen/>
  );
}

export default App;
