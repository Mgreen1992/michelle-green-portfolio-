// Services Page Component: Shows core technical services rendered using local public media graphics
export default function Services() {
  // Local core capabilities list mapping working web, coding, and agile graphics array items
  const personalSkillOfferingsList = [
    {
      id: 1,
      offeringTitleName: "Web Interface Design (HTML & CSS)",
      mediaAssetUrl: "/web-service.png",
      scopingDetailsText: "Crafting clean web layouts and client-side interfaces using fundamental HTML5 semantic elements, custom CSS styling, and beginner JavaScript mechanics."
    },
    {
      id: 2,
      offeringTitleName: "Foundational Software Logic (Python & C++)",
      mediaAssetUrl: "/coding-service.png", // Matches folder directory name
      scopingDetailsText: "Writing structural desktop applications, configuring local programming environments, and building an understanding of object-oriented concepts."
    },
    {
      id: 3,
      offeringTitleName: "Agile Coordination & Requirements Support",
      mediaAssetUrl: "/agile-service.png",
      scopingDetailsText: "Collaborating within Scrum team environments, managing tracking tasks inside Jira, and assisting with drafting Software Requirements Specification (SRS) documents."
    }
  ];

  return (
    <div style={styles.servicesViewMainBounds}>
      <h1 style={styles.mainViewHeading}>Services Offered</h1>
      <p style={styles.mainViewSubheadingSupportCopy}>Technical foundations and development practices built through hands-on academic training.</p>
      
      
      <div style={styles.servicesDisplayFlexGrid}>
        {personalSkillOfferingsList.map((skillServiceCard) => (
          <div key={skillServiceCard.id} style={styles.capabilityCardContainerOuter}>
            <div style={styles.cardImageMediaOuterWrapper}>
              <img 
                src={skillServiceCard.mediaAssetUrl} 
                alt={skillServiceCard.offeringTitleName} 
                style={styles.renderCapabilityMediaAsset} 
              />
            </div>
            
            {/* Description metadata block slot container */}
            <div style={styles.cardTextContentInnerBox}>
              <h2 style={styles.capabilityCardHeaderTitleText}>{skillServiceCard.offeringTitleName}</h2>
              <p style={styles.capabilityDescriptionTextCopy}>{skillServiceCard.scopingDetailsText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  servicesViewMainBounds: {
    maxWidth: '1100px',
    margin: '2rem auto',
    fontFamily: 'system-ui, sans-serif',
    color: '#2B1A2F',
    padding: '0 1rem'
  },
  mainViewHeading: {
    fontSize: '2.5rem',
    borderBottom: '2px solid #5D3A66',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem'
  },
  mainViewSubheadingSupportCopy: {
    fontSize: '1.1rem',
    color: '#605263',
    marginBottom: '3rem'
  },
  servicesDisplayFlexGrid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  capabilityCardContainerOuter: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(43, 26, 47, 0.08)',
    overflow: 'hidden',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #E8E2E8'
  },
  cardImageMediaOuterWrapper: {
    width: '100%',
    height: '180px',
    backgroundColor: '#FAF6FA',
    overflow: 'hidden'
  },
  renderCapabilityMediaAsset: {
    width: '100%',
    height: '180px',
    objectFit: 'cover'
  },
  cardTextContentInnerBox: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  capabilityCardHeaderTitleText: {
    fontSize: '1.25rem',
    margin: '0 0 0.8rem 0',
    color: '#2B1A2F',
    fontWeight: '700'
  },
  capabilityDescriptionTextCopy: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#443A45',
    margin: 0
  }
};
