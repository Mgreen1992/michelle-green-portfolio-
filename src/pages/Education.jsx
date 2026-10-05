// Education Page Component: Builds a chronological vertical block chart listing degrees and college dates
export default function Education() {
  // Array records array capturing school histories precisely matching our resume data entries
  const formalCollegeQualificationsList = [
    {
      id: 1,
      diplomaTitle: "AI Software Engineering Technology (Advanced Diploma - Co-op)",
      collegeName: "Centennial College",
      locationCity: "Toronto, ON",
      durationTimeline: "2024 - Present (Expected Graduation: 2028)",
      courseHighlights: "Maintaining a 3.5 overall GPA. Intensive study in Artificial Intelligence systems, Web Application development, Python OOP fundamentals, C++, Java, Oracle SQL, Linux command operations, and structural Software Requirements Specifications (SRS)."
    },
    {
      id: 2,
      diplomaTitle: "Business Marketing Diploma",
      collegeName: "Centennial College",
      locationCity: "Toronto, ON",
      durationTimeline: "Graduated: October 2024",
      courseHighlights: "Studied corporate marketing frameworks, campaign designs, operational communication strategies, and performance metrics tracking."
    },
    {
      id: 3,
      diplomaTitle: "Electrical Techniques Certificate",
      collegeName: "Georgian College",
      locationCity: "Owen Sound, ON",
      durationTimeline: "Completed: May 2020",
      courseHighlights: "Selected as an Ambassador for Women in Trades. Featured in 'Our Homes' Magazine and appeared on a live Rogers TV interview segment to discuss the trade certification initiative."
    },
    {
      id: 4,
      diplomaTitle: "Personal Support Worker Certificate",
      collegeName: "Georgian College",
      locationCity: "Owen Sound, ON",
      durationTimeline: "Completed: May 2015",
      courseHighlights: "Honored with the 'Care Giver Recognition for Heroes in the Home' award. Developed high-accountability medical logging discipline and crisis management collaboration protocols."
    }
  ];

  return (
    <div style={styles.timelinePageWrapper}>
      <h1 style={styles.timelineHeadingLayout}>Education & Qualifications</h1>
      <p style={styles.timelineSubheadingText}>A chronological look at my academic degrees, certificates, and professional honors.</p>
      
      {/* The main outer border line running down our screen layout to form a tracking guide */}
      <div style={styles.verticalTimelineTrack}>
        {formalCollegeQualificationsList.map((eduCardItem) => (
          <div key={eduCardItem.id} style={styles.timelineRecordNodeWrapper}>
            {/* Round circle dot positioned absolute to overlap the left guideline track */}
            <div style={styles.geometricTrackIndicatorDot}></div>
            
            {/* Qualification details card element box housing data columns */}
            <div style={styles.qualificationDetailsCard}>
              <div style={styles.cardHeaderFlexRow}>
                <h2 style={styles.degreeTitleText}>{eduCardItem.diplomaTitle}</h2>
                <span style={styles.chronologicalDateTag}>{eduCardItem.durationTimeline}</span>
              </div>
              <h3 style={styles.collegeEntitySubheader}>
                {eduCardItem.collegeName} <span style={styles.cityLocationCopy}>• {eduCardItem.locationCity}</span>
              </h3>
              <p style={styles.milestoneHighlightsBodyText}>{eduCardItem.courseHighlights}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  timelinePageWrapper: {
    maxWidth: '850px',
    margin: '2rem auto',
    fontFamily: 'system-ui, sans-serif',
    color: '#2B1A2F',
    padding: '0 1rem'
  },
  timelineHeadingLayout: {
    fontSize: '2.5rem',
    borderBottom: '2px solid #5D3A66',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem'
  },
  timelineSubheadingText: {
    fontSize: '1.1rem',
    color: '#605263',
    marginBottom: '3rem'
  },
  verticalTimelineTrack: {
    position: 'relative',
    borderLeft: '3px solid #E3D9E3', 
    paddingLeft: '2rem',
    marginLeft: '1rem'
  },
  timelineRecordNodeWrapper: {
    position: 'relative',
    marginBottom: '2.5rem'
  },
  geometricTrackIndicatorDot: {
    position: 'absolute',
    left: 'calc(-2rem - 9px)', 
    top: '18px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#5D3A66', 
    border: '3px solid #FAF6FA', 
    boxShadow: '0 0 0 3px #5D3A66'
  },
  qualificationDetailsCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(43,26,47,0.04)',
    border: '1px solid #E8E2E8'
  },
  cardHeaderFlexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '0.4rem'
  },
  degreeTitleText: {
    fontSize: '1.25rem',
    margin: 0,
    color: '#2B1A2F',
    fontWeight: '700',
    flex: '1',
    minWidth: '250px'
  },
  chronologicalDateTag: {
    backgroundColor: '#FAF0FA',
    color: '#5D3A66',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    border: '1px solid #E8DCE8'
  },
  collegeEntitySubheader: {
    fontSize: '1.1rem',
    color: '#605263',
    fontWeight: '500',
    margin: '0 0 1rem 0'
  },
  cityLocationCopy: {
    color: '#8B7E8C',
    fontSize: '0.95rem'
  },
  milestoneHighlightsBodyText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#443A45',
    margin: 0
  }
};
