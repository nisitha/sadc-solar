import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Mail, Phone, MapPin, Send, User, MessageSquare, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Page Header with Cinematic Background */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/uploads/2021/08/solarpower.webp" 
            alt="Solar Projects Angola" 
            className="w-full h-full object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left">
          <SectionReveal>
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-primary/30">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
              Let's Engineer Your <br />
              <span className="text-primary">Energy Independence</span>
            </h1>
            <p className="text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Have questions about our technology or need a custom quote? Reach out to our specialist team in Luanda.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Details & Map */}
            <SectionReveal className="space-y-16">
              <div className="space-y-10">
                <ContactDetail 
                  icon={Mail} 
                  title="EMAIL INQUIRY" 
                  detail="solutions@sadcsolar.com"
                  subtext="Response within 24 business hours"
                />
                <ContactDetail 
                  icon={Phone} 
                  title="CALL SPECIALISTS" 
                  detail="+244 923 512 645"
                  subtext="Mon-Fri: 08:00 - 17:00 WAT"
                />
                <ContactDetail 
                  icon={MapPin} 
                  title="OUR HEADQUARTERS" 
                  detail="Luanda, Angola"
                  subtext="SADC Solar Energy HQ"
                />
              </div>

              {/* Map Embed */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-gray-100 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126131.7562810411!2d13.151740947620023!3d-8.847138379435647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c61%3A0x9c196c342f790938!2sLuanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1714900000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg text-[10px] font-black tracking-widest text-gray-900 uppercase">
                  View Large Map
                </div>
              </div>
            </SectionReveal>

            {/* Right Column: Request a Proposal Form */}
            <SectionReveal>
              <div className="bg-white rounded-[2.5rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] p-10 border border-gray-100">
                <div className="mb-10">
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-4 flex items-center">
                    Request a Proposal
                    <div className="ml-4 h-[2px] w-12 bg-primary/20 rounded-full" />
                  </h3>
                  <p className="text-gray-500 font-medium">Please fill out the form below and an engineer will contact you shortly.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput icon={User} placeholder="Full Name" type="text" />
                    <FormInput icon={Mail} placeholder="Email Address" type="email" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput icon={Phone} placeholder="+244 9XX XXX XXX" type="tel" />
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <CheckCircle2 className="h-5 w-5 text-gray-300 group-focus-within:text-primary transition-colors" />
                      </div>
                      <select className="block w-full pl-11 pr-10 py-4 bg-gray-50 border-none rounded-2xl text-gray-600 font-medium focus:ring-2 focus:ring-primary appearance-none transition-all">
                        <option value="">Interested Service</option>
                        <option value="residential">Residential Solar</option>
                        <option value="commercial">Commercial Solar</option>
                        <option value="off-grid">Off-grid Solutions</option>
                        <option value="water-pumps">Solar Water Pumps</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-300 group-focus-within:text-primary transition-colors" />
                    </div>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-gray-600 font-medium focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <button className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-center uppercase tracking-[0.2em] text-sm">
                    Send Request
                    <Send className="ml-3 h-5 w-5" />
                  </button>
                </form>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactDetail({ icon: Icon, title, detail, subtext }: { icon: any, title: string, detail: string, subtextText?: string, subtext: string }) {
  return (
    <div className="flex items-start space-x-6 group">
      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <div>
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</div>
        <div className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">{detail}</div>
        <div className="text-sm text-gray-500 font-medium mt-1">{subtext}</div>
      </div>
    </div>
  );
}

function FormInput({ icon: Icon, placeholder, type }: { icon: any, placeholder: string, type: string }) {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-300 group-focus-within:text-primary transition-colors" />
      </div>
      <input 
        type={type} 
        placeholder={placeholder}
        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-gray-600 font-medium focus:ring-2 focus:ring-primary transition-all"
      />
    </div>
  );
}
