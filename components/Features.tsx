import React from 'react';
import { Zap, Globe, Key, BarChart3, Smartphone, ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative z-10">
      {/* Widened container */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Funzionalità Potenti</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-brandGray mb-6">
            Tutto sotto controllo. <br/>
            <span className="text-primary">Davvero tutto.</span>
          </h3>
          <p className="text-gray-500 text-xl leading-relaxed">
            Dimentica il caos di file Excel e messaggi sparsi. Rentigo unifica ogni aspetto della gestione immobiliare in una dashboard elegante e verde.
          </p>
        </div>

        {/* BENTO GRID LAYOUT - Widened & Colors Updated */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[320px]">
          
          {/* Large Card 1 - Channel Manager */}
          <div className="bento-card md:col-span-2 lg:col-span-2 p-10 relative overflow-hidden group flex flex-col justify-between bg-[#f8fcf7] border-emerald-100/50">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#67ba52]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#67ba52]/20 transition-colors"></div>
             
             <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-emerald-100">
                   <Globe size={28} />
                </div>
                <h4 className="text-2xl font-bold text-brandGray mb-3">Channel Manager</h4>
                <p className="text-gray-500 max-w-sm text-lg">Sincronizzazione in tempo reale con Booking, Airbnb, VRBO e Expedia. Zero overbooking, garantito.</p>
             </div>
             
             <div className="mt-6 flex gap-3 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                <div className="bg-white px-4 py-1.5 rounded-lg shadow-sm text-sm font-bold text-blue-600 border border-gray-100">Booking.com</div>
                <div className="bg-white px-4 py-1.5 rounded-lg shadow-sm text-sm font-bold text-rose-500 border border-gray-100">Airbnb</div>
                <div className="bg-white px-4 py-1.5 rounded-lg shadow-sm text-sm font-bold text-gray-700 border border-gray-100">Expedia</div>
             </div>
          </div>

          {/* Tall Card - Automation */}
          <div className="bento-card md:col-span-1 lg:row-span-2 p-10 bg-brandGray text-white flex flex-col relative overflow-hidden group">
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent"></div>
             
             <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-primary">
                <Zap size={28} />
             </div>
             <h4 className="text-2xl font-bold mb-2">Automazione Totale</h4>
             <p className="text-gray-400 text-base mb-10">Metti il pilota automatico al tuo business.</p>

             <div className="space-y-5 flex-1">
                {[
                    "Invio codici accesso",
                    "Messaggi di benvenuto",
                    "Richiesta recensioni",
                    "Comunicazione polizia",
                    "Calcolo tassa soggiorno"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <ArrowUpRight size={14} />
                        </div>
                        {item}
                    </div>
                ))}
             </div>
          </div>

          {/* Small Card - Analytics */}
          <div className="bento-card p-10 flex flex-col justify-center items-center text-center group hover:bg-primary hover:border-primary transition-colors cursor-pointer">
             <div className="w-14 h-14 rounded-2xl bg-[#f8fcf7] flex items-center justify-center mb-6 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors border border-emerald-100 group-hover:border-transparent">
                <BarChart3 size={28} />
             </div>
             <h4 className="text-2xl font-bold text-brandGray group-hover:text-white mb-2">Analytics</h4>
             <p className="text-base text-gray-500 group-hover:text-white/80">Monitora il ROI in tempo reale.</p>
          </div>

          {/* Wide Card - Mobile App */}
          <div className="bento-card md:col-span-2 p-10 flex items-center justify-between relative overflow-hidden">
              <div className="relative z-10 max-w-[60%]">
                 <div className="w-14 h-14 rounded-2xl bg-[#f8fcf7] flex items-center justify-center mb-6 text-primary border border-emerald-100">
                    <Smartphone size={28} />
                 </div>
                 <h4 className="text-2xl font-bold text-brandGray mb-3">App Mobile Nativa</h4>
                 <p className="text-gray-500 text-lg">Gestisci le tue proprietà anche mentre sei in spiaggia. Tutto a portata di tap.</p>
              </div>
              <div className="absolute right-[-30px] bottom-[-50px] w-48 h-72 bg-brandGray rounded-2xl rotate-[-10deg] border-4 border-gray-700 shadow-lg group-hover:rotate-0 transition-transform duration-500">
                 <div className="p-5">
                    <div className="w-full h-3 bg-gray-600 rounded mb-3"></div>
                    <div className="w-2/3 h-3 bg-gray-600 rounded"></div>
                    <div className="mt-6 w-full h-24 bg-primary/20 rounded-xl border border-primary/30"></div>
                 </div>
              </div>
          </div>

          {/* Small Card - Checkin */}
          <div className="bento-card p-10 flex flex-col justify-center items-center text-center group hover:bg-[#84cc16] hover:border-[#84cc16] transition-colors cursor-pointer">
             <div className="w-14 h-14 rounded-2xl bg-[#fcfdec] flex items-center justify-center mb-6 text-[#84cc16] group-hover:bg-white/20 group-hover:text-white transition-colors border border-lime-100 group-hover:border-transparent">
                <Key size={28} />
             </div>
             <h4 className="text-2xl font-bold text-brandGray group-hover:text-white mb-2">Self Check-in</h4>
             <p className="text-base text-gray-500 group-hover:text-white/80">Niente più attese per le chiavi.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;