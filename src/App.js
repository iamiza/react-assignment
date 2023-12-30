import Header from './Header';
import Sidenav from './Sidenav';
import Maincontent from './MainContent';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header title="Header"/>
      <Sidenav title="Side Nav"/> 
      <Maincontent title="Main Content"/>
      <Footer title="Footer"/>
    </div>
  );
}

export default App;
