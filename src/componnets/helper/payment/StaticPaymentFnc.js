

var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
    
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };
  
  
  
export const displayRozarPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
  
    if (!res) {
      alert("You are offline....Failed to load Razorpay sdk");
      return;
    }
  
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: "INR",
      amount: amount * 100,
      name: "code4coder.com",
      description: "Thanks for purchase",
      img: "apple.png",
  
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        alert("payment is successfull");
      },
      prefill: {
        name: "code4coder.com",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  