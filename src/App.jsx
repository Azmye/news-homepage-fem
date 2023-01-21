import Home from './components/Home/Index';
import NavBar from './components/navbar/NavBar';

const App = () => {
  return (
    <div className="App lg:px-80">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
