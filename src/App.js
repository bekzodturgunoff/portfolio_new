import "./App.scss";
import { About, Footer, Header, Project, Skill } from "./container";
import { Navbar, SocialMedia } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
