// Projects Page Component: Loops through 3 academic course assignments and builds layout frames for each
export default function Projects() {
  // An array database of my group projects and labs
  const centennialCollegeProjectsList = [
    {
      id: 1,
      projectTitle: "Recipe Finder Application",
      imagePath: "/recipe-project.png",
      studentRole: "Agile Scrum Team Member",
      detailsDescription: "Collaborated with a development team to engineer a functional recipe search application using agile development frameworks. Managed structural tasks, prioritized workflows, and created comprehensive user stories.",
      projectOutcome: "Successfully utilized the Scrum framework and Jira to organize code sprints, maintain project timeline transparency, and deliver a collaborative software solution."
    },
    {
      id: 2,
      projectTitle: "Lost2Found Platform Specification",
      imagePath: "/lost-project.png",
      studentRole: "Software Requirements Analyst",
      detailsDescription: "Designed a comprehensive blueprint and planned structural user mechanics for a campus utility application designed to report, track, and recover missing items for institutional faculty and students.",
      projectOutcome: "Authored formal functional and non-functional engineering requirements, drafted structural system diagrams, and completed a professional Software Requirements Specification (SRS) document."
    },
    {
      id: 3,
      projectTitle: "Object-Oriented Architecture Labs",
      imagePath: "/labs-project.png",
      studentRole: "Software Engineering Student",
      detailsDescription: "Constructed desktop application logic, underlying data objects, and recursive operational modules leveraging structured programming languages including Python and C++ fundamentals.",
      projectOutcome: "Mastered core object-oriented structures, local environment configurations, basic Linux shell syntax, and secure code compilation practices."
    }
  ];

  return (
    <div style={styles.portfolioPageContainer}>
      <h1 style={styles.mainHeadingLayout}>Highlighted Projects</h1>
      <p style={styles.subheadingSupportText}>Academic engineering projects and software analysis completed at Centennial College.</p>
      
      {/* Portfolio flexing display card frame container grid */}
      <div style={styles.portfolioGridTrack}>
        {/* JS loop function mapping records object items onto individual visual display blocks */}
        {centennialCollegeProjectsList.map((projectCard) => (
          <div key={projectCard.id} style={styles.portfolioCardContainer}>
            {/* Visual picture window slot utilizing object-fit style mechanics */}
            <div style={styles.cardImageFixedFrame}>
              <img 
                src={projectCard.imagePath} 
                alt={projectCard.projectTitle} 
                style={styles.renderImageMediaElement} 
              />
            </div>
            
            {/* Description details card housing row text headers */}
            <div style={styles.cardContentShell}>
              <h2 style={styles.projectCardTitleText}>{projectCard.projectTitle}</h2>
              <div style={styles.roleAssignmentBadge}>{projectCard.studentRole}</div>
              <p style={styles.bodyDescriptionCopy}><strong>Description:</strong> {projectCard.detailsDescription}</p>
              <p style={styles.bodyDescriptionCopy}><strong>Outcome:</strong> {projectCard.projectOutcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  portfolioPageContainer: {
    maxWidth: '1100px',
    margin: '2rem auto',
    fontFamily: 'system-ui, sans-serif',
    color: '#2B1A2F',
    padding: '0 1rem'
  },
  mainHeadingLayout: {
    fontSize: '2.5rem',
    borderBottom: '2px solid #5D3A66',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem'
  },
  subheadingSupportText: {
    fontSize: '1.1rem',
    color: '#605263',
    marginBottom: '2.5rem'
  },
  portfolioGridTrack: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  portfolioCardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(43, 26, 47, 0.08)',
    overflow: 'hidden',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #E8E2E8'
  },
  cardImageFixedFrame: {
    width: '100%',
    height: '200px',
    backgroundColor: '#F5EFF5',
    borderBottom: '1px solid #E8E2E8',
    padding: '0.5rem',
    boxSizing: 'border-box'
  },
  renderImageMediaElement: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  cardContentShell: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  projectCardTitleText: {
    fontSize: '1.3rem',
    margin: '0 0 0.5rem 0',
    color: '#2B1A2F',
    lineHeight: '1.3'
  },
  roleAssignmentBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FAF0FA', 
    color: '#5D3A66', 
    padding: '0.3rem 0.7rem',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    border: '1px solid #E8DCE8'
  },
  bodyDescriptionCopy: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#443A45',
    margin: '0 0 0.8rem 0'
  }
};
