import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./App.css";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
