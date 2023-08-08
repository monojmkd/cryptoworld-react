import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  
  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link  href="/">
            <p onClick={goTop}>CRYPTOWORLD</p>
          </Link>
          <ul>
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#market">Market</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#choose-us">Choose Us</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#join">Join</AnchorLink>
            </li>
          </ul>
          <span>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
            {/* mobile */}
            <i
              onClick={openMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
            ></i>
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          <li onClick={openMobile}>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li onClick={openMobile}>
            <AnchorLink href="#market">Market</AnchorLink>
          </li>
          <li onClick={openMobile}>
            <AnchorLink href="#choose-us">Choose Us</AnchorLink>
          </li>
          <li onClick={openMobile}>
            <AnchorLink href="#join">Join</AnchorLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
