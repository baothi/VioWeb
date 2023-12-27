import { default as Slider } from "react-slick";
// import Slider from '../slider'
import 'slick-carousel/slick/slick.css';
import { useTranslation} from 'react-i18next';
import AOS from 'aos';
import bg_mail from '../../../assets/images/bg_mail.jpeg';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useFormik } from 'formik';

let createAccountSchema = yup.object().shape({
  email: yup
      .string()
      .required('email is Required')
      .min(3, 'must be at least 3 characters long')
      .email('must be a valid email')
});

const BusinessSectionSix = () => {
  const { t } = useTranslation();

  // Define the handleSubmit function
  const handleSubmit = (event) => {
      event.preventDefault();
      toast('🚀 Wow so easy!', {
        position: "top-right",
        autoClose: 60000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

  const formik = useFormik({
    initialValues: {
        email: '',
    },
    validationSchema: createAccountSchema,
    onSubmit: (values) => {
    },
  });
  
  
  return (
      <section className="section business_sec_6" style={{ backgroundImage: `url(${bg_mail})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <div dangerouslySetInnerHTML={{ __html: t("Ready") }} />
                      
                      {/* Update the onSubmit to use the handleSubmit directly */}
                      <form onSubmit={formik.handleSubmit}>
                          <input type="text" placeholder="Your email" />
                          <button type="submit">
                              <div dangerouslySetInnerHTML={{ __html: t("Get In Touch") }} />
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default BusinessSectionSix;