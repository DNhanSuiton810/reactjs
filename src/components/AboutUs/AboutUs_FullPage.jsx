import AboutUs_GroupDescription from "./AboutUs_Des";
import OurPurpose from "./AboutUs_OurPurpose";
import AboutUs_Members from "./AboutUs_Members";
import AboutUs_Contact from "./AboutUs_Contact";
import AboutUs_Footer from "./AboutUs_Footer";

export default function AboutUs_FullPage() {
  return (
    <div id="AboutUs_FullPage">
      <AboutUs_GroupDescription />
      <OurPurpose />
      <AboutUs_Members />
      <AboutUs_Contact />
      <AboutUs_Footer />
    </div>
  );
}
