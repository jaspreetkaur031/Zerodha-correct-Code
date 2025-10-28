import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// --- You may want to add some CSS for this table ---
// import "./Orders.css"; 

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders when component mounts
    axios.get("http://localhost:3002/allOrders")
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => {
        console.error("Error fetching orders:", err);
      });
  }, []); // Empty dependency array runs this only once

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container" style={{ padding: "20px" }}>
      <h3>Orders</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #eee", textAlign: "left" }}>
            <th style={{ padding: "8px" }}>Name</th>
            <th style={{ padding: "8px" }}>Mode</th>
            <th style={{ padding: "8px" }}>Qty</th>
            <th style={{ padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <td style={{ padding: "8px" }}>{order.name}</td>
              <td style={{ padding: "8px", color: order.mode === "BUY" ? "green" : "red" }}>
                {order.mode}
              </td>
              <td style={{ padding: "8px" }}>{order.qty}</td>
              <td style={{ padding: "8px" }}>{order.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;