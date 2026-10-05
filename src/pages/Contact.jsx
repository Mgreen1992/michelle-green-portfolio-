import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Contact Page Component: Handles validation form entries inside React component state variables
export default function Contact() {
  // Bring router redirection tool to force a home page send-back after submission actions
  const pageViewNavigator = useNavigate();
  
  // React useState configuration setting up hook states to hold user input text inputs
  const [formInputValuesState, setFormInputValuesState] = useState({
    firstNameText: '',
    lastNameText: '',
    contactNumberPhone: '',
    emailAddressField: '',
    messageTextBoxPayload: ''
  });

  // Event handler tracking keys and modifying data columns dynamically inside state hooks
  const handleTextFieldInputChange = (inputEvent) => {
    const { name, value } = inputEvent.target;
    setFormInputValuesState((prevFormValues) => ({ 
      ...prevFormValues, 
      [name]: value 
    }));
  };

  // Form submission handler: Fires alert logs, locks data states, and resets routes back to home base
  const handleContactSubmitEvent = (formSubmitTriggerEvent) => {
    formSubmitTriggerEvent.preventDefault();
    
    // Testing print line showing the structural input dataset has been grabbed  in script states
    console.log("Simulated capture row state completed successfully:", formInputValuesState);
    
    // Alert modal popup validating text 
    alert(`Thank you, ${formInputValuesState.firstNameText}! Your simulated message has been captured. Redirecting you to the Home Page...`);
    
    // forcing page movement back to our Home root path route rule
    pageViewNavigator('/');
  };

  return (
    <div style={styles.contactPageShellContainer}>
      <h1 style={styles.primaryPageHeading}>Contact Me</h1>
      <p style={styles.subheadingExplanationCopy}>Get in touch for student co-op positions, collaborative projects, or academic inquiries.</p>
      
      {/* Item 1.i Visual Panel construct frame container layout */}
      <div style={styles.interactiveConstructPanelFrame}>
        
        {/* Main contact input questionnaire block container component */}
        <form style={styles.formInputGridBlock} onSubmit={handleContactSubmitEvent}>
          <h2 style={styles.blockInnerHeadingTitle}>Send a Message</h2>
          
          <div style={styles.doubleRowInputFlexTrack}>
            <div style={styles.formControlElementGroup}>
              <label style={styles.formInputRequirementLabel}>First Name *</label>
              <input 
                type="text" 
                name="firstNameText" 
                required 
                value={formInputValuesState.firstNameText} 
                onChange={handleTextFieldInputChange} 
                style={styles.textInputElementField} 
              />
            </div>
            <div style={styles.formControlElementGroup}>
              <label style={styles.formInputRequirementLabel}>Last Name *</label>
              <input 
                type="text" 
                name="lastNameText" 
                required 
                value={formInputValuesState.lastNameText} 
                onChange={handleTextFieldInputChange} 
                style={styles.textInputElementField} 
              />
            </div>
          </div>

          <div style={styles.doubleRowInputFlexTrack}>
            <div style={styles.formControlElementGroup}>
              <label style={styles.formInputRequirementLabel}>Contact Number</label>
              <input 
                type="tel" 
                name="contactNumberPhone" 
                value={formInputValuesState.contactNumberPhone} 
                onChange={handleTextFieldInputChange} 
                style={styles.textInputElementField} 
              />
            </div>
            <div style={styles.formControlElementGroup}>
              <label style={styles.formInputRequirementLabel}>Email Address *</label>
              <input 
                type="email" 
                name="emailAddressField" 
                required 
                value={formInputValuesState.emailAddressField} 
                onChange={handleTextFieldInputChange} 
                style={styles.textInputElementField} 
              />
            </div>
          </div>

          <div style={styles.formControlElementGroup}>
            <label style={styles.formInputRequirementLabel}>Message *</label>
            <textarea 
              name="messageTextBoxPayload" 
              rows="4" 
              required 
              value={formInputValuesState.messageTextBoxPayload} 
              onChange={handleTextFieldInputChange} 
              style={styles.textareaMessageFieldBox}
            ></textarea>
          </div>

          <button type="submit" style={styles.submitActionFormButton}>Send Message →</button>
        </form>

        {/* Right side contact information details listConstruct slot */}
        <div style={styles.metadataPanelAccentBlock}>
          <h3 style={styles.accentBlockHeaderTitle}>Direct Details</h3>
          <p style={styles.metadataRowTextCopy}><strong>Legal Name:</strong> Michelle Green</p>
          <p style={styles.metadataRowTextCopy}><strong>Location:</strong> Port Elgin, ON</p>
          <p style={styles.metadataRowTextCopy}><strong>Email:</strong> Alyssamichellegreen22@gmail.com</p>
          
          <div style={styles.organizationalAvailabilityBoxDivider}>
            <h4 style={styles.availabilityBoxHeadingTitle}>Availability</h4>
            <p style={styles.availabilityBoxBodyCopy}>Currently seeking student co-op placements or software engineering internships.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  contactPageShellContainer: {
    maxWidth: '900px',
    margin: '2rem auto',
    fontFamily: 'system-ui, sans-serif',
    color: '#2B1A2F',
    padding: '0 1rem'
  },
  primaryPageHeading: {
    fontSize: '2.5rem',
    borderBottom: '2px solid #5D3A66',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem'
  },
  subheadingExplanationCopy: {
    fontSize: '1.1rem',
    color: '#605263',
    marginBottom: '2.5rem'
  },
  interactiveConstructPanelFrame: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(43,26,47,0.08)',
    border: '1px solid #E8E2E8',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  formInputGridBlock: {
    padding: '2rem',
    flex: '2',
    minWidth: '320px'
  },
  blockInnerHeadingTitle: {
    fontSize: '1.4rem',
    margin: '0 0 1.5rem 0',
    color: '#2B1A2F'
  },
  doubleRowInputFlexTrack: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  formControlElementGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '140px',
    marginBottom: '1rem'
  },
  formInputRequirementLabel: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#605263',
    marginBottom: '0.4rem'
  },
  textInputElementField: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #CCC0CD',
    outlineColor: '#5D3A66'
  },
  textareaMessageFieldBox: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #CCC0CD',
    outlineColor: '#5D3A66',
    resize: 'vertical'
  },
  submitActionFormButton: {
    backgroundColor: '#5D3A66',
    color: '#FBF9FC',
    border: 'none',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '0.5rem'
  },
  metadataPanelAccentBlock: {
    backgroundColor: '#FAF6FA', 
    padding: '2rem',
    flex: '1',
    minWidth: '250px',
    borderLeft: '1px solid #E8DCE8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  accentBlockHeaderTitle: {
    fontSize: '1.2rem',
    margin: '0 0 1.2rem 0',
    color: '#5D3A66'
  },
  metadataRowTextCopy: {
    fontSize: '0.95rem',
    margin: '0 0 0.8rem 0',
    color: '#443A45'
  },
  organizationalAvailabilityBoxDivider: {
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #E8DCE8'
  },
  availabilityBoxHeadingTitle: {
    fontSize: '1rem',
    margin: '0 0 0.5rem 0',
    color: '#5D3A66'
  },
  availabilityBoxBodyCopy: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: '#605263',
    margin: 0
  }
};
