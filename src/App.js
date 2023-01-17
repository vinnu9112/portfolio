import Header from "./components/Header";
import Features from "./components/Features";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Header/>
      <div className="f-heading">
        <h1>About Me</h1>
        <p>Introduction</p>
      </div>
      <Features/>
      <Services/> 
      <Subscribe/>
    </>
  );
}

export default App;
