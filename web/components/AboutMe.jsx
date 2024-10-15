import profile from "../images/profile.jpg";

function AboutMe() {
    return (
        <section className="aboutme">
            <article className="aboutme__text">
            <h1 className="aboutme__text--title">Sandra Roldán Gómez</h1>
            <p className="aboutme__text--p">
                Hola! Soy Sandra, ilustradora apasionada por capturar la esencia y personalidad de las mascotas a través de mi trabajo. Desde siempre he sentido una conexión muy especial por los animales y también por el arte así que decidí unir mis dos pasiones y lanzarme a realizar ilustraciones personalizadas de mascotas.
            </p>
            <p className="aboutme__text--p">
                Para mí cada ilustración es como conocer a una nueva mascota por primera vez. La ilusión por la que cada persona viene a mí para poder crear ese recuerdo tan especial me hace sentirme como parte de la familia. ¡Y no hay nada que me emocione más que ver la felicidad en los rostros de quienes ven a sus peluditos plasmados en mis ilustraciones! 
            </p>
            </article>
            <img
                className="aboutme__image"
                src={profile}
                alt="photo of @sargartist"
            />
        </section>
    );
}

export default AboutMe;
