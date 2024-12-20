import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      icon: "/icons/image-_5_.ico",
      name: "فودافون كاش",
      description: "ادفع بسهولة عبر محفظة فودافون كاش",
      bgColor: "bg-red-500/10"
    },
    {
      icon: "/icons/image-_4_.ico",
      name: "بطاقة فيزا/ماستركارد",
      description: "ادفع باستخدام بطاقتك البنكية",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: "/icons/image-_2_.ico",
      name: "إنستا باي",
      description: "الدفع السريع عبر إنستا باي",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: "/icons/image-_3_.ico",
      name: "تحويل بنكي",
      description: "حول المبلغ مباشرة إلى حسابنا البنكي",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section className="py-16 bg-secondary border-y border-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">طرق الدفع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-accent/80 backdrop-blur-xl rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/10 flex flex-col items-center"
            >
              <div className="mb-4">
                <img 
                  src={method.icon}
                  alt={method.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{method.name}</h3>
              <p className="text-primary-light/80">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;