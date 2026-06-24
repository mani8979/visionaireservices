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
            <li><Link href="/architecture" className="hover:text-secondary transition-colors">Architecture</Link></li>
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

      {/* Developer Credit */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-center items-center gap-3 text-[10px] text-secondary/30 tracking-[0.15em]">
        <span className="normal-case">Developed by <span className="text-secondary/50 font-medium">Kalla Manibabu</span></span>
        <a
          href="https://wa.me/919581108448"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Kalla Manibabu on WhatsApp"
          className="flex items-center gap-1.5 text-[#25D366] hover:text-[#1ebe5d] transition-colors duration-200 normal-case"
          title="WhatsApp: +91 9581108448"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>+91 9581108448</span>
        </a>
      </div>
    </footer>
  );
}
