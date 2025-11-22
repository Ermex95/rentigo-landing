
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brandGray selection:bg-[#67ba52]/20 selection:text-brandGray overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Rounded CTA Section - Widened */}
        <section id="testimonials" className="py-20 px-4 md:px-8">
          <div className="w-full max-w-[1600px] mx-auto">
             <div className="bg-brandGray rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brandGray/20">
                
                {/* Abstract shapes in CTA - Updated Colors */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86efac]/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    Pronto a scalare il tuo business?
                  </h2>
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 font-light leading-relaxed">
                    Unisciti a migliaia di host che hanno scelto Rentigo per automatizzare il loro business. Provalo gratuitamente per 14 giorni.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <button className="bg-primary text-white px-12 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl hover:shadow-primary/30 hover:bg-primaryDark text-lg">
                       Inizia la prova gratuita
                    </button>
                    <button className="bg-transparent border border-gray-600 text-white px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all text-lg">
                       Contatta il team
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm mt-10">Nessuna carta di credito richiesta • Cancellazione gratuita</p>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
