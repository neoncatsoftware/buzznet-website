import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>

      <p style={styles.paragraph}>
        This application (&quot;the App&quot;) is committed to protecting your privacy. This Privacy Policy explains
        how we collect, use, and safeguard your information when you use our app and website.
      </p>

      <h2 style={styles.subheading}>1. Information We Collect</h2>
      <p style={styles.paragraph}>
        We may collect personal information such as your name, email address, and location to provide the core
        features of the app, such as networking, job listings, and events in your area.
      </p>

      <h2 style={styles.subheading}>2. How We Use Your Information</h2>
      <p style={styles.paragraph}>
        Your information is used to help match you with local users and opportunities. We do not sell or share your
        personal data with third parties.
      </p>

      <h2 style={styles.subheading}>3. Data Security</h2>
      <p style={styles.paragraph}>
        We take reasonable precautions to protect your data, including secure storage and encrypƒted connections. Your
        personal data is stored securely in Firebase.
      </p>

      <h2 style={styles.subheading}>4. Third-Party Services</h2>
      <p style={styles.paragraph}>
        This App may integrate with services like Firebase and Google Sign-In. These services may collect data as
        described in their own privacy policies.
      </p>

      <h2 style={styles.subheading}>5. Your Consent</h2>
      <p style={styles.paragraph}>
        By using the App, you consent to our Privacy Policy.
      </p>

      <h2 style={styles.subheading}>6. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions about this Privacy Policy, please contact us at support@example.com.
      </p>

      <p style={styles.footer}>Last updated: June 2025</p>
    </div>
  );
};

const styles = {
  container: {

    margin: "0 auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    backgroundColor: "#f9f9f9",
    color: "#333",
    borderRadius: 8,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: 20,
    color: "#222",
  },
  subheading: {
    fontSize: "1.3rem",
    marginTop: 30,
    marginBottom: 10,
    color: "#444",
  },
  paragraph: {
    fontSize: "1rem",
    marginBottom: 16,
  },
  footer: {
    marginTop: 40,
    fontSize: "0.9rem",
    color: "#888",
  },
};

export default PrivacyPolicy;
