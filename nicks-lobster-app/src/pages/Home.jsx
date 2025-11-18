import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="Front" className="home-section">
        <div className="hero">
          <h1>Welcome to Nick's Lobster</h1>
          <p>Fresh seafood, cooked to perfection.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}