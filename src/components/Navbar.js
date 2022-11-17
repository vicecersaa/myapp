export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>FORLAND LIVING</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}