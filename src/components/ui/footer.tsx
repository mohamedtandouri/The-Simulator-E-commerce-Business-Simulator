import { Link } from "react-router-dom";
import { Calculator, Github, Twitter, Linkedin } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Simulator</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The best E-commerce business simulator for your needs
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-primary">About Us</Link>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
              <Link to="/faq" className="hover:text-primary">FAQ</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Tools</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link to="/simulator" className="hover:text-primary">Simulator</Link>
              <Link to="/calculator" className="hover:text-primary">Calculator</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link to="/legal" className="hover:text-primary">Legal</Link>
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Simulator. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};