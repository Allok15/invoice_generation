import React from "react";

const InvoicePreview = ({ invoiceData, calculateTotal }) => (
  <div className="mb-4">
    <h1 className="mb-4">Invoice Preview</h1>
    <p>
      <strong>Date:</strong> {invoiceData.date}
    </p>
    <p>
      <strong>Company:</strong> {invoiceData.company}
    </p>
    <p>
      <strong>Address:</strong> {invoiceData.address}
    </p>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {invoiceData.items.map((item, index) => (
          <tr key={index}>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.quantity * item.price}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td>
            <strong>Total</strong>
          </td>
          <td>
            <strong>{calculateTotal(invoiceData.items)}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default InvoicePreview;
