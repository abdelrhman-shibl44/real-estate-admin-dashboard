export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container-fluid py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-0">
          © {new Date().getFullYear()} Real Estate Admin Dashboard
        </p>

        <div className="d-flex gap-3 mt-2 mt-md-0">
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
