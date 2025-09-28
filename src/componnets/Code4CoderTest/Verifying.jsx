import React, { useEffect } from "react";
import { Loader2 } from "lucide-react"; // spinner icon

export default function Verifying() {
    useEffect(() => {
        // you could also call an API here to verify UTR
        // but right now we just show loading
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0b0b3e] to-black text-white">
            <div className="bg-white/10 p-8 rounded-2xl shadow-lg flex flex-col items-center">
                <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
                <h1 className="mt-6 text-2xl font-bold">Verifying Payment...</h1>
                <p className="mt-2 text-gray-300 text-center">
                    Please wait while we verify your UTR and confirm your payment.
                    This may take a few seconds.
                </p>
            </div>
        </div>
    );
}


// <div className="flex flex-col items-center justify-center flex-1 p-6">
//   <h1 className="text-2xl font-bold text-blue-400 mb-4">
//     🔄 Verifying your UTR...
//   </h1>
//   <p className="text-gray-300">Please wait a moment.</p>
// </div>