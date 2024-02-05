import PrimaryHF from "../../Components/Layout/PrimaryHF/PrimaryHF";
import MovieList from "../../Components/SecondaryComps/MovieList/MovieList";
import { Style } from "./HomeStyle";
export default function HomePage() {
  return (
    <Style>
      <PrimaryHF>
        <div className="container m-b-10">
          <MovieList className={"m-t-100"} />
          <div className="featured-in">
            <div className="logo center-text m-t-100">
              <svg
                width="157"
                height="80"
                viewBox="0 0 157 80"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                class="landing-devices__apple-tv-logo"
              >
                <path d="M43.874 12.7c2.733-3.418 4.588-8.008 4.1-12.7-4 .2-8.883 2.64-11.7 6.06-2.538 2.93-4.784 7.712-4.2 12.205 4.492.4 8.978-2.244 11.8-5.567m4.046 6.446c-6.522-.388-12.068 3.702-15.183 3.702s-7.885-3.506-13.045-3.4c-6.714.098-12.944 3.895-16.35 9.933-7.008 12.08-1.85 29.996 4.965 39.834 3.3 4.867 7.3 10.225 12.554 10.033 4.966-.195 6.912-3.215 12.948-3.215s7.785 3.215 13.04 3.118c5.45-.098 8.86-4.87 12.17-9.74 3.797-5.55 5.35-10.906 5.448-11.2-.097-.097-10.5-4.092-10.608-16.07-.098-10.03 8.176-14.8 8.566-15.096-4.672-6.9-11.973-7.7-14.504-7.886m41.54-9.234v13.23h10.637v8.732H89.46V63c0 4.815 2.117 7.038 6.773 7.038a35.56 35.56 0 003.811-.265v8.784c-1.27.265-3.8.477-6.298.477-11.007 0-15.293-4.234-15.293-14.923V31.874h-8.15v-8.732h8.15V9.913H89.46zM137.323 78.6h-11.68l-19.645-55.44h11.628l13.778 44.552h.265l13.78-44.552h11.415z"></path>
              </svg>
              <div className="title">Watch shows here and on TV.</div>
              <p className="m-y-20">
                Find Apple TV+ in the TV app, available on your Apple devices,
                smart TVs, the web, and more.
              </p>
              <div className="feature-logos center-text">
                <div>
                  <img src="/assets/photos/futered-in-logos.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrimaryHF>
    </Style>
  );
}
