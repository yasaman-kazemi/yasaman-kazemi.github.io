import './skills.css';
// , FaGithubSquare, FaCss3
import { FaJava, FaReact, FaCss3, FaChartBar, FaDatabase, FaCamera } from "react-icons/fa";
import { RiJavascriptFill, RiHtml5Line } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">what I do:</span>
            <span className="skilldesc">I'm a computer science student with a knack for problem-solving. As a frontend developer, I specialize in crafting user-friendly web applications using tools like React, JavaScript, TypeScript, HTML, and CSS. My university studies have also introduced me to Java, SQL, and database design. Additionally, I enjoy exploring data analysis with R and have a passion for mobile photography. I'm committed to learning and bringing creativity to every project I work on.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <FaReact className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            React
                        </h2>
                        <p>
                            As a frontend developer, I specialize in React, a powerful JavaScript library for building user interfaces. With React, I can create interactive and dynamic web applications, leveraging its component-based architecture and virtual DOM for efficient rendering.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaJava className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            Java & SQL
                        </h2>
                        <p>
                            In my university studies, I have worked extensively with Java and SQL for backend development and database management. Java's robustness and SQL's relational database capabilities allow me to build backend systems and interact with databases efficiently.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <RiJavascriptFill className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            JavaScript & TypeScript
                        </h2>
                        <p>
                            I'm skilled in JavaScript and TypeScript, fundamental languages for web development. With JavaScript, I create dynamic and interactive web applications, while TypeScript adds type safety and enhances code quality, resulting in more reliable software.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <RiHtml5Line className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            HTML & CSS
                        </h2>
                        <p>
                            Proficient in HTML and CSS, I can craft visually appealing and responsive web layouts while ensuring accessibility and semantic markup. I leverage the latest HTML5 and CSS3 features to create modern and stylish user interfaces.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaCss3 className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            Bootstrap & Material UI
                        </h2>
                        <p>
                            I am adept at using Bootstrap and Material UI, two popular frontend frameworks, to expedite the development process and create consistent and aesthetically pleasing UI components. These frameworks provide a wealth of pre-designed elements and responsive layout utilities.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <SiRedux className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            Redux & Axios
                        </h2>
                        <p>
                            Using Axios, I efficiently manage HTTP requests, ensuring seamless data communication between frontend and backend in my JavaScript applications. Additionally, I implement Redux to manage application state predictably, enabling me to build scalable and complex applications with ease.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaChartBar className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            Data Analysis
                        </h2>
                        <p>
                            I have hands-on experience in data analysis using R programming language, a powerful tool for statistical computing and data visualization. With R, I can perform exploratory data analysis, statistical modeling, and generate insights from complex datasets.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaDatabase className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            Database Design
                        </h2>
                        <p>
                            I am proficient in database design principles and methodologies, including schema design, normalization, and optimization. I can design and architect database solutions tailored to the specific requirements of applications, ensuring data integrity and performance.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <FaCamera className='skillBarIcon' />
                    <div className="skillBarText">
                        <h2>
                            Photography
                        </h2>
                        <p>
                            Beyond my technical skills, I also have a passion for mobile photography, which I cultivated through a dedicated course. This creative outlet allows me to capture and convey moments, perspectives, and emotions through the lens of my smartphone.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
