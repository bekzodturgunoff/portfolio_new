import "./App.scss";
import { About, Footer, Header, Project, Skill } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
