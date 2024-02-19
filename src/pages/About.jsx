import selfie from '../images/facePic.jpeg'

function About() {
    return (
        <>
            <div id="about-body">
                <h1 className="text-background title">About Me</h1>
                <img alt="me" src={selfie} ></img>
                <p className="text-background" id="about-text">I am a recent graduate of a Full Stack Web Developer course with The University of Texas at Austin. My portfolio showcases recent projects demonstrating my skills.  
                    Additional experience includes 9 years as a Technical Support Engineer supporting enterprise software products. 
                    This involves troubleshooting software in high pressure scenarios where production systems are impacted and working with development to identify root cause and provide business level solutions.
                </p>
            </div>
        </>
    )
}

export default About