import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="wordmark" aria-label="Luan Trindade, home">
          luan<span>.</span>
        </Link>
        <p>Notes on making complex systems work better.</p>
        <div className="footer-links">
          <a href="mailto:luan@luantrindade.com">Email</a>
          <a href="https://github.com/luaantrindade" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://linkedin.com/in/luantrindade" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Luan Trindade</span>
      </div>
    </footer>
  );
}
