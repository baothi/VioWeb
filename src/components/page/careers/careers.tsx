// FAQs.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './careers.scss'

type CareerType = {
  title: string;
  content: string;
};

const careers: CareerType[] = [

{
    title: `
    <p><b>Sr. Backend Engineer</b></p>
    <p>Ho Chi Minh City, Vietnam</p>
    `,
    content: `
        <p>We’re looking for a creative and experienced Backend Software Engineer to join our Platform Engineering team. You will collaborate closely with frontend and data engineers to lead our backend team in expanding, refactoring, and maintaining our Django-based RESTful API.</p>
    `,
},
{
    title: `
    <p><b>Backend Engineer</b></p>
    <p>Ho Chi Minh City, Vietnam</p>
    `,
    content: `
        <p>We’re looking for a creative and experienced Backend Software Engineer to join our Platform Engineering team. You will collaborate closely with frontend and data engineers to support development of our Django-based RESTful API.</p>
    `,
},
{
    title: `
    <p><b>Sr. Flutter Developer</b></p>
    <p>Ho Chi Minh City, Vietnam</p>
    `,
    content: `
        <p>We’re looking for a creative and experienced Backend Software Engineer to join our Platform Engineering team. You will collaborate closely with frontend and data engineers to support development of our Django-based RESTful API.</p>
    `,
},
{
    title: `
    <p><b>Sr. React Developer</b></p>
    <p>Ho Chi Minh City, Vietnam</p>
    `,
    content: `
        <p>We’re looking for a creative and experienced React Web Developer to join our Web Development team. You will collaborate closely with backend and data engineers to lead our web development team in the design and development of our Web Tools platform.</p>
    `,
},
 
];


const CareerItem: React.FC<{ item: CareerType }> = ({ item }) => {
  useEffect(() => {
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true, //
    });
  }, []);


  return (
    <div className="container">
        <div
        className="career-column"
        data-aos="fade-right"
        dangerouslySetInnerHTML={{__html: item.title}}
      />
    <div
        className="career-column career-content"
        data-aos="fade-left"
        dangerouslySetInnerHTML={{__html: item.content}}
      />
    {/* <div className="column column1">{item.content}</div> */}
</div>
  );
};

const Career: React.FC = () => {
  return (
    <section className="section career_sec">
      <div className="grid-container">
        <div className="grid-100">
          <h1>Careers</h1>
          {careers.map((career, index) => (
            <CareerItem key={index} item={career} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
