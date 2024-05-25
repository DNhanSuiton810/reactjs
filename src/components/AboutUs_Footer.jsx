import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function AboutUs_Footer({
  logo_image,
  description,
  social_logo,
  navigation,
  navigation_des1,
  navigation_des2,
  contact,
  contact_address,
  contact_phone,
  contact_mail,
}) {
  return (
    <div id="AboutUs_Footer">
      <img src={logo_image} />
      <p>{description}</p>
      <div id="AboutUs_Footer_Social">
        <img src={social_logo[0]} />
        <img src={social_logo[1]} />
        <img src={social_logo[2]} />
        <img src={social_logo[3]} />
      </div>
      <div id="AboutUs_Footer_Navigation">
        <h3>{navigation}</h3>
        <p>{navigation_des1}</p>
        <p>{navigation_des2}</p>
      </div>
      <div id="AboutUs_Footer_Contact">
        <h3>{contact}</h3>
        <p>{contact_address}</p>
        <p>{contact_phone}</p>
        <p>{contact_mail}</p>
      </div>
    </div>
  );
}
