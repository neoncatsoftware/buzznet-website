import Head from "next/head";

export default function CopyrightPolicy() {
  return (
    <>
      <Head>
        <title>Copyright Policy | Buzznet</title>
        <meta name="description" content="Copyright policy for Buzznet app" />
      </Head>
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.heading}>📄 Buzznet Copyright Policy</h1>
          <p><strong>Effective Date:</strong> July 18, 2025</p>

          <section style={styles.section}>
            <h2 style={styles.subheading}>1. Ownership of Content</h2>
            <p>
              All content, features, and functionality on the Buzznet app and website—
              including but not limited to text, graphics, logos, icons, images, and software—
              are the intellectual property of Buzznet or its content creators, and are protected
              by applicable copyright, trademark, and intellectual property laws.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subheading}>2. User-Generated Content</h2>
            <p>
              Buzznet respects the intellectual property rights of others. If you upload, share, or
              post any content on Buzznet, you affirm that you own the rights to it or have obtained
              proper permission to share it. By submitting content, you grant Buzznet a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and display the content as needed to
              operate the platform.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subheading}>3. Copyright Infringement Notification</h2>
            <p>
              If you believe that your copyrighted work has been copied or used in a way that constitutes
              infringement, please notify us at:
            </p>
            <p><strong>Email:</strong> your-email@example.com</p>
            <p>
              Include the following details:
              <ul>
                <li>A description of the copyrighted work</li>
                <li>Where the infringing content appears (URL/screenshot)</li>
                <li>A good-faith statement of unauthorized use</li>
                <li>Your name, contact info, and signature</li>
              </ul>
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subheading}>4. Repeat Infringers</h2>
            <p>
              Users who repeatedly violate copyright laws or this policy may have their accounts
              suspended or removed from Buzznet.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    backgroundColor: "#f9f9f9",
    padding: "2rem",
    fontFamily: "sans-serif",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  subheading: {
    fontSize: "1.25rem",
    marginTop: "1.5rem",
    marginBottom: "0.75rem",
  },
  section: {
    marginBottom: "1.5rem",
  },
};
