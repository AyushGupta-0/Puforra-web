import './Policy.css';

function RefundPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="container">
          <h1 className="page-title">Refund Policy</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-content">
        <div className="container">
          <section className="policy-section">
            <h2>1. Refund Eligibility</h2>
            <p>
              Puffora Naturals offers refunds for products that meet our return policy criteria. 
              Refunds are processed for defective products, damaged items during transit, or products 
              that do not meet quality standards.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Refund Scenarios</h2>
            <p>We provide refunds in the following cases:</p>
            <ul>
              <li>Product received is damaged or defective</li>
              <li>Wrong product delivered</li>
              <li>Product quality does not meet our standards</li>
              <li>Returned product meets all return policy conditions</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Refund Processing Time</h2>
            <p>
              Refunds are typically processed within 5-7 business days after we receive and inspect 
              the returned product. The refund will be credited to your original payment method. 
              Please note that it may take additional time for the refund to appear in your account, 
              depending on your bank or payment provider.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Refund Amount</h2>
            <p>
              The refund amount will include the product price. Shipping charges are non-refundable 
              unless the return is due to our error (wrong product, defective item, etc.).
            </p>
          </section>

          <section className="policy-section">
            <h2>5. How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Contact us immediately at pufforanaturals@gmail.com or 9217017363</li>
              <li>Provide your order number and details of the issue</li>
              <li>Include photos if the product is damaged or defective</li>
              <li>Our customer service team will review and process your refund request</li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>6. Non-Refundable Items</h2>
            <p>Refunds will not be provided for:</p>
            <ul>
              <li>Products consumed or opened (unless defective)</li>
              <li>Returns initiated after the return period</li>
              <li>Products damaged due to customer negligence</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Contact Us</h2>
            <p>
              For refund inquiries, please contact us at:
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

export default RefundPolicy;




