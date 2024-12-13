import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/about" className="text-white hover:text-primary-light">
            About
          </Link>
          <a
            href="#"
            className="text-white hover:text-primary-light"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-white">
            &copy; {new Date().getFullYear()} Skillbridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}