import "../styles/Location.css";

function Location() {
  return (
    <section className="location" id="location">

      <div className="location-container">

        {/* SECTION HEADER */}

        <div className="location-header">

          <p className="section-tag">
            FIND US
          </p>

          <h2>
            Visit Imperial Beverages
          </h2>

          <p>
            Find your way to Imperial Beverages Limited,
            conveniently located at 88/90 Airport Road,
            Mafoluku, Oshodi, Lagos.
          </p>

        </div>


        {/* MAP */}

        <div className="map-wrapper">

          <iframe
            title="Imperial Beverages Location"
            src="https://www.google.com/maps?q=88/90%20Airport%20Road,%20Mafoluku,%20Oshodi,%20Lagos,%20Nigeria&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>


        {/* ADDRESS */}

        <div className="location-address">

          <h3>
            Imperial Beverages Limited
          </h3>

          <p>
            88/90 Airport Road,
            Mafoluku,
            Oshodi,
            Lagos, Nigeria.
          </p>

        </div>


        {/* DRIVER */}

        <div className="driver-section">

          <h3>
            Driving to Us?
          </h3>

          <p>
            Get directions from your current location
            and start your journey directly through
            Google Maps.
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=88%2F90%20Airport%20Road%2C%20Mafoluku%2C%20Oshodi%2C%20Lagos%2C%20Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-button"
          >
            Start Your Trip
          </a>

        </div>


        {/* PUBLIC TRANSPORT */}

        <div className="transport-section">

          <h3>
            Coming by Public Transport?
          </h3>

          <p>
            Take a bus heading towards Oshodi and
            alight around Airport Road.
            From there, continue towards 88/90 Airport
            Road and ask for Imperial Beverages Limited.
            You can also use the Google Maps location
            above to guide you for the final part of
            your journey.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Location;