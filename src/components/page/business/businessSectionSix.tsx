import 'slick-carousel/slick/slick.css';
import { useTranslation } from 'react-i18next';
import bg_mail from '../../../assets/images/bg_mail.jpeg';
import { toast } from 'react-toastify';
import { FormEvent, useRef, useState } from "react";
import { useAppDispatch } from '~/app/hooks';
import { report } from '~/services/authSlice';

const BusinessSectionSix: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const validateEmail = (email: string): string => {
    if (!email) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email must be a valid email address';
    }
    return '';
  };

  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      const emailError = validateEmail(email);
      console.log("==== : ", emailError);
      if (emailError) {
        toast('🚀 ' + emailError, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const data = { email: email, title: "Dữ Liệu Được Gởi Từ WEb", content: "https://vioapp.io/" }
        dispatch(report(data));
        setEmail('');
        toast('🚀 Email sent successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
  };
  
  return (
      <section className="section business_sec_6" style={{ backgroundImage: `url(${bg_mail})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <div dangerouslySetInnerHTML={{ __html: t("Ready") }} />
                      
                      <form onSubmit={handleSubmit}>
                        <input 
                          type="text" 
                          placeholder="Your email"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          ref={emailRef}
                        />
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
