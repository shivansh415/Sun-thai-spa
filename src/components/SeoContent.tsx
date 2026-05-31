import { BUSINESS } from "@/lib/constants";

/**
 * Visually hidden but fully crawlable SEO content. Uses the `.sr-only`
 * utility (defined in globals.css) so screen readers and search engines
 * read it but sighted users never see it.
 */
export default function SeoContent() {
  return (
    <section className="sr-only" aria-label="About Sun Thai Spa Bhopal">
      <h2>Best Spa in Bhopal — Sun Thai Spa at Aashima Mall</h2>
      <p>
        Sun Thai Spa is the best luxury spa and massage centre in Bhopal,
        located at Aashima Mall, Bagmugaliya. We offer professional Thai
        massage, Swedish massage, deep tissue massage, aromatherapy massage,
        hot oil massage, couples massage, and traditional Moroccan bath
        treatments. Our certified therapists provide 5-star wellness
        experiences in private suites. Located near MP Nagar, Misrod,
        Hoshangabad Road, and Berasia Road. {BUSINESS.hours}. Book your spa
        appointment instantly on WhatsApp at {BUSINESS.phone}. No deposit
        required. Walk-ins welcome.
      </p>
      <h3>Spa Services in Bhopal</h3>
      <ul>
        <li>
          Thai Massage Bhopal — Traditional stretching and pressure point
          therapy
        </li>
        <li>Deep Tissue Massage Bhopal — Chronic muscle pain relief</li>
        <li>Aromatherapy Massage Bhopal — Essential oil wellness therapy</li>
        <li>Couples Massage Bhopal — Private double suite experience</li>
        <li>Hot Oil Massage Bhopal — Premium amber oil treatment</li>
        <li>Moroccan Bath Bhopal — Ancient purification ritual</li>
      </ul>
      <h3>Spa near Aashima Mall Bhopal</h3>
      <p>
        Sun Thai Spa is the top-rated massage centre near Aashima Mall Bhopal.
        Easily accessible from Bagmugaliya, Misrod, Ratibad, Berasia Road, and
        Hoshangabad Road areas of Bhopal, Madhya Pradesh.
      </p>
      <address>
        Sun Thai Spa, Shop No 115, First Floor, Aashima Mall, Shri Rameshwaram,
        Bagmugaliya, Bhopal, Madhya Pradesh 462043. Phone: {BUSINESS.phone}
      </address>
    </section>
  );
}
