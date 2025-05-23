import MainPage from '../../pages/MainPage/MainPage';

interface Props {
  offersCount: number;
}

function App({ offersCount }: Props) {
  return <MainPage offersCount={offersCount} logged />;
}

export default App;
