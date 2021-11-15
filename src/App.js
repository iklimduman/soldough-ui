import logo from './logo.svg';
import './App.css';

import Banner from './Banner/Banner';
import About from './About/About';
import Divider from "./Divider/Divider";
import Part from "./Part/Part";
import Timeline from "./Timeline/Timeline";
import Footer from './Footer/Footer';
import Faq from './Faq/Faq';
import Question from './Question/Question';
import Market from './Market/Market';
import End from './End/End';
import Dividerbrown from './Dividerbrown/Divider';
import Dividergolden from './Dividergolden/Divider';
import Divideryellow from './Divideryellow/Divider';
import Tier from './Tier/Tier';
import Dividerblack from './Dividerblack/Dividerblack';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Divider />
      <Part />
      <Dividerbrown />
      <Market />
      <Dividerblack />
      <Tier />
      <Divideryellow />
      <Timeline />
      <Dividergolden />
      <Faq />
      <Question />
      <Footer />
      <End />
    </div>
  );
}

export default App;
