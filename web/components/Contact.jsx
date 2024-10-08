import Footer from "./Footer";
import Header from "./Header";

function Contact() {
    return (
        <div className="contact">
            <Header />
            <article className="contact__container">
                <h1 className="contact__container--title">contact</h1>
                <p className="contact__container--message">Hola! pronto podrás ponerte en contacto conmigo, si necesitas información puedes escribirme por instagram en el siguiente enlace:</p>
                <a className="contact__container--link" href="https://www.instagram.com/sargartist/">@sargartist</a>
            </article>
            <Footer />
        </div>
    );
}

export default Contact;
