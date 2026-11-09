import "../styles/Hero.css";
import heroVideo from "../assets/videos/hero-video.mp4";
import { useRef, useEffect } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.setAttribute("muted", "true");
    v.setAttribute("playsinline", "true");
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("controls", "false");

    const attemptAutoplay = async () => {
      try {
        v.currentTime = 0;
        await v.play();
      } catch (error) {
        // Mobile browsers may still block autoplay until user interaction.
      }
    };

    if (v.readyState >= 2) {
      attemptAutoplay();
      return;
    }

    v.addEventListener("loadeddata", attemptAutoplay, { once: true });

    return () => {
      v.removeEventListener("loadeddata", attemptAutoplay);
    };
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
        controls={false}
        preload="auto"
        webkit-playsinline="true"
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