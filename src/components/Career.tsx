import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Zidio (Internship)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built two full-stack applications using the MERN stack. Created
              BLOG4U, an AI-powered blogging platform enabling users to generate
              blog ideas, summarize content, and interact through likes and
              comments with an admin panel for content management. Additionally
              developed a data-visualization platform that transforms uploaded
              Excel/CSV files into real-time analytics dashboards with dynamic
              charts and insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mern Stack Developer</h4>
                <h5>ITSYBIZZ (Full Time)</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Developing and maintaining scalable web applications using
              React.js, Next.js, TypeScript, and Node.js. Building modern UI
              components, integrating backend APIs, and delivering
              high-performance production-ready features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Full Stack Developer</h4>
                <h5>ApnaTenant (Client Project)</h5>
              </div>
             <h3>2026</h3>
            </div>

            <p>
              Developing ApnaTenant, a full-stack PG management platform where
              users discover and book properties while owners manage listings
              and booking requests. Built admin dashboards for managing users,
              properties, and queries while ensuring a responsive and scalable
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
