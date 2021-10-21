import './App.css';

import Banner from './Common/Banner/Banner';
import About from './Common/About/About';
import Part from './Common/Part/Part';

import Divider from './Common/Divider/Divider';
import Footer from './Common/Footer/Footer';
import FollowUs from './Common/FollowUs/FollowUs';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Divider />
      <Part />
      <Footer />
    </div>
  );
}

export default App;
