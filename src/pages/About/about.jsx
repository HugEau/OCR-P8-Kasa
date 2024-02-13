import WelcomeSection from "../../components/welcomeSection/welcomeSection.jsx";
import ContentRoller from "../../components/ContentRoller/contentRoller.jsx";
import mountain from "../../assets/mountain.png"
import './about.scss'
import { aboutContent } from "../../datas/aboutContent.js"

function About() {
    return (
        <div className="body">
            <main>
                <div className="about">
                    <WelcomeSection image={mountain} key={'mountainImg'}/>
                    <div className="about__content">
                        {aboutContent.map((section) => (
                            <ContentRoller title={section.title} content={section.description} key={'ContentRoller' + section.title}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;