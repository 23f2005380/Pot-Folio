import React from "react";
import "../styles.css";

function ResumePage() {
    return (
        <div className="px-4 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12">
            <div className="openToWork mb-10">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_16px_rgba(126,126,220,0.7)]">
                    #Open to Work
                </div>
                <div className="flex justify-center flex-col mt-2 sm:flex-row gap-20">
                    <div
                        className="px-6 py-2 rounded-lg font-semibold text-lg"
                        style={{
                           
                            color: "#fff",
                            boxShadow: "0 0 8px 2px #7e7edc, 0 0 32px 8px #5eead4",
                            // textShadow: "0 2px 8px #7e7edc, 0 0 2px #fff",
                        }}
                    >
                        Frontend Developer
                    </div>
                    <div
                        className="px-6 py-2 rounded-lg font-semibold text-lg"
                        style={{
                            
                            color: "#fff",
                            boxShadow: "0 0 8px 2px #f472b6, 0 0 32px 8px #818cf8",
                            // textShadow: "0 2px 8px #818cf8, 0 0 2px #fff",
                        }}
                    >
                        Full Stack Developer
                    </div>
                    <div
                        className="px-6 py-2 rounded-lg font-semibold text-lg"
                        style={{
                           
                            color: "#fff",
                            boxShadow: "0 0 8px 2px #34d399, 0 0 32px 8px #fbbf24",
                            // textShadow: "0 2px 8px #34d399, 0 0 2px #fff",
                        }}
                    >
                        Backend Developer
                    </div>
                </div>
            </div>
            <div
                className="  p-4 mb-5 sm:p-6 rounded-r-[50px] border-[6px] md:border-[10px] border-[#658987] border-l-0 font-mono text-[0.95rem] md:text-[1rem] text-[#213256] bg-white/80"
                style={{
                    borderRadius: "0px 32px 32px 0px",
                    fontFamily: "monospace",
                    fontSize : "18px"
                }}
            >
                Hey, Thank you for visiting this site. Myself Aman Kumar, currently studying in IIT Madras and pursuing BS in Data Science and Applications.
                I have experience of freelancing as a Full Stack Developer, few of my individual projects have been listed below. What I like to do is to build
                and experiment with algorithms and animations. Over the years what I mostly learned was to 
                <div>
                <li>giving importance to planning before coding</li> <li>coding with AI makes you less creative and lazy</li>
                <li> AI should be used only for reduntant tasks and basic setups</li><li> never think you mastered any language as even mastering HTML is not feasiable.</li>
            </div></div>
            <div id="prosemirror-context-children"></div>
            <div
                className="pb-8 sm:pb-10 md:pb-12"
                id="prosemirror-editor-container"
            >
                <div
                    className="_main_5jn6z_1 z-10 markdown prose dark:prose-invert contain-inline-size focus:outline-hidden bg-token-main-surface-primary ProseMirror px-4 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12"
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
                        maxWidth: "100%",
                        overflowX: "auto",
                    }}
                >
                    {/* ...rest of your content... */}
                    <p>
                        <strong style={{ color: "#7e7edc" }}>Aman Kumar</strong>
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
    );
}

export default ResumePage;