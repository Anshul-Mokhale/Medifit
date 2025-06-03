import { Component } from '@angular/core';

@Component({
  selector: 'app-adminorderdetails',
  imports: [],
  templateUrl: './adminorderdetails.component.html',
  styleUrl: './adminorderdetails.component.css'
})
export class AdminorderdetailsComponent {

  order = {
    orderNumber: 'TRK567890',
    orderDate: '18 May 2025',
    deliveryDate: '20 May 2025',
    paymentMode: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Delivered',
    customerId: '01',
    customerName: 'Test User',
    customerEmail: 'testuser@gmail.com',
    customerPhone: '8787878796',
    customerAddress: '104, Test Street, Main District, State, 404033',
    items: [
      { name: 'Paracetamol', quantity: 2, price: 30 },
      { name: 'Vitamin C Tablets', quantity: 1, price: 50 }
    ]
  };


  printDirectReceipt(order: any) {
    const receiptWindow = window.open('', '_blank', 'width=800,height=1000');

    if (!receiptWindow) {
      alert("Popup blocked. Please allow popups for this website.");
      return;
    }

    const itemsHtml = order.items.map((item: any, i: number) => `
    <tr style="background: ${i % 2 === 0 ? '' : ''};">
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${i + 1}</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${item.name}</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${item.quantity}</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">₹${item.price}</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">₹${item.price * item.quantity}</td>
    </tr>
  `).join('');

    const total = order.items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);

    const content = `
<html>
  <head>
    <title>MediFit Receipt</title>
    <style>
         body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f9fafb;
        padding: 40px;
        color: #111827;
        position: relative;
      }
      
      .watermark {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-35deg);
        font-size: 120px;
        color: rgba(37, 99, 235, 0.15);
        font-weight: 900;
        user-select: none;
        pointer-events: none;
        z-index: 0;
        white-space: nowrap;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.05);
        width: 100%;
        text-align: center;
      }
      
      .container {
        max-width: 800px;
        margin: auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        padding: 30px;
        position: relative;
        z-index: 1;
        overflow: hidden;
      }
      
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        position: relative;
      }
      
      .title {
        font-size: 24px;
        font-weight: 700;
        color: #503217;
      }
      
      .status {
        background-color: #d1fae5;
        color: #065f46;
        padding: 6px 16px;
        border-radius: 9999px;
        font-size: 14px;
        font-weight: 600;
      }
      
      .details {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 30px;
        gap: 20px;
      }
      
      .column {
        flex: 1 1 45%;
      }
      
      .label {
        font-weight: 600;
        color: #374151;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        position: relative;
      }
      
      th {
        text-align: left;
        padding: 12px;
        font-size: 14px;
        color: #374151;
        border: 1px solid #e5e7eb;
      }
      
      td {
        font-size: 14px;
      }
      
      .footer-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        position: relative;
      }
      
      .signature {
        text-align: center;
        font-size: 12px;
        color: #6b7280;
      }
      
      .signature img {
        height: 60px;
        margin-bottom: 4px;
      }
      
      .paid-stamp {
        position: relative;
        width: 120px;
        height: 120px;
        border: 4px dashed #22c55e;
        border-radius: 50%;
        color: #22c55e;
        font-size: 20px;
        font-weight: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        transform: rotate(-15deg);
        box-shadow: 0 0 0 3px #ecfdf5 inset;
        background: #f0fdf4;
        font-family: 'Courier New', Courier, monospace;
        opacity: 0.9;
      }
      
      .total-amount {
        font-weight: bold;
        font-size: 16px;
        text-align: right;
      }
      
      .thanks {
        text-align: center;
        margin-top: 40px;
        font-size: 14px;
        color: #6b7280;
        position: relative;
      }

      @media print {
        @page { margin: 0; }
        body { margin: 0.5cm; }
      }
    </style>
  </head>
<body onload="window.print(); window.close();">
    <div class="container">
      <div class="watermark">MEDIFIT</div>
      <div class="header">
        <div class="title"><img src = "https://res.cloudinary.com/dxaw17f4u/image/upload/v1745057617/medifit.png"><span class="bheading">Medifit</span></div>
        <div class="status">${order.status}</div>
      </div>

      <div class="details">
        <div class="column">
          <p><span class="label">Order ID:</span> ${order.orderNumber}</p>
          <p><span class="label">Order Date:</span> ${order.orderDate}</p>
          <p><span class="label">Delivery Date:</span> ${order.deliveryDate}</p>
          <p><span class="label">Payment Mode:</span> ${order.paymentMode}</p>
          <p><span class="label">Payment Status:</span> ${order.paymentStatus}</p>
        </div>
        <div class="column">
          <p><span class="label">Customer ID:</span> ${order.customerId}</p>
          <p><span class="label">Customer Name:</span> ${order.customerName}</p>
          <p><span class="label">Email:</span> ${order.customerEmail}</p>
          <p><span class="label">Phone:</span> ${order.customerPhone}</p>
          <p><span class="label">Address:</span> ${order.customerAddress}</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
          <tr>
            <td colspan="4" style="text-align:right; font-weight:bold; padding: 12px;">Grand Total</td>
            <td style="padding: 12px;">₹${total}</td>
          </tr>
        </tbody>
      </table>

      <div class="footer-section">
        <div class="signature">
          <img src="https://i.ibb.co/k9YVt9K/signature-demo.png" alt="signature">
          <div>Authorized Signature</div>
        </div>
        <div class="paid-stamp">PAID</div>
        <div class="total-amount">Total: ₹${total}</div>
      </div>

      <p class="thanks">Thank you for shopping with MediFit!</p>
    </div>
  </body>
</html>
`;

    receiptWindow.document.write(content);
    receiptWindow.document.close();
  }

}
