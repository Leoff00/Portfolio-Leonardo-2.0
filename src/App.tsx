import { Header } from "./components/Header";
import { Card } from "./components/Card";
import GlobalStyle from "./globalStyles";
import { PhraseText } from "./components/PhraseText";
import { Underline } from "./components/Underline";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { Curriculum } from "./components/Curriculum";
import { MediaContextProvider } from "./contexts/MediaContext";

function App() {
  return (
    <>
      <MediaContextProvider>
        <GlobalStyle />
        <Header />
        <PhraseText />

        <Underline />

        <Card />

        <Underline />

        <Portfolio />

        <Underline />

        <Curriculum />

        <Underline />

        <Footer />
      </MediaContextProvider>
    </>
  );
}

export default App;
