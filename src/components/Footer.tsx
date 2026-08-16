// React default import removed (not referenced)
import { Hexagon, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">
                NEXUS<span className="text-primary">.AI</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Pioneering the future of digital experiences with advanced
              artificial intelligence solutions and autonomous agents.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chatbots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Websites
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Nexus AI Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
