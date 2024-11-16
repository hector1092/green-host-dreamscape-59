import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-lg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-4">Green Host</h3>
            <p className="text-gray-400">
              نقدم أفضل خدمات الاستضافة بأسعار تنافسية مع دعم فني متميز
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span>support@greenhost.com</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span>+20 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">تابعنا</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Green Host. جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

export default Footer;