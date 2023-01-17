import Header from "./components/Header";
import Features from "./components/Features";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Header/>
      <div className="f-heading">
        <h1>Features</h1>
        <p>Here are some features of the software</p>
      </div>
      <Features/>
      <Services/> 
      <Subscribe/>
    </>
  );
}

export default App;
