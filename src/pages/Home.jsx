import React from 'react';
import heroImg01 from '../../src/assets/images/hero-img01.png';
import heroImg02 from '../../src/assets/images/hero-img02.png';
import heroImg03 from '../../src/assets/images/hero-img03.png';
import icon01 from '../../src/assets/images/icon01.png';
import icon02 from '../../src/assets/images/icon02.png';
import icon03 from '../../src/assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import VideoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';

const Home = () => {
  return (
    <div>
      {/* ----------Hero Section--------- */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ++++++ HERO CONTENT+++++++++++ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help our patients for their better & longer life
                </h1>
                <p className="text__para">
                  "We're dedicated to assisting our patients in achieving a
                  better and longer life through compassionate care and tailored
                  support.Empowering our patients with comprehensive care and
                  resources, we're committed to enhancing their well-being and
                  extending their quality of life"
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/* ============Hero Counter================ */}
              <div className="mt-[30px lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[16px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__ para">Years of experoence</p>
                </div>
                <div>
                  <h2 className="text-[16px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__ para">Clinic Locatons</p>
                </div>
                <div>
                  <h2 className="text-[16px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__ para">Patient Satisfaction </p>
                </div>
              </div>
            </div>
            {/* ========== HERO CONTENT ========== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Medical Services
            </h2>
            <p className="">
              "Committing to excellence in every aspect of healthcare delivery,
              our dedicated team tirelessly strives to provide the best medical
              care for patients, employing cutting-edge technologies,
              compassionate expertise, and a holistic approach to healing,
              ensuring their well-being and comfort are paramount at every stage
              of their journey toward health and recovery."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg-mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Our expert team of doctors and healthcare professionals
                  deliver unparalleled medical care, striving to exceed patient
                  expectations at every step
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Delivering top-tier medical services right in your
                  neighborhood, ensuring convenient access to premier healthcare
                  solutions.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Easily schedule an appointment with a qualified doctor to
                  address your healthcare needs promptly and efficiently.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      {/* ========== SERVICE SECTION  ================== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              We are dedicated to delivering unparalleled online patient care.
              Our commitment to excellence drives us to provide world-class
              services that prioritize your well-being and comfort above all
              else. Our team of experienced healthcare professionals is here to
              offer personalized support and guidance every step of the way.
              From virtual consultations to remote monitoring and follow-up
              care, we leverage cutting-edge technology to ensure that you
              receive the highest quality of care from the comfort of your own
              home. With [Your Company Name], you can trust that your health is
              in good hands, no matter where you are.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* ========== SERVICE SECTION END ================ */}

      {/* =========== Feature Section ================= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ===========   feature content ============= */}
            <div className="xi:w-[670px]">
              <h2 className="heading">Get Virtual Treatment</h2>
              <ul className="pl-4">
                <li className="text__para">
                  {' '}
                  1. Schedule the Appointment directly.
                </li>
                <li className="text__para">
                  {' '}
                  2. Search for Physician here and contact their office.
                </li>
                <li className="text__para">
                  {' '}
                  3. View our Physicians who are accepting new patients use the
                  online schedule tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>
            {/* ========= feature Image ============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mg-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex item-center justify-between">
                  <div className="flex item-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10.00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex item-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={VideoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3 py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leadinf-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex item-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Shine Babu
                  `</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
