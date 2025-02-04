import './orderHistory.css'

function OrderHistory() {
    const orderHistory = [
        {
            id: 1,
            items: ['Samosa', 'Chai'],
            date: "2020-01-01",
            total: 100.00,
        },
        {
            id: 2,
            date: '2024-12-29',
            items: ['Paneer Chilli', 'Veg Fried Rice', 'Coffee'],
            total: 155,
        },
        {
            id: 3,
            date: '2024-12-30',
            items: ['Veg Chowmein', 'Sandwich'],
            total: 100,
        },
    ];
    return (
        <div className="order-history-container">
            <h1>Order History</h1>
            {orderHistory.map((order) => (

                <div key={order.id} className="order-card">
                    <div className="order-header">
                        <span className="order-date">Date: {order.date}</span>
                        <span className="order-id">Order ID: #{order.id}</span>
                    </div>

                    <div className="order-items">
                        <h3>Items:</h3>
                        <ul>
                            {order.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-total">
                        <strong>Total: ₹{order.total}</strong>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory
