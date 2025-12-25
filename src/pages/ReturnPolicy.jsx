import './Policy.css';

function ReturnPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="container">
          <h1 className="page-title">Return Policy</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-content">
        <div className="container">
          <section className="policy-section">
            <h2>1. Return Eligibility</h2>
            <p>
              At Puffora Naturals, we stand behind the quality of our products. If you are not 
              satisfied with your purchase, you may return it within 7 days of delivery, provided 
              the product is unopened and in its original packaging.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Conditions for Returns</h2>
            <p>To be eligible for a return, the following conditions must be met:</p>
            <ul>
              <li>Product must be unopened and in original packaging</li>
              <li>Return request must be made within 7 days of delivery</li>
              <li>Product must be in saleable condition</li>
              <li>Original invoice or proof of purchase must be provided</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Return Process</h2>
            <p>To initiate a return:</p>
            <ol>
              <li>Contact us at pufforanaturals@gmail.com or call 9217017363</li>
              <li>Provide your order number and reason for return</li>
              <li>Our team will review your request and provide return instructions</li>
              <li>Ship the product back to us using the provided return address</li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>4. Refund Processing</h2>
            <p>
              Once we receive and inspect the returned product, we will process your refund to the 
              original payment method within 5-7 business days. You will receive a confirmation 
              email once the refund has been processed.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul>
              <li>Opened or partially consumed products</li>
              <li>Products damaged due to customer mishandling</li>
              <li>Products returned after 7 days of delivery</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Contact Us</h2>
            <p>
              For any questions about returns, please contact us at:
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

export default ReturnPolicy;

