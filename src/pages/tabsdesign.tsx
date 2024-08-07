import { useState } from "react";

const TabsDesign = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <section className="mt-6 flex flex-col lg:flex-row">
      <section className="w-full lg:w-1/4">
        <section className="flex flex-col lg:flex-col">
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 1
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Web Development
          </button>
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 2
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Mobile App Development
          </button>
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 3
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Quality Assurance Testing
          </button>
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 4
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(4)}
          >
            API Development
          </button>
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 5
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(5)}
          >
            Data Analytics
          </button>
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 6
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(6)}
          >
            Data Design and Development
          </button>
          <button
            className={`w-full lg:w-auto p-2 text-center  ${
              activeTab === 7
                ? "bg-second-color text-white"
                : "bg-white text-second-color font-bold"
            }`}
            onClick={() => handleTabClick(7)}
          >
            Data Administration
          </button>
        </section>
      </section>
      <section className="w-full lg:w-3/4">
        <section className="p-4">
          {activeTab === 1 && (
            <article className=" max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597840/web_zfh1en_v3cc6t.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597840/web_zfh1en_v3cc6t.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597840/web_zfh1en_v3cc6t.webp`}
                      alt="Web Development"
                      width={734}
                      height={520}
                      title="Web Development"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Transforming ideas into digital experiences, our web
                    development expertise brings your vision to life. With
                    cutting-edge technologies and creative design, we craft
                    responsive, user-friendly websites. Our team ensures
                    seamless functionality, captivating visuals, and optimal
                    performance, creating a strong online presence for your
                    brand. Count on us to deliver tailored web solutions that
                    engage, convert, and drive success in the digital landscape.
                  </p>
                </section>
              </section>
            </article>
          )}
          {activeTab === 2 && (
            <article className="max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597787/mobile_idpurn_npehiy.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597787/mobile_idpurn_npehiy.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597787/mobile_idpurn_npehiy.webp`}
                      alt="Mobile Development"
                      width={1890}
                      height={1806}
                      title="Mobile Development"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Unlock the power of mobility with our mobile app development
                    services. We specialize in crafting intuitive, feature-rich
                    apps across platforms. Our team combines innovative design
                    and robust development to create engaging user experiences.
                    From concept to launch, we ensure your app aligns with your
                    business goals, leveraging the latest technologies. Elevate
                    your brand with our mobile solutions that connect, engage,
                    and thrive in the mobile-first world.
                  </p>
                </section>
              </section>
            </article>
          )}
          {activeTab === 3 && (
            <article className=" max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597828/testing_t4z6o4_nwpkzm.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597828/testing_t4z6o4_nwpkzm.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597828/testing_t4z6o4_nwpkzm.webp`}
                      alt="Quality Testing"
                      width={1891}
                      height={1806}
                      title="Quality Testing"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Delivering excellence in software quality assurance, our
                    testing services ensure your applications meet the highest
                    standards. Our skilled QA engineers meticulously assess
                    functionality, performance, and security, identifying and
                    addressing issues before deployment. With a focus on
                    precision and efficiency, we guarantee a seamless user
                    experience and minimize the risk of defects. Trust us to
                    enhance your software&apos;s reliability and user satisfaction
                    through comprehensive testing solutions.
                  </p>
                </section>
              </section>
            </article>
          )}
          {activeTab === 4 && (
            <article className=" max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597703/api_luqq4m_iipu4p.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597703/api_luqq4m_iipu4p.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597703/api_luqq4m_iipu4p.webp`}
                      alt="API development"
                      width={734}
                      height={520}
                      title="API development"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Driving digital innovation, our expertise extends to both
                    API and microservices development. We architect flexible,
                    scalable APIs that connect and empower your applications,
                    fostering seamless data exchange. Simultaneously, our
                    microservices solutions break down complex systems into
                    agile, manageable components, enhancing scalability and
                    agility. Our team excels in building the backbone of modern
                    applications, fueling your growth and adaptability in the
                    digital landscape. With our integrated approach, we
                    transform ideas into robust, interconnected ecosystems,
                    ready to thrive in the digital era
                  </p>
                </section>
              </section>
            </article>
          )}
          {activeTab === 5 && (
            <article className=" max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597688/analytics_qat3wv_rrnfnf.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597688/analytics_qat3wv_rrnfnf.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597688/analytics_qat3wv_rrnfnf.webp`}
                      alt="Data Analytics"
                      width={1890}
                      height={1806}
                      title="Data Analytics"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Our Power BI development services transform your company&apos;s
                    data into stunning and interactive visualizations. With
                    Power BI, we create insightful reports and dashboards that
                    can be seamlessly embedded into your website. Now, you can
                    provide your website visitors with real-time access to
                    critical business data, making informed decisions easier
                    than ever. Empower your users with data-driven insights, all
                    without leaving your website. Explore our Power BI
                    development solutions today and take your data presentation
                    to the next level.
                  </p>
                </section>
              </section>
            </article>
          )}
          {activeTab === 6 && (
            <article className=" max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597762/datadesign_ucdkcp_z4gi8l.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597762/datadesign_ucdkcp_z4gi8l.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597762/datadesign_ucdkcp_z4gi8l.webp`}
                      alt="Data Design"
                      width={683}
                      height={512}
                      title="Data Design"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Database design and development entail the meticulous
                    structuring and construction of robust, scalable data
                    frameworks that serve as the backbone of information
                    management systems. This intricate process involves
                    conceptualizing, organizing, and implementing data models
                    that efficiently store, retrieve, and manage vast volumes of
                    information.
                  </p>
                </section>
              </section>
            </article>
          )}
          {activeTab === 7 && (
            <article className=" max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl">
              <section className="md:flex">
                <section className="md:shrink-0">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597723/databaseAdministration_hxwhil_yov4if.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597723/databaseAdministration_hxwhil_yov4if.webp`}
                    />
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={`${BASE_URL}v1722597723/databaseAdministration_hxwhil_yov4if.webp`}
                      alt="Data Administration"
                      width={648}
                      height={539}
                      title="Data Administration"
                    />
                  </picture>
                </section>
                <section className="p-8">
                  <p className="mt-2 text-base ">
                    {" "}
                    Database administration involves the orchestration and
                    maintenance of intricate data ecosystems, ensuring their
                    efficiency, security, and reliability in today&apos;s dynamic
                    business landscapes. Our approach entails implementing
                    robust backup and recovery strategies, preserving data
                    integrity and resilience in the face of potential
                    disruptions.
                  </p>
                </section>
              </section>
            </article>
          )}
        </section>
      </section>
    </section>
  );
};

export default TabsDesign;
