'use client';

import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neon Cat Software - Data Deletion Request</title>
        <meta name="description" content="Request deletion of your account and data from Neon Cat Software apps." />
      </Head>
      <main style={styles.container}>
        <h1 style={styles.heading}>Request Account Deletion</h1>
        <p style={styles.text}>
          If you would like to request deletion of your account and associated data for any of our apps,
          please send an email to:
        </p>
        <p style={styles.email}><strong>neoncatsoftware@gmail.com</strong></p>

        <p style={styles.text}>
          In your email, please include the following:
        </p>
        <ul style={styles.list}>
          <li>Your full name (if applicable)</li>
          <li>The email address associated with your account</li>
          <li>The name of the app you are referring to</li>
        </ul>

        <p style={styles.text}>
          We will process your request within 7 days. If your account was created using Firebase authentication,
          deletion will remove all associated personal data stored in our systems.
        </p>

        <h2 style={styles.subheading}>What Data Will Be Deleted?</h2>
        <ul style={styles.list}>
          <li>Account information (email, UID)</li>
          <li>Any app-specific user-generated content</li>
          <li>Any linked usage data stored in Firebase or Firestore</li>
        </ul>

        <h2 style={styles.subheading}>What Data Will Be Retained?</h2>
        <ul style={styles.list}>
          <li>Anonymous, aggregate analytics (not linked to your identity)</li>
          <li>Billing or legal records, if required by law</li>
        </ul>

        <p style={styles.note}>
          Note: You can also delete your account directly in the app under <strong>Settings &gt; Delete Account</strong>.
        </p>
      </main>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "sans-serif",
    textAlign: "left",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.25rem",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  email: {
    fontSize: "1.1rem",
    color: "#0070f3",
    marginBottom: "1rem",
  },
  list: {
    paddingLeft: "1.25rem",
    marginBottom: "1rem",
  },
  note: {
    marginTop: "2rem",
    fontSize: "0.9rem",
    color: "#666",
  },
};
