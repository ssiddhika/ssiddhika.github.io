import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <div className="navbar navbar-portfolio relative z-50 min-h-16 px-4 lg:px-8">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl font-heading font-semibold text-portfolio-text hover:text-portfolio-primary"
        >
          Siddhika
        </Link>
      </div>
      <div className="navbar-end gap-1">
        <ThemeToggle />
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 p-0 font-medium text-portfolio-muted">
            <li>
              <Link href="/" className="hover:text-portfolio-primary rounded-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-portfolio-primary rounded-lg">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-portfolio-primary rounded-lg">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-portfolio-primary rounded-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-portfolio-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-soft bg-card border border-soft rounded-portfolio w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
