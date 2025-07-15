import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");

  if (digest !== razorpay_signature) {
    return NextResponse.json({
      body: { msg: "Transaction is not legit" },
      status: 400,
    });
  }
  return NextResponse.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    status: 200
  });
}
