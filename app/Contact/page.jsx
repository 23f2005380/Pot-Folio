import "../styles.css"
export default function Contact(){
    return (
        <div
            
            style={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                padding: "2rem"
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: "1.5rem",
                    boxShadow: "0 10px 30px rgba(30, 41, 59, 0.25), 0 2px 8px rgba(59, 130, 246, 0.15)",
                    padding: "2.5rem 2rem",
                    maxWidth: "400px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "box-shadow 0.3s",
                }}
                className="contact"
            >
                <img
                    src="/image.png"
                    alt="Developer Avatar"
                    style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        marginBottom: "1.5rem",
                        boxShadow: "0 4px 16px rgba(59, 130, 246, 0.2)"
                    }}
                    className="profileAnimate"
                />
                <h2 className="textemerge" style={{ margin: 0, fontSize: "2rem", color: "#1e293b" , overflow : "hidden"}}><span>Aman Kumar</span></h2>
                <p className="textemerge" style={{ color: "#64748b", margin: "0.5rem 0 1.5rem 0", textAlign: "center" }}>
                    <span>Full Stack Developer</span><br />
                    <span>Passionate about building modern web applications.</span>
                </p>
                <div className="animateDetails" style={{ width: "100%" }}>
                    <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
                        <span style={{ marginRight: "0.5rem", color: "#2563eb" }}>📧</span>
                        <a href="mailto:23f2005380@ds.study.iit.in" style={{ color: "#2563eb", textDecoration: "none" }}>
                            23f2005380@ds.study.iitm.ac.in
                        </a>
                    </div>
                    <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
                        <span style={{ marginRight: "0.5rem", color: "#2563eb" }}>🌐</span>
                        <a href="https://github.com/23f2005380" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "none" }}>
                            github.com/Aman_Kumar
                        </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ marginRight: "0.5rem", color: "#2563eb" }}>📱</span>
                        <span style={{ color: "#334155" }}>+91 9406848141</span>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 600px) {
                    .contact > div {
                        padding: 1.2rem 0.5rem !important;
                        max-width: 95vw !important;
                    }
                }
            `}</style>
        </div>
    )
}