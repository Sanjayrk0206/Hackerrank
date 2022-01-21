import Body from './components/body';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (<div>
      <div className="container">
        <Navigation />
      </div>
      <div className="background">
        <div className="container">
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
