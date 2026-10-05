import { Link, useLocation } from 'react-router-dom';

// Navbar Component: Creates top navigation links and geometric initials logo
export default function Navbar() {
  // useLocation is a React Router hook that tells us which page path the user is looking at
  const browserLocation = useLocation();

  // Basic color theme settings matching classy plum and gold styling layout
  const midnightPlumBg = '#2B1A2F';
  const champagneGold = '#D4AF37';
  const lilacText = '#D4C5D9';

  // Quick helper function to check if a navigation button matches the open browser path
  const checkIsLinkActive = (pagePath) => browserLocation.pathname === pagePath;

  // An array list containing all 6 portfolio pages to help loop through the menu items cleanly
  const navigationMenuOptionsList = [
    { name: 'Home', urlPath: '/' },
    { name: 'About Me', urlPath: '/about' },
    { name: 'Projects', urlPath: '/projects' },
    { name: 'Education', urlPath: '/education' },
    { name: 'Services', urlPath: '/services' },
    { name: 'Contact Me', urlPath: '/contact' }
  ];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 2.5rem',
      background: midnightPlumBg,
      borderBottom: `3px solid ${champagneGold}`,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.12)'
    }}>
      
      {/* Left branding area: Logo shape container */}
      <div style={styles.brandContainer}>
        {/* Geometric shape logo: Initial letter tags inside a styled plum box shield border */}
        <div style={styles.geometricLogoBox}>
          <span style={styles.logoInitialsText}>MG</span>
        </div>
        <span style={styles.authorLegalName}>Michelle Green</span>
      </div>
      
      {/* Navigation menu list track */}
      <ul style={styles.navigationLinkList}>
        {/* map through array list to dynamically build out the links instead of copy-pasting code lines */}
        {navigationMenuOptionsList.map((menuItem) => {
          const isCurrentTabOpen = checkIsLinkActive(menuItem.urlPath);
          
          return (
            <li key={menuItem.urlPath}>
              <Link 
                to={menuItem.urlPath} 
                style={{
                  ...styles.baseLinkElement,
                  // If the page is active, light it up gold, otherwise keep it a soft lilac color
                  color: isCurrentTabOpen ? champagneGold : lilacText,
                  fontWeight: isCurrentTabOpen ? '700' : '500',
                  borderBottom: isCurrentTabOpen ? `2px solid ${champagneGold}` : 'none',
                  paddingBottom: isCurrentTabOpen ? '4px' : '0'
                }}
              >
                {menuItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  geometricLogoBox: {
    width: '45px',
    height: '45px',
    background: '#5D3A66', 
    border: '2px solid #D4AF37', 
    borderRadius: '10px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  },
  logoInitialsText: {
    color: '#FBF9FC',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    letterSpacing: '1px'
  },
  authorLegalName: {
    color: '#FBF9FC',
    fontSize: '1.2rem',
    fontWeight: '600',
    fontFamily: 'system-ui, sans-serif'
  },
  navigationLinkList: {
    display: 'flex',
    listStyle: 'none',
    gap: '24px',
    margin: 0,
    padding: 0
  },
  baseLinkElement: {
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontFamily: 'system-ui, sans-serif',
    transition: 'color 0.2s ease-in-out'
  }
};
