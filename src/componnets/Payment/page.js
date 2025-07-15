// import Razorpay from "razorpay";

export const paymentHandler = async (price, proName) => {
  const amount = price* 100;

  const receiptId = `code4coder123`;
    // const response = await fetch("/api/razorpay", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     amount,
  //     currency: "INR",
  //     receipt: receiptId,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const order = await response.json();
  // var options = {
  //   key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
  //   amount: order.body.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //   currency: order.currency,
  //   name: "Code4Coder",
  //   description: "Test Transaction",
  //   image:
  //     "https://www.commatechs.in/_next/image?url=%2Fimg%2FComma-tech-logop.png&w=384&q=75",
  //   order_id: order.body.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //   handler: async function (response) {
  //     const body = {
  //       ...response,
  //     };

  //     const validateRes = await fetch("/api/order/validate", {
  //       method: "POST",
  //       body: JSON.stringify(body),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const validate = await validateRes.json();
  //   },
  //   prefill: {
  //     product: proName,
  //   },
  //   notes: {
  //     address: "Razorpay Corporate Office",
  //   },
  //   theme: {
  //     color: "#3399cc",
  //   },
  // };
  // var rzp1 = new Razorpay(options);
  // rzp1.on("payment.failed", function (response) {
  //   toast.error("Payment Failed");
  // });
  // rzp1.open();
};
