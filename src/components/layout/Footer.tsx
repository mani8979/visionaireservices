import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        {/* Brand */}
        <div className="md:col-span-1">
          <span className="font-serif text-2xl tracking-widest uppercase font-bold text-secondary">
            Visionaire
            <span className="block text-[10px] font-sans tracking-[0.3em] font-normal text-secondary/60 mt-1">
              SERVICES
            </span>
          </span>
          <p className="mt-8 text-sm text-secondary/70 leading-relaxed font-light">
            Modern architecture and construction solutions designed with precision, elegance, and functionality. We transform ideas into premium environments.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg mb-8 tracking-wide text-accent">Services</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide text-secondary/70">
            <li><Link href="/constructions" className="hover:text-secondary transition-colors">Constructions</Link></li>
            <li><Link href="/interiors" className="hover:text-secondary transition-colors">Interiors</Link></li>
            <li><Link href="/finishing-details" className="hover:text-secondary transition-colors">False Ceiling</Link></li>
            <li><Link href="/finishing-details" className="hover:text-secondary transition-colors">Profile Lighting</Link></li>
            <li><Link href="/finishing-details" className="hover:text-secondary transition-colors">Putty Painting</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-serif text-lg mb-8 tracking-wide text-accent">Company</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide text-secondary/70">
            <li><Link href="/" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/" className="hover:text-secondary transition-colors">Our Process</Link></li>
            <li><Link href="/" className="hover:text-secondary transition-colors">Projects</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <h4 className="font-serif text-lg mb-8 tracking-wide text-accent">Contact</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide text-secondary/70">
            <li>+91 77805 94495</li>
            <li>contact@visionaireservices.com</li>
            <li className="leading-relaxed">123 Architecture Blvd,<br/>Suite 400<br/>Design City, NY 10001</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-secondary/40 uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Visionaire Services. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
