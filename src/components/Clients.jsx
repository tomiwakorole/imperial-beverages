import "../styles/Clients.css";

import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import client7 from "../assets/images/client7.png";
import client8 from "../assets/images/client8.png";
import client9 from "../assets/images/client9.png";
import client10 from "../assets/images/client10.png";
import client11 from "../assets/images/client11.png";
import client12 from "../assets/images/client12.png";
import client13 from "../assets/images/client13.png";
import client14 from "../assets/images/client14.png";
import client15 from "../assets/images/client15.png";
import client16 from "../assets/images/client16.png";
import client17 from "../assets/images/client17.png";
import client18 from "../assets/images/client18.png";
import client19 from "../assets/images/client19.png";
import client20 from "../assets/images/client20.png";
import client21 from "../assets/images/client21.png";
import client22 from "../assets/images/client22.png";
import client23 from "../assets/images/client23.png";
import client24 from "../assets/images/client24.png";
import client25 from "../assets/images/client25.png";
import client26 from "../assets/images/client26.png";
import client27 from "../assets/images/client27.png";
import client28 from "../assets/images/client28.png";
import client29 from "../assets/images/client29.png";
import client30 from "../assets/images/client30.png";
import client31 from "../assets/images/client31.png";

const clientLogos = [
  { src: client1, alt: "Client 1", href: "https://www.client1.com" },
  { src: client2, alt: "Client 2", href: "https://www.client2.com" },
  { src: client3, alt: "Client 3", href: "https://www.client3.com" },
  { src: client4, alt: "Client 4", href: "https://www.client4.com" },
  { src: client5, alt: "Client 5", href: "https://www.client5.com" },
  { src: client6, alt: "Client 6", href: "https://www.client6.com" },
  { src: client7, alt: "Client 7", href: "https://www.client7.com" },
  { src: client8, alt: "Client 8", href: "https://www.client8.com" },
  { src: client9, alt: "Client 9", href: "https://www.client9.com" },
  { src: client10, alt: "Client 10", href: "https://www.client10.com" },
  { src: client11, alt: "Client 11", href: "https://www.client11.com" },
  { src: client12, alt: "Client 12", href: "https://www.client12.com" },
  { src: client13, alt: "Client 13", href: "https://www.client13.com" },
  { src: client14, alt: "Client 14", href: "https://www.client14.com" },
  { src: client15, alt: "Client 15", href: "https://www.client15.com" },
  { src: client16, alt: "Client 16", href: "https://www.client16.com" },
  { src: client17, alt: "Client 17", href: "https://www.client17.com" },
  { src: client18, alt: "Client 18", href: "https://www.client18.com" },
  { src: client19, alt: "Client 19", href: "https://www.client19.com" },
  { src: client20, alt: "Client 20", href: "https://www.client20.com" },
  { src: client21, alt: "Client 21", href: "https://www.client21.com" },
  { src: client22, alt: "Client 22", href: "https://www.client22.com" },
  { src: client23, alt: "Client 23", href: "https://www.client23.com" },
  { src: client24, alt: "Client 24", href: "https://www.client24.com" },
  { src: client25, alt: "Client 25", href: "https://www.client25.com" },
  { src: client26, alt: "Client 26", href: "https://www.client26.com" },
  { src: client27, alt: "Client 27", href: "https://www.client27.com" },
  { src: client28, alt: "Client 28", href: "https://www.client28.com" },
  { src: client29, alt: "Client 29", href: "https://www.client29.com" },
  { src: client30, alt: "Client 30", href: "https://www.client30.com" },
  { src: client31, alt: "Client 31", href: "https://www.client31.com" },
];

function Clients() {
  const duplicatedClients = [...clientLogos, ...clientLogos];

  return (
    <section className="clients" id="clients">
      <div className="clients-overlay">
        <div className="clients-header">
          <p className="section-tag">OUR CLIENTS</p>
          <h2>Trusted by Leading Brands</h2>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {duplicatedClients.map((client, index) => (
              <a
                key={`${client.alt}-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={client.src} alt={client.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
