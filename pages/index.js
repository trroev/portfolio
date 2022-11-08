import { About } from "../components/About";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}
