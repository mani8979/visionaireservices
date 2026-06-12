import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.jpeg" alt="Visionaire Logo" width={56} height={56} className="rounded-full object-cover shadow-sm" />
            <span className="font-serif text-xl md:text-2xl tracking-widest uppercase font-bold text-secondary">
              Visionaire
              <span className="block text-[8px] md:text-[10px] font-sans tracking-[0.2em] font-normal text-secondary/60 mt-1">
                ENGINEERING & INTERIORS
              </span>
            </span>
          </div>
          <p className="mt-8 text-sm text-secondary/70 leading-relaxed font-light">
            Our efforts for you. Our customer is always King. INFINITY THOUGHTS END TO END SERVICES.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg mb-8 tracking-wide text-accent">Services</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide text-secondary/70">
            <li><Link href="/constructions" className="hover:text-secondary transition-colors">Constructions</Link></li>
            <li><Link href="/interiors" className="hover:text-secondary transition-colors">Interiors</Link></li>
            <li><Link href="/false-ceiling" className="hover:text-secondary transition-colors">False Ceiling</Link></li>
            <li><Link href="/profile-lighting" className="hover:text-secondary transition-colors">Profile Lighting</Link></li>
            <li><Link href="/putty-painting" className="hover:text-secondary transition-colors">Putty Painting</Link></li>
          </ul>
        </div>



        {/* Contact */}
        <div id="contact">
          <h4 className="font-serif text-lg mb-8 tracking-wide text-accent">Contact</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide text-secondary/70">
            <li>+91 95222 98777</li>
            <li>www.visionaireservices.com</li>
            <li>connect@visionaireservices.com</li>
            <li className="leading-relaxed">Plot No: 960, Beside Aditya Fortuner Near Kushi Shop,<br/>Midhilapuri Vuda Colony,<br/>Madhurawada, Visakhapatnam - 530041</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-secondary/40 uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Visionaire Engineering & Interiors. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
