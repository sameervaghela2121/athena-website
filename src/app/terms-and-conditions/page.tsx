"use client";

import Footer from "../home/components/Footer";
import Header from "../home/components/Header";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-600">
          Terms & Conditions
        </h1>

        <div className="prose max-w-none">
          <p className="mb-4">Last updated: July 28, 2025</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h3>
          <p className="mb-4">
            By using AthenaPro, you agree to these legally binding Terms.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Designed for <strong>corporate/enterprise use</strong>.
            </li>
            <li>
              Individual users must have <strong>company authorization</strong>.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            3. License & Restrictions
          </h3>
          <p className="mb-4">
            <span className="text-primary-600">✔</span>{" "}
            <strong>Granted:</strong> Limited, revocable license for business
            use.
          </p>
          <p className="mb-4">
            <span className="text-red-600">❌</span>{" "}
            <strong>Prohibited:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Reverse engineering, scraping, or unauthorized access.</li>
            <li>
              Inputting illegal, harmful, or sensitive personal data (SSN,
              health records).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            4. AI-Generated Content Disclaimer
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              AthenaPro&apos;s responses are{" "}
              <strong>AI-generated and may contain inaccuracies</strong>.
            </li>
            <li>
              <strong>Not a substitute for professional advice</strong> (legal,
              financial, medical).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            5. Intellectual Property
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>AthenaPro&apos;s software, branding, and content</strong>{" "}
              are owned by us.
            </li>
            <li>
              <strong>Enterprise knowledge base data</strong> remains the
              company&apos;s property.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h3>
          <p className="mb-4">
            We may suspend accounts for violations or inactivity.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            7. Limitation of Liability
          </h3>
          <p className="mb-4">
            We are <strong>not liable</strong> for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Indirect damages (lost profits, data loss).</li>
            <li>AI response inaccuracies.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h3>
          <p className="mb-4">Governed by laws of California.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h3>
          <p className="mb-4">
            For disputes or questions: <strong>support@athenapro.ai</strong>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
