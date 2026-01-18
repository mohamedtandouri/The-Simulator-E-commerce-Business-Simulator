
import { Link } from "react-router-dom";
import { 
  Sun, 
  Moon, 
  Github, 
  Twitter, 
  Linkedin,
  Menu,
  X,
  User,
  Calculator
} from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));
  const username = localStorage.getItem("username") || localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Calculator className="h-6 w-6" />
            <span>Simulator</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link to="/calculator" className="text-sm font-medium hover:text-primary">
              Calculator
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
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

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-primary"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{username}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link to="/calculator" className="block py-2 text-sm font-medium hover:text-primary">
              Calculator
            </Link>
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 py-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{username}</span>
                </div>
                <Button variant="ghost" className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="block">
                  <Button variant="ghost" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" className="block">
                  <Button variant="default" className="w-full">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
