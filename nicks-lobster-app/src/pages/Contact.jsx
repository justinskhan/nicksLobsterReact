import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="content-section">
        <h2 className="page-title">Contact</h2>
        <p>Email: support@nickslobster.com</p>
        <p>Phone: (555) 123-4567</p>
      </section>
      <Footer />
    </>
  );
}