import "./footer.component.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
// import FooterLogo from '../../Assets/footer-logo.png'

const Footer = () => {

  const start = Date.now();
  // Your operation
  const totalTimeTaken = Date.now() - start;
  console.log(totalTimeTaken);


  return (
    <footer className="footer-main-container">
      {/* <div className="footer-container-1">
        <div className="footer-container-1-title">
          Get connected with us on social media
        </div>

      </div> */}
      <div className="footer-container-2">
        <div className="footer-container-2-left">
          <div className="footer-container-2-left-warp">
            <div className="footer-container-2-left-title">
              SWITCHBOARD
              {/* <img className="footer-image" src={FooterLogo} alt="" /> */}
            </div>
            <div className="footer-container-2-left-title">
              Start doing work that matters
              {/* <img className="footer-image" src={FooterLogo} alt="" /> */}
            </div>
            <div className="footer-container-2-left-content">
              <div className="footer-container-1-social-container">
                <div
                  className="item"
                  onClick={() => {
                    window.open("https://twitter.com/ZedByte");
                  }}
                >
                  <TwitterIcon
                    style={{
                      color: "black",
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="item"
                  onClick={() => {
                    window.open("https://www.instagram.com/zedbytecorp/");
                  }}
                >
                  <InstagramIcon
                    style={{
                      color: "black",
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="item"
                  onClick={() => {
                    window.open("https://wa.me/+918825464712");
                  }}
                >
                  <WhatsAppIcon
                    style={{
                      color: "black",
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="item"
                  onClick={() => {
                    window.open("tel:+918825464712");
                  }}
                >
                  <CallIcon
                    style={{
                      color: "black",
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container-2-right">
          <div className="footer-container-2-right-warp">

            <div className="footer-container-2-right-column">
              <div className="footer-container-2-right-title">Events</div>
              <div className="footer-container-2-right-content">Wedding events</div>
              <div className="footer-container-2-right-content">Corporate events</div>
              <div className="footer-container-2-right-content">Product launches</div>
              <div className="footer-container-2-right-content">Fashion showa</div>
              <div className="footer-container-2-right-content">Award ceremonies</div>
              <div className="footer-container-2-right-content">Sporting events</div>
              <div className="footer-container-2-right-content">Trade shows and exhibitions</div>
              <div className="footer-container-2-right-content">Gala dinner and charity</div>
              <div className="footer-container-2-right-content">Religious and cultural events</div>
            </div>

            <div className="footer-container-2-right-column">
              <div className="footer-container-2-right-title">Quick Links</div>
              <div className="footer-container-2-right-content">Home</div>
              <div className="footer-container-2-right-content">Why Us</div>
              <div className="footer-container-2-right-content">Gallery</div>
              <div className="footer-container-2-right-content">Our Teams</div>
              <div className="footer-container-2-right-content">About Us</div>
              <div className="footer-container-2-right-content">Contact Us</div>
            </div>

            <div className="footer-container-2-right-column">
              <div className="footer-container-2-right-title"></div>
              <div className="footer-container-2-right-content">
                <LocationOnIcon
                  style={{
                    color: "black",
                    width: 20,
                    height: 20,
                    cursor: "pointer",
                  }}
                />
                Lorem ipsum dolor sit amet consectetur. Pretium ut lorem aliquam nullam tortor.              </div>
              <div className="footer-container-2-right-content">
                <CallIcon
                  style={{
                    color: "black",
                    width: 20,
                    height: 20,
                    cursor: "pointer",
                  }}
                />
                +91 9876543210
              </div>
              <div className="footer-container-2-right-content">
                <EmailIcon
                  style={{
                    color: "black",
                    width: 20,
                    height: 20,
                    cursor: "pointer",
                  }}
                />
                asd@asd.com
              </div>
            </div>



          </div>
        </div>
      </div>
      <div className="footer-container-3">
        <h1 className="footer-container-3-content">
          {/* Designed and developed by ZEDBYTE */}
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
