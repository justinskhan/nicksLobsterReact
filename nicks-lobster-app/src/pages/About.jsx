import "../styles/about.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="content-section">
        <h2 className="page-title">About Us</h2>
        <p>
          Nick’s Lobster has been serving fresh, delicious seafood to our community
          for years. We’re all about quality ingredients and a welcoming atmosphere.
        </p>
      </section>
      <Footer />
    </>
  );
}