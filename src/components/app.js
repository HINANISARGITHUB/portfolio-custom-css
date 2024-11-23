// pages/_app.js
import "../styles/globals.css"; // Your global CSS (if any)
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome styles
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent automatic CSS addition to improve performance

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
