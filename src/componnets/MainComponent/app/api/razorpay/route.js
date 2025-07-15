import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req, res) {
  try {
    var instance = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const { amount, currency, receipt } = await req.json(); // await req.json() to get the actual options
    
    const order = await instance.orders.create({
      amount: amount * 100,
      currency,
      receipt,
    });
    console.log(`Razorpay Order Response: ${order}`); // Log the response

    if (!order) {
      return NextResponse.json({
        status: 500,
        body: { error: "Error creating order" },
      });
    }

    return NextResponse.json({ status: 200, body: order });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({
      status: 500,
      body: { error: "Internal server error" },
    });
  }
}
