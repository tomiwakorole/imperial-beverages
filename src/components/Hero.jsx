import "../styles/Hero.css";
import heroVideo from "../assets/videos/hero-video.mp4";
import { useRef, useEffect } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Ensure muted before attempting autoplay (browser policies)
    v.muted = true;
    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay was prevented; ignore silently (fallbacks can be added)
      });
    }
  }, []);

  return (
    <section className="hero">

      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>IMPERIAL BEVERAGES</h1>
         <p className="hero-est">
          Established • 2019
        </p>
        <h2>
          Refreshing Lives,One Bottle at a Time

        </h2>

        <div className="social-links">
            <a href="https://www.instagram.com/tomi.juice"
             target="_blank">Tomi</a>
            <span>•</span>

            <a href="https://instagram.com/imperialcrownjuice"
            target="_blank">Imperial Crown</a>
            <span>•</span>

            <a href="https://instagram.com/blackstalliondrink"
             target="_blank">Black Stallion</a>
         </div>


        <div className="hero-buttons">

          {/* <button className="primary-btn">
            Explore Products
          </button>

          <button className="secondary-btn">
            Our Story
          </button> */}

        </div>

        {/* <div className="scroll">
          ↓ Scroll
        </div> */}

      </div>

    </section>
  );
}

export default Hero;