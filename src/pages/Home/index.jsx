import './Home.scss';
import LogementsList from '../../components/LogementList/logementsList';

function Home() {
  return (
    <div className='body'>
      <main>
        <LogementsList />
      </main>
    </div>
  );
}

export default Home;