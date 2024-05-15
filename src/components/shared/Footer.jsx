const Footer = () => {
  return (
    <footer className="relative">
      <div className="grid gap-8 lg:grid-cols-3 grid-cols-2 justify-center p-10 bg-[#3A415A] text-white">
        <aside className="lg:col-span-1 col-span-2 lg:text-left text-center">
          <img src="/logo.png" alt="" className="size-24" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <div className="flex justify-center">
          <nav className="flex flex-col">
            <h6 className="footer-title opacity-100">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Need Volunteer</a>
            <a className="link link-hover">About Us</a>
          </nav>
        </div>
        <div className="flex justify-center">
          <nav className="flex flex-col">
            <h6 className="footer-title opacity-100">Contact Us</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
