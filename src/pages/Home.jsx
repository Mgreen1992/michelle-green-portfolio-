import { useNavigate } from 'react-router-dom';

// Home Page Component: Renders welcome texts, our core mission, and a working click router button
export default function Home() {
  // useNavigate is a utility tool from React Router that lets us move to another screen through script actions
  const pageRedirectNavigator = useNavigate();

  // Button click event function that pushes the user smoothly over to the /about page route
  const handleLearnMoreButtonClick = () => {
    pageRedirectNavigator('/about');
  };

  return (
    <div style={styles.pageViewportWrapper}>
      {/* Page layout welcome banner tag matching assignment specifications */}
      <h1 style={styles.primaryWelcomeHeading}>Welcome to My Portfolio</h1>
      
      {/* Portfolio mission statement container panel block */}
      <div style={styles.statementCardContainer}>
        <h2 style={styles.sectionTitleHeader}>Mission Statement</h2>
        <p style={styles.missionDescriptionBody}>
          To graduate with a minimum 3.7 GPA so I can attend McMaster University for 
          the degree completion program and to leave Centennial College with a strong 
          foundation in Software Engineering that I can carry forward with me on all
          my future endevers. 
        </p>
      </div>

      {/* Button component triggering navigation redirect click route */}
      <button 
        style={styles.interactiveCtaButton} 
        onClick={handleLearnMoreButtonClick}
      >
        Learn More About Me →
      </button>
    </div>
  );
}

const styles = {
  pageViewportWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '4rem',
    fontFamily: 'system-ui, sans-serif'
  },
  primaryWelcomeHeading: {
    fontSize: '2.6rem',
    color: '#2B1A2F', 
    marginBottom: '1.5rem'
  },
  statementCardContainer: {
    maxWidth: '650px',
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(43, 26, 47, 0.06)',
    border: '1px solid #E8E2E8',
    marginBottom: '2.5rem'
  },
  sectionTitleHeader: {
    fontSize: '1.4rem',
    color: '#5D3A66', 
    marginTop: 0,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  missionDescriptionBody: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#443A45'
  },
  interactiveCtaButton: {
    backgroundColor: '#5D3A66', 
    color: '#FBF9FC',
    border: 'none',
    padding: '0.9rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(93, 58, 102, 0.2)'
  }
};
