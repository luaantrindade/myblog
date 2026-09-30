import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-background/90 backdrop-blur sticky top-0 z-50 border-b border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-start gap-4">
          <Link href="/" className="text-xl font-bold text-primary">
            AI Engineer
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`
                text-muted hover:text-primary transition-colors
                ${theme === "dark" ? "dark:" : ""}
              `}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`
                text-muted hover:text-primary transition-colors
                ${theme === "dark" ? "dark:" : ""}
              `}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={`
                text-muted hover:text-primary transition-colors
                ${theme === "dark" ? "dark:" : ""}
              `}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`
                text-muted hover:text-primary transition-colors
                ${theme === "dark" ? "dark:" : ""}
              `}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`
                text-muted hover:text-primary transition-colors
                ${theme === "dark" ? "dark:" : ""}
              `}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-muted/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-muted" />
            ) : (
              <Moon className="h-4 w-4 text-muted" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
