import "./Intro.css"
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <h1 className="hello">Hello,</h1>
                <span className="introText"> I am <span className="introName">Yasaman, </span>
                    a computer science student with a passion for web development.</span>
                <p className="introPara">
                    🎓 Studying computer science has fueled my curiosity for technology and problem-solving. I love exploring new concepts and applying them to create amazing digital experiences.
                    <br />
                    💻 As a frontend developer, I enjoy turning ideas into user-friendly interfaces.
                    <br />
                    🚀 I am eager to learn and grow in the world of technology. My portfolio showcases some of my projects and skills — I would love for you to check it out!</p>
            </div>
            <img src="/profile.JPG" alt="" className="bg" />
        </section>
    )
}

export default Intro
