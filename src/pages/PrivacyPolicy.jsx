import './Policy.css';

function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-content">
        <div className="container">
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              Puffora Naturals ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or make a purchase from us.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Shipping and billing address</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may 
              share your information only with trusted service providers who assist us in operating 
              our website and conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the internet is 100% secure, and 
              we cannot guarantee absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: pufforanaturals@gmail.com
              <br />
              Phone: 9217017363
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

