

function info() {
  return (
    <div>
      <h1 className="heading-info">INFO</h1>
      <div className="timing">
        <h3>Canteen Availability</h3>
        <p>Canteen Timing: 9:00 AM – 6:00 PM</p>
        <p>Closed on Sundays.</p>
      </div>

      <hr />

      <div className="paymentMethod">
        <h3> Accepted Payment Methods</h3>
        <p>Mention the payment options supported:</p>
        <ul>
          <li>Online payments via UPI, credit/debit cards, and wallets.</li>
          <li>Cash while reciving the food.</li>
        </ul>
      </div>

      <hr />

      <div className="faq">
        <h3>FAQs(Frequently Asked Questions)</h3>
        <ul><li><strong>Can I cancel my order?</strong> <br />
          Yes, but only within 2 minutes of placing it</li>
          <li><strong>What happens if my order is delayed?</strong><br />
            Our staff ensures timely delivery. In case of delays, you’ll be notified via the website or app.</li>
          <li><strong>Is there a delivery option?</strong><br />
            Currently, orders are for pickup only.
          </li></ul>
      </div>
    </div>
  )
}

export default info
