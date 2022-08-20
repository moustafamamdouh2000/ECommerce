import './home.css';
import { useSelector } from 'react-redux';
function Home() {
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div style={{ textAlign: 'center', fontSize: '2rem', paddingTop: '2rem' }}>
      Home
      <p>
        Support Us <br />
        {counter} $ donated so far !
      </p>
    </div>
  );
}

export default Home;
