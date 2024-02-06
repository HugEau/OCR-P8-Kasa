import WelcomeSection from "../../components/welcomeSection/welcomeSection";
import ContentRoller from "../../components/ContentRoller/contentRoller";
import mountain from "../../assets/mountain.png"
import '../../styles/about.scss'
import { aboutContent } from "../../datas/aboutContent.js"

function About() {
    return (
        <div className="body">
            <main>
                <div className="about">
                    <WelcomeSection image={mountain}/>
                    <div className="about__content">
                        {aboutContent.map((section) => (
                            <ContentRoller title={section.title} content={section.description}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;