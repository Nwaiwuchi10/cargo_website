
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
  return (
    <div className="container-fluid bg-black " style={{marginLeft:"auto",marginRight:"auto",}}>
      <div className="row py-2 px-lg-5 " style={{display: "flex",justifyContent:"space-between",paddingLeft:"50px",paddingRight:"50px" }}>
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center text-white">
            <small>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +123 456 7890
            </small>
            <small className="px-3">|</small>
            <small>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              support@fasterlogistics.com
            </small>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-white px-2" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="text-white px-2" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="text-white px-2" href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="text-white px-2" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="text-white pl-2" href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
