"use client";

import Footer from "../home/components/Footer";
import Header from "../home/components/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-600">
          Privacy Policy
        </h1>

        <div className="prose max-w-none">
          <p className="mb-4">Last updated: July 28, 2025</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h3>
          <p className="mb-4">
            AthenaPro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our{" "}
            <strong>AI-powered enterprise chatbot application</strong>{" "}
            (&quot;AthenaPro&quot;).
          </p>
          <p className="mb-4">
            By accessing or using AthenaPro, you agree to this Privacy Policy.
            If you do not agree, please do not use the app.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            2. Information We Collect
          </h3>

          <h4 className="text-xl font-semibold mt-6 mb-3">
            a. Personal Information
          </h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Account Information:</strong> Name, email, company
              details, job title.
            </li>
            <li>
              <strong>Authentication Data:</strong> Login credentials (if
              applicable).
            </li>
            <li>
              <strong>Contact Details:</strong> Phone number (if provided for
              support).
            </li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-3">
            b. Enterprise Data
          </h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Knowledge Base Content:</strong> Documents, FAQs, or
              internal data integrated by your company.
            </li>
            <li>
              <strong>User Queries & Responses:</strong> Inputs and AI-generated
              responses for improving accuracy.
            </li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-3">
            c. Technical & Usage Data
          </h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Device Information:</strong> IP address, OS version,
              device model.
            </li>
            <li>
              <strong>Log Data:</strong> Timestamps, app crashes, feature usage.
            </li>
            <li>
              <strong>Analytics:</strong> Interaction patterns with the AI
              model.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            3. How We Use Your Information
          </h3>
          <p className="mb-4">We use collected data to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="text-primary-600">✔</span>{" "}
              <strong>Provide & Improve AthenaPro</strong> – Deliver AI
              responses, enhance accuracy, and optimize performance.
            </li>
            <li>
              <span className="text-primary-600">✔</span>{" "}
              <strong>Enterprise Support</strong> – Allow corporate admins to
              monitor usage and customize knowledge bases.
            </li>
            <li>
              <span className="text-primary-600">✔</span>{" "}
              <strong>Security & Compliance</strong> – Detect fraud, enforce
              policies, and comply with laws.
            </li>
            <li>
              <span className="text-primary-600">✔</span>{" "}
              <strong>Communication</strong> – Send service-related
              announcements (not marketing spam).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            4. Data Sharing & Disclosure
          </h3>
          <p className="mb-4">
            We <strong>do not sell your data</strong>, but we may share it with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Corporate Administrators</strong> (if your company manages
              AthenaPro).
            </li>
            <li>
              <strong>Service Providers</strong> (hosting, analytics, AI model
              providers).
            </li>
            <li>
              <strong>Legal Authorities</strong> (if required by law).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h3>
          <p className="mb-4">We implement:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Encryption</strong> (in transit and at rest).
            </li>
            <li>
              <strong>Access Controls</strong> (role-based permissions for
              enterprise users).
            </li>
            <li>
              <strong>Regular Audits</strong> to prevent breaches.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            6. Data Retention
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>User Data:</strong> Retained as long as the account is
              active (or per corporate policy).
            </li>
            <li>
              <strong>Enterprise Data:</strong> Deleted upon request or contract
              termination.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h3>
          <p className="mb-4">
            Depending on jurisdiction (GDPR, CCPA, etc.), you may:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Access, correct, or delete</strong> your data.
            </li>
            <li>
              <strong>Opt out</strong> of non-essential processing.
            </li>
            <li>
              <strong>Request data portability.</strong>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            8. Changes to This Policy
          </h3>
          <p className="mb-4">
            We will notify users of updates via email or in-app alerts.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h3>
          <p className="mb-4">
            For privacy requests, email: <strong>support@athenapro.ai</strong>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
