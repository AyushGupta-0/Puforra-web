import './Policy.css';

function Terms() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="container">
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-content">
        <div className="container">
          <section className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Puffora Naturals website, you accept and agree to be bound 
              by these Terms and Conditions. If you do not agree with any part of these terms, 
              please do not use our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use of Website</h2>
            <p>
              You agree to use our website only for lawful purposes and in a way that does not 
              infringe the rights of others or restrict their use of the website. You must not use 
              the website in any way that could damage, disable, or impair the website.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and images. However, we do not 
              warrant that product descriptions or other content on the website is accurate, complete, 
              reliable, current, or error-free. Product images are for illustrative purposes only.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Pricing and Payment</h2>
            <p>
              All prices are listed in Indian Rupees (INR) and are subject to change without notice. 
              We reserve the right to refuse or cancel any order at our discretion. Payment must be 
              made through the methods specified on our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Order Processing</h2>
            <p>
              When you place an order, you will receive an order confirmation. We reserve the right 
              to accept or reject your order. If we are unable to fulfill your order, we will notify 
              you and provide a full refund if payment has been processed.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Shipping and Delivery</h2>
            <p>
              We aim to process and ship orders promptly. Delivery times are estimates and may vary 
              based on location and other factors beyond our control. We are not liable for delays 
              caused by shipping carriers or other third parties.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of Puffora Naturals and is protected by copyright and other intellectual 
              property laws.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Puffora Naturals shall not be liable for any 
              indirect, incidental, special, or consequential damages arising from your use of the 
              website or products.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India. Any disputes arising from 
              these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
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

export default Terms;



