import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-24 pb-12">
      {/* Widened container */}
      <div className="w-full max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
               {/* Custom SVG Logo Rentigo Small - Updated Colors */}
               <div className="relative w-8 h-8 group-hover:scale-105 transition-transform duration-300">
                  <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.5" y="2.5" width="35" height="35" rx="9.5" stroke="#67ba52" strokeWidth="4" fill="white"/>
                    <path d="M20 9L11 17.5V28.5C11 29.6046 11.8954 30.5 13 30.5H27C28.1046 30.5 29 29.6046 29 28.5V17.5L20 9Z" stroke="#4a524f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="17" y="22" width="6" height="6" rx="1.5" fill="#67ba52"/>
                  </svg>
               </div>
               <span className="text-2xl font-bold text-brandGray font-sans">Rentigo</span>
            </a>
            <p className="text-gray-500 leading-relaxed max-w-sm text-base">
              La piattaforma preferita dai Property Manager italiani. Semplifica, automatizza e cresci con il verde.
            </p>
            <div className="flex gap-4 pt-2">
               <button className="p-3 bg-gray-50 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group text-gray-400">
                 <Twitter size={18} />
               </button>
               <button className="p-3 bg-gray-50 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 group text-gray-400">
                 <Instagram size={18} />
               </button>
               <button className="p-3 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group text-gray-400">
                 <Linkedin size={18} />
               </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-brandGray font-bold mb-6 text-lg">Prodotto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Funzionalità</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrazioni</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prezzi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Novità</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-brandGray font-bold mb-6 text-lg">Risorse</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guida Host</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Supporto</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-brandGray font-bold mb-6 text-lg">Legale</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termini</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">© 2024 Rentigo Inc. Tutti i diritti riservati.</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 text-sm font-bold text-brandGray hover:text-primary transition-colors">
            Torna su <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;