import React from "react";
import "../styles.css"

function ResumePage (){

  
return (
    <div className="px-12 pt-12">
       
     <div className="wind flex p-6 h-max-content" style={{borderRadius : "0px 50px 50px 0px", border : "10px solid blue", height : "150px", borderLeft : "0px", fontFamily : "monospace", fontSize : "15px", height : "max-content"}}>
        {/* <div className="flex  " style={{width : "25%"}}>
        <div className="top-[-14%] relative" >1 <span>Mounted Data</span></div>
        </div>
        <div className="relative"  style={{width : "25%"}}>
         <div className="">1</div>
         </div> */}
         Hey, Thank you for visiting this site. Myself Aman Kumar, currently studying in IIT Madras and pursuing BS in Data Science and Applications.
         I have experience of freelancing as a Full Stack Developer, few of my individual projects have been listed below. What I like to do is to build
         and experiment with algorithms and animations. Over the years what I mostly learned was to giving importance to planning before coding, coding with AI makes you less creative and lazy, 
         so AI should be used only for reduntant tasks and basic setups, never think you mastered any language as even mastering HTML is not feasiable.
     </div>
        <div id="prosemirror-context-children"></div>
        <div className="pb-12" id="prosemirror-editor-container">
            <div
                className="_main_5jn6z_1 z-10 markdown prose  dark:prose-invert contain-inline-size focus:outline-hidden bg-token-main-surface-primary ProseMirror px-12 pt-12"
                contentEditable={false}
                translate="no"
                style={{
                    color: "#fff",
                    background: "rgba(33,33,33,1)",
                    lineHeight: 1.8,
                    fontSize: "1.08rem",
                    letterSpacing: "0.01em",
                    fontFamily: "Inter, Arial, sans-serif",
                    margin: "0 auto",
                    borderRadius: "12px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                }}
            >
                {/* ...rest of your content... */}
                <p>
                    <strong style={{color : "#7e7edc"}}>Aman Kumar</strong>
                    <br />
                    Data Science Undergraduate @ IIT Madras
                    <br />
                    📧 <a href="mailto:23f2005380@ds.study.iitm.ac.in">23f2005380@ds.study.iitm.ac.in</a> | 📞 +91 9406848141
                    <br />
                    🌐 <a href="https://www.linkedin.com/in/aman-kumar-a841352a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
                    <a href="https://github.com/23f2005380/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                <br />
                <hr />
                <br />
                <h3>
                    <strong className="headingResume">Education</strong>
                </h3>
                <p>
                    <strong>Bachelor of Science in Data Science and Applications</strong>
                    <br />
                    Indian Institute of Technology Madras | <em>2023 – Present</em>
                    <br />
                    <strong>CGPA:</strong> 8.0 / 10
                </p>
                <p>
                    <strong>Class XII — PCM</strong>
                    <br />
                    Aditya Birla Public School, Bhuj | <em>2022</em>
                    <br />
                    <strong>Score:</strong> 78%
                </p>
                <p>
                    <strong>Class X</strong>
                    <br />
                    Aditya Birla Public School, Sidhi | <em>2020</em>
                    <br />
                    <strong>Score:</strong> 74%
                </p>
                <br />
                <hr />
                <br />
                <h3>
                    <strong className="headingResume">Technical Skills</strong>
                </h3>
                <p>
                    <strong>Languages:</strong> JavaScript, Python, C++, Java, TypeScript, SQL, HTML, CSS
                    <br />
                    <strong>Frameworks/Libraries:</strong> React.js, Next.js, Vue.js, Flask, Bootstrap, Tailwind CSS
                    <br />
                    <strong>Tools:</strong> Figma, Framer, Power BI, Google Colab, Excel, Ubuntu CLI
                    <br />
                    <strong>Databases:</strong> SQLite, Firebase
                </p>
                <br />
                <hr />
                <br />
                <h3>
                    <strong className="headingResume">Projects</strong>
                </h3>
                <p>
                    <strong>IITM Resources Hub</strong> | <em>Next.js, Firebase, Tailwind CSS</em>
                    <br />
                    • Built a student-focused resource-sharing platform with authentication and real-time updates.
                    <br />
                    • Leveraged AI tools (e.g., GitHub Copilot, ChatGPT) to improve UI/UX and optimize development time.
                    <br />
                    • Gained 40+ users and continues to be updated monthly.
                    <br />
                    🔗 <a href="#" target="_blank" rel="noopener noreferrer">Live Site</a>
                </p>
                <p>
                    <strong>HouseHold Services 2</strong> | <em>Vue.js, Flask, Redis, Celery</em>
                    <br />
                    • Created a full-stack service booking platform with admin controls and responsive UI.
                    <br />
                    • Integrated Celery + Redis for background jobs; designed flow using Figma and Bootstrap.
                    <br />
                    • Learned the importance of structured planning, debugging, and ER design.
                    <br />
                    🔗 <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                <p>
                    <strong>Sponsorship Platform</strong> | <em>Flask, Jinja, SQLAlchemy, Matplotlib</em>
                    <br />
                    • Developed a platform connecting influencers with sponsors.
                    <br />
                    • Focused on simplicity and visualizations; implemented charting via Matplotlib.
                    <br />
                    • Refined backend models and structure mid-development to overcome real-time issues.
                    <br />
                    🔗 <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                <p>
                    <strong>2D Games Portfolio</strong> | <em>JavaScript</em>
                    <br />
                    • Built interactive games including Infinite Runner, Ping Pong, and Maze Beater in 9th grade.
                    <br />
                    • Strengthened understanding of algorithms, animation, and UI logic.
                </p>
                <br />
                <hr />
                <br />
                <h3>
                    <strong className="headingResume">Achievements &amp; Certifications</strong>
                </h3>
                <p>
                    • Earned "Top Course Grade" badge 6 times in IITM Data Science program
                    <br />
                    • Finalist – ECell Pitching Competition
                    <br />
                    • Completed certifications in DSA, JavaScript, React + Redux, C++, Java, Swift (basic)
                </p>
                <br />
                <hr />
                <br />
                <h3>
                    <strong className="headingResume">Extracurricular Activities</strong>
                </h3>
                <p>
                    • Core Member – Paradox, IITM BS (May ‘24)
                    <br />
                    • Head of Technical Group – Nature Nurture Society (Dec ‘22 – Nov ‘23)
                    <br />
                    • Core Member – Solitary Club, IITM BS
                    <br />
                    • State-level Football (U-19)
                </p>
                <br />
            </div>
        </div>
       
    </div>
);}

export default ResumePage;