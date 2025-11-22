
import React from 'react';
import { Star, Bell, TrendingUp, Users, Check, MessageSquare, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-0 px-4 md:px-8 relative overflow-hidden min-h-screen flex flex-col items-center justify-start">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-[#67ba52]/10 rounded-full blur-[120px] animate-blob opacity-60 mix-blend-multiply"></div>
         <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-[#86efac]/20 rounded-full blur-[100px] animate-blob animation-delay-2000 opacity-60 mix-blend-multiply"></div>
         <div className="absolute bottom-[0%] left-[50%] -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-t from-[#67ba52]/5 to-transparent blur-[80px]"></div>
      </div>

      {/* Main Container - Widened */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-xs font-bold text-primary tracking-wide uppercase">La soluzione definitiva per Property Manager</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brandGray leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto">
          Gestisci i tuoi affitti. <br/>
          <span className="text-primary">Ovunque, in un attimo.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brandGray/70 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
          Rentigo ti aiuta a sincronizzare calendari, automatizzare i check-in e monitorare le entrate. Tutto in un'unica app semplice e potente.
        </p>

        {/* Official Store Badges - Made Smaller */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full sm:w-auto">
          
          {/* Apple App Store Badge */}
          <button className="bg-black text-white rounded-lg flex items-center px-4 py-2 hover:opacity-80 transition-opacity shadow-xl w-full sm:w-auto justify-center min-w-[160px] border border-white/10">
             <div className="mr-2.5">
               <svg viewBox="0 0 384 512" fill="white" className="w-6 h-6">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
               </svg>
             </div>
             <div className="text-left">
                <div className="text-[10px] leading-none font-medium mb-0.5">Download on the</div>
                <div className="text-xl font-semibold leading-none tracking-wide">App Store</div>
             </div>
          </button>

          {/* Google Play Badge */}
          <button className="bg-black text-white rounded-lg flex items-center px-4 py-2 hover:opacity-80 transition-opacity shadow-xl w-full sm:w-auto justify-center min-w-[160px] border border-white/10">
             <div className="mr-2.5">
                <svg viewBox="0 0 512 512" className="w-6 h-6">
                  <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
                  <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
                  <path fill="#FBBC05" d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"/>
                  <path fill="#EA4335" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
             </div>
             <div className="text-left">
                <div className="text-[10px] leading-none font-medium uppercase mb-0.5">Disponibile su</div>
                <div className="text-xl font-semibold leading-none tracking-wide">Google Play</div>
             </div>
          </button>
        </div>

        {/* PHONES CLUSTER */}
        <div className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[700px] flex justify-center perspective-1000">
            
            {/* Left Phone (Dark - Chat) - Static, with Frame */}
            <div className="hidden md:block absolute left-1/2 -translate-x-[130%] top-20 w-[260px] h-[540px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#2d2d2d] shadow-2xl rotate-[-12deg] z-10 overflow-hidden">
               
               {/* Notch Placeholder */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-50"></div>

               <div className="w-full h-full bg-[#3a403d] relative p-4 pt-12">
                  <div className="flex justify-between items-center text-gray-400 mb-6 mt-2 px-2">
                     <span className="text-xs font-bold text-white">Chat</span>
                     <Bell size={16} />
                  </div>
                  <div className="space-y-3">
                     <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">LG</div>
                           <div className="text-white text-sm font-bold">Luca G.</div>
                           <span className="text-[10px] text-gray-400 ml-auto">10:42</span>
                        </div>
                        <p className="text-xs text-gray-300 line-clamp-2">Ciao! A che ora è possibile effettuare il check-in domani?</p>
                     </div>
                     <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                           <img src="https://i.pravatar.cc/100?img=9" className="w-8 h-8 rounded-full border border-gray-600" alt="avatar" />
                           <div className="text-white text-sm font-bold">Sarah Smith</div>
                           <span className="text-[10px] text-gray-400 ml-auto">Ieri</span>
                        </div>
                        <p className="text-xs text-gray-300 line-clamp-2">The apartment is beautiful! We left the keys in the box.</p>
                     </div>
                     <div className="bg-white/10 p-3 rounded-xl border border-white/10 opacity-60">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs">MR</div>
                           <div className="text-white text-sm font-bold">Marco Rossi</div>
                           <span className="text-[10px] text-gray-400 ml-auto">Lun</span>
                        </div>
                        <p className="text-xs text-gray-300 line-clamp-2">Grazie mille per l'ospitalità.</p>
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#3a403d] to-transparent pointer-events-none"></div>
               </div>
            </div>

            {/* Right Phone (Light - Stats) - Static, with Frame */}
            <div className="hidden md:block absolute left-1/2 translate-x-[30%] top-20 w-[260px] h-[540px] bg-white rounded-[3rem] border-[8px] border-gray-200 shadow-2xl rotate-[12deg] z-10 overflow-hidden">
               
               {/* Notch Placeholder */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-50"></div>

               <div className="w-full h-full bg-gray-50 relative pt-8">
                  <div className="h-36 bg-[#67ba52]/10 p-5 rounded-b-[2rem] flex flex-col justify-end">
                     <div className="flex justify-between items-end">
                        <div>
                           <p className="text-xs text-gray-500 mb-1">Performance</p>
                           <h4 className="text-lg font-bold text-brandGray">Statistiche</h4>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                           <TrendingUp size={16} />
                        </div>
                     </div>
                  </div>
                  <div className="p-4 space-y-4">
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between mb-4">
                           <span className="text-xs font-bold text-gray-500">Occupazione</span>
                           <span className="text-xs font-bold text-primary bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
                        </div>
                        <div className="flex items-end gap-1 h-16 justify-between px-2">
                           {[40, 60, 45, 80, 70, 90, 65].map((h, i) => (
                              <div key={i} style={{height: `${h}%`}} className="w-3 bg-primary/40 rounded-t-sm"></div>
                           ))}
                        </div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                              <Users size={18} />
                           </div>
                           <div>
                              <p className="text-xs text-gray-400 font-bold">Nuovi Ospiti</p>
                              <p className="text-lg font-bold text-brandGray">1,240</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Center Phone (Main - Dashboard) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[340px] h-[680px] bg-white rounded-[4rem] border-[10px] border-brandGray shadow-[0_25px_60px_-15px_rgba(103,186,82,0.3)] z-20 overflow-hidden hover:scale-[1.01] transition-transform duration-500">
               
               {/* Dynamic Island Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl z-50"></div>

               <div className="w-full h-full bg-white flex flex-col relative">
                  
                  {/* App Header */}
                  <div className="pt-14 px-6 pb-6 bg-white z-10">
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                              <img src="https://i.pravatar.cc/100?img=33" alt="profile" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <p className="text-xs text-gray-400 font-medium">Bentornato,</p>
                              <p className="text-base font-bold text-brandGray">Alessandro</p>
                           </div>
                        </div>
                        <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                           <Bell size={20} />
                        </button>
                     </div>

                     {/* Balance Card - Updated Green */}
                     <div className="bg-[#67ba52] p-6 rounded-3xl text-white shadow-xl shadow-[#67ba52]/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <p className="text-white/90 text-xs font-medium mb-2">Totale Entrate</p>
                        <h3 className="text-4xl font-bold mb-6">€ 12.450</h3>
                        <div className="flex items-center gap-2">
                           <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-[#67ba52] text-[10px] font-bold">↗</div>
                              <span className="text-sm font-bold">+24%</span>
                           </div>
                           <span className="text-xs text-white/80">vs mese scorso</span>
                        </div>
                     </div>
                  </div>

                  {/* Scrollable List */}
                  <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-5">
                     
                     <div>
                        <h4 className="text-sm font-bold text-brandGray mb-4 flex justify-between items-center">
                           Prossimi Arrivi 
                           <span className="text-xs text-primary font-bold bg-emerald-50 px-3 py-1 rounded-full">Oggi</span>
                        </h4>
                        <div className="space-y-4">
                           {/* Item 1 */}
                           <div className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-4">
                              <div className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
                                 <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="apt" />
                              </div>
                              <div className="flex-1">
                                 <h5 className="text-base font-bold text-brandGray">Loft Milano</h5>
                                 <p className="text-xs text-gray-500">3 notti · Booking.com</p>
                              </div>
                              <div className="text-right">
                                 <span className="block text-sm font-bold text-brandGray">15:00</span>
                                 <span className="text-[10px] text-gray-400">Check-in</span>
                              </div>
                           </div>
                           
                           {/* Item 2 */}
                           <div className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-4 opacity-70">
                              <div className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
                                 <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="apt" />
                              </div>
                              <div className="flex-1">
                                 <h5 className="text-base font-bold text-brandGray">Villa Roma</h5>
                                 <p className="text-xs text-gray-500">5 notti · Airbnb</p>
                              </div>
                              <div className="text-right">
                                 <span className="block text-sm font-bold text-brandGray">11:00</span>
                                 <span className="text-[10px] text-gray-400">Check-out</span>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>

                  {/* Bottom Tab Bar */}
                  <div className="absolute bottom-6 left-6 right-6 bg-brandGray/95 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center shadow-2xl">
                     <div className="text-primary flex flex-col items-center gap-1">
                        <div className="w-10 h-1 bg-primary rounded-full absolute top-0"></div>
                        <div className="p-1"><Users size={22} /></div>
                     </div>
                     <div className="text-gray-400 p-1 hover:text-white transition-colors"><Calendar size={22} /></div>
                     <div className="text-gray-400 p-1 hover:text-white transition-colors"><MessageSquare size={22} /></div>
                     <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-600">
                        <img src="https://i.pravatar.cc/100?img=33" alt="p" />
                     </div>
                  </div>

               </div>
            </div>

            {/* Floating Widget Left */}
            <div className="absolute top-[15%] left-[0%] lg:left-[5%] xl:left-[10%] animate-float z-30 hidden xl:block">
               <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 pr-10 max-w-[240px]">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                     <Check size={24} strokeWidth={3} />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Stato</p>
                     <p className="text-base font-bold text-brandGray">Documenti Inviati</p>
                  </div>
               </div>
            </div>

             {/* Floating Widget Right */}
             <div className="absolute top-[25%] right-[0%] lg:right-[5%] xl:right-[10%] animate-float-delayed z-30 hidden xl:block">
               <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-[220px]">
                  <div className="flex items-center justify-between mb-3">
                     <span className="text-xs font-bold text-gray-400">Review</span>
                     <div className="flex text-yellow-400"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                  </div>
                  <p className="text-sm font-bold text-brandGray italic leading-snug">"App fantastica, mi ha salvato la stagione!"</p>
                  <div className="flex items-center gap-2 mt-4">
                     <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                     <span className="text-xs text-gray-500 font-bold">Marco R.</span>
                  </div>
               </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
