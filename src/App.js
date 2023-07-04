import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Saving from './components/service'
import Tour from "./components/tour";
import Footer from "./components/footer";
import Traffic from "./components/traffic";
import UseStateArray from "./components/useStateArray";
import Toggle from "./customHooks/toogle";
import CodeFetch from "./customHooks/fetch";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Hero/>
      <About/>
      <Saving/>
      <Tour/>
      <Footer/> */}
      {/* <UseStateArray/> */}
      {/* <Toggle/> */}
      <CodeFetch/>
    </div>
  );
}

export default App;
