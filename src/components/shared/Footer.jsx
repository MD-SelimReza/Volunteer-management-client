const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#3A415A] text-white">
      <aside>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title opacity-100">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Need Volunteer</a>
        <a className="link link-hover">About Us</a>
      </nav>
      <nav>
        <h6 className="footer-title opacity-100">Contact Us</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title opacity-100">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
