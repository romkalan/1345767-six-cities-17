import MainPage from '../../pages/Main/Main.tsx';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps) {
  return <MainPage offersCount={offersCount} />;
}

export default App;
