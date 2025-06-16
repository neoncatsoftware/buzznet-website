import React from "react";
import Image from 'next/image'

const PrivacyPolicy = () => {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to BuzzNet</h1>

            <Image
      src="/static/icon.png"
      width={250}
      height={250}
      alt="Picture of the author"
    />

        <p style={styles.description}>
          BuzzNet is a networking platform built to connect like-minded professionals in your area.
          We help build real-world connections through events and opportunities — powered by community and for free!
        </p>
        <p style={styles.subtext}>
          Soon avaliable on Google and IOS
        </p>

      </div>
    </main>
  );
};

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f9", // Light background
      padding: 20,
      color: "#333", // Dark text
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    content: {
      maxWidth: 600,
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#FFD500", // Buzz yellow
      marginBottom: "1rem",
    },
    description: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "1.5rem",
    },
    subtext: {
      fontSize: "1rem",
      color: "#777",
      marginBottom: "2rem",
    },
    button: {
      display: "inline-block",
      backgroundColor: "#FFD500",
      color: "#000",
      padding: "12px 24px",
      borderRadius: 8,
      fontWeight: "bold",
      textDecoration: "none",
      transition: "background-color 0.2s ease",
    },
  };
export default PrivacyPolicy;
