// About Page Component: Displays biography write-ups, legal identity text, and PDF link anchor
export default function About() {
  return (
    <div style={styles.contentViewportBounds}>
      {/* Legal header tag identity section required for marks */}
      <h1 style={styles.primarySectionTitle}>About Me</h1>
      
      <div style={styles.magazineLayoutWrapper}>
        {/* Profile Image layout block floating left for better aesthetic*/}
        <img 
          src="/headshot.png" 
          alt="Michelle Green Professional Headshot" 
          style={styles.floatingProfileImageAvatar} 
        />

        {/* Legal structural identity name container block */}
       <h2> Michelle Green</h2>
        
        {/* Paragraph fields splitting my customized bio details into clean readable rows */}
        <p style={styles.biographyParagraphText}>
          Hi! My name is Michelle Green and I am a second-year Artificial Intelligence 
          Software Engineering Technology student. This is not my first time attending college, 
          it is my fifth! I've had quite the journey trying to figure out what I want to do. 
          My journey started back in 2013 when I decided to join an Art program at Seneca College 
          in Toronto. I quickly realized that this wasn't something I wanted to turn into a career 
          but rather enjoy that creative side of me as just a hobby. After that, I enrolled in a 
          PSW program at Georgian College. I worked in the healthcare field for several years, 
          working in the community and in Long Term Care Facilities. 
        </p>

        <p style={styles.biographyParagraphText}>
          In 2019, I welcomed my first-born baby into the world, and around this time I decided 
          to take a certificate program at Georgian called Electrical Techniques. This was a fun 
          program and I thoroughly enjoyed it. I loved the hands-on portion and the challenging 
          concepts of electrical systems. Halfway through my electrical program, COVID-19 hit, 
          and so after completing my program my path took a turn, as it did for many others, 
          and I decided that it was best for me to be home with my daughters during this time 
          and shortly after, I welcomed my second-born baby. I spent the next several years 
          soaking up my time with my daughters. In 2022, I decided to enroll in a Business 
          Marketing program through Centennial College. 
        </p>

        <p style={styles.biographyParagraphText}>
          Now fast forward to 2026, and I think I finally found my calling. This program has 
          been very interesting and very challenging. I have been learning several different 
          programming languages which include Python, C++, SQL, Linux, and Java. I've also learned 
          about SRS's, project management with Jira and Scrum, and now this semester we are diving 
          into AI systems. I have no previous experience with coding or working with software 
          applications, so this is all very new to me. 
        </p>

        <p style={styles.biographyParagraphText}>
          My short-term goal is to understand the basics and create a strong foundation in 
          Software Engineering. I'm not looking to master every skill and all languages just yet—as 
          I feel like this would be impossible to do—but rather understand the basic structure, 
          then down the road the mastery will come. My long-term goal is to get into McMaster's 
          degree completion program, earn my Bachelor's degree, and then eventually obtain my P.Eng designation.
        </p>

        {/* Clear block resets float layout streams so the button element lands neatly below everything else */}
        <div style={{ clear: 'both' }}></div>

        {/* Assignment rule: Viewable/downloadable file reference to our resume inside the public storage root */}
        <div style={styles.downloadActionInterfaceWrapper}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.downloadHyperlinkButton}
          >
            📄 View / Download My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  contentViewportBounds: {
    maxWidth: '850px',
    margin: '2rem auto',
    fontFamily: 'system-ui, sans-serif',
    color: '#2B1A2F',
    padding: '0 1rem'
  },
  primarySectionTitle: {
    fontSize: '2.5rem',
    borderBottom: '2px solid #5D3A66',
    paddingBottom: '0.5rem',
    marginBottom: '2rem'
  },
  magazineLayoutWrapper: {
    display: 'block', 
    lineHeight: '1.8'
  },
  floatingProfileImageAvatar: {
    float: 'left', 
    width: '220px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(43, 26, 47, 0.15)',
    marginRight: '2rem', 
    marginBottom: '1.2rem', 
    objectFit: 'cover'
  },
  authorLegalIdentityHeader: {
    fontSize: '2rem',
    margin: '0 0 1rem 0',
    color: '#2B1A2F'
  },
  biographyParagraphText: {
    fontSize: '1.05rem',
    color: '#443A45',
    marginBottom: '1.2rem',
    textAlign: 'left'
  },
  downloadActionInterfaceWrapper: {
    marginTop: '2.5rem'
  },
  downloadHyperlinkButton: {
    backgroundColor: '#5D3A66',
    color: '#FBF9FC',
    textDecoration: 'none',
    padding: '0.8rem 1.8rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    display: 'inline-block',
    boxShadow: '0 4px 10px rgba(93, 58, 102, 0.15)'
  }
};
