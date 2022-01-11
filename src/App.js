import './App.css';
import Awesome from './Components/Awesome';
import Banner from './Components/Banner';
import Explore from './Components/Explore';
import Ourcourses from './Components/Ourcourses';
import Philosophies from './Components/Philosophies';

function App() {
  return (
    <div className="App">
      {/* Welcome */}
      <Banner/>
      {/* courses */}
      <Ourcourses/>
      {/* Explore */}
      <Explore/>
      {/* Awesome */}
      <Awesome/>
      {/* Philosopies */}
      <Philosophies/>
      {/* Contact us */}
      {/* Footer */}
    </div>
  );
}

export default App;
