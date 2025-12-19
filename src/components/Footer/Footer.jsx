import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Harsh. Designed & built with care.
      </p>
    </footer>
  );
}
