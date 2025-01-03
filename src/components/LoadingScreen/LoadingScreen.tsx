import { MutatingDots } from 'react-loader-spinner';
import './styles.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <MutatingDots
        visible
        height="100"
        width="100"
        color="#4481c3"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default LoadingScreen;
