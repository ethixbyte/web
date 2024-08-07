import { Box, Typography } from "@mui/material";

const DataIntegration = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  return (
    <Box>
      <header className="text-red-500 mt-10 text-center">
        <Typography variant="h4" gutterBottom>
          <span className="font-luckiest">Elevating Success</span>
        </Typography>
      </header>
      <main>
        <section className=" mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row">
          <article className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105 transition">
            <section className="relative overflow-hidden bg-cover bg-no-repeat ">
              <picture>
                <source
                  srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722442931/partnership_cvvos1_qegglo.webp`}
                />
                <source
                  srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722442931/partnership_cvvos1_qegglo.webp`}
                />
                <img
                  className="rounded-t-lg"
                  src={`${BASE_URL}v1722442931/partnership_cvvos1_qegglo.webp`}
                  alt="partnership for progress"
                  width={837}
                  height={465}
                  title="Partnership"
                />
              </picture>
            </section>
            <section className="p-6">
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-normal">Partnerships for Progress</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We view our clients not just as customers but as partners in
                mutual growth. Our collaborative approach fosters open
                communication and co-creation, ensuring that our solutions
                perfectly sync with your vision and aspirations.
              </Typography>
            </section>
          </article>
          <article className=" block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105 transition">
            <section className="relative overflow-hidden bg-cover bg-no-repeat">
              <picture>
                <source
                  srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722442928/expertise_ra7wes_xpdr0m.webp`}
                />
                <source
                  srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722442928/expertise_ra7wes_xpdr0m.webp`}
                />
                <img
                  className="rounded-t-lg"
                  src={`${BASE_URL}v1722442928/expertise_ra7wes_xpdr0m.webp`}
                  alt="Expertise and Evolution"
                  width={837}
                  height={465}
                  title="Expertise and Evolution"
                />
              </picture>
            </section>
            <section className="p-6">
              <Typography gutterBottom variant="h5">
                <span className="font-normal">Expertise and Evolution</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Backed by a wealth of expertise and a relentless pursuit of
                evolution, we amalgamate cutting-edge technologies with industry
                know-how to design solutions that outpace the competition and
                future-proof your endeavors.
              </Typography>
            </section>
          </article>
        </section>

        <section className="mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row ">
          <section className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105  transition">
            <article className="relative overflow-hidden bg-cover bg-no-repeat">
              <picture>
                <source
                  srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722442934/reliable_c6zhub_n8v3lr.webp`}
                />
                <source
                  srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722442934/reliable_c6zhub_n8v3lr.webp`}
                />
                <img
                  className="rounded-t-lg"
                  src={`${BASE_URL}v1722442934/reliable_c6zhub_n8v3lr.webp`}
                  alt="reliable"
                  width={837}
                  height={465}
                  title="Reliable"
                />
              </picture>
            </article>
            <article className="p-6">
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-normal">
                  Scalable and Reliable Foundations
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Scalability and reliability are the bedrocks of our solutions.
                We design robust architectures and implement rigorous testing to
                ensure that your systems not only perform seamlessly but also
                scale effortlessly with your ambitions.
              </Typography>
            </article>
          </section>
          <section className=" block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105  transition">
            <article className="relative overflow-hidden bg-cover bg-no-repeat">
              <picture>
                <source
                  srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722442937/service_blueprint_loqph9_vkvlsu.webp`}
                />
                <source
                  srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722442937/service_blueprint_loqph9_vkvlsu.webp`}
                />
                <img
                  className="rounded-t-lg"
                  src={`${BASE_URL}v1722442937/service_blueprint_loqph9_vkvlsu.webp`}
                  alt="Our Services"
                  width={837}
                  height={465}
                  title="Our Services"
                />
              </picture>
            </article>
            <article className="p-6">
              <Typography gutterBottom variant="h5">
                <span className="font-normal">
                  A Holistic Suite of Services
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                From conception to execution, our comprehensive suite of
                services covers every facet of your journey, encompassing
                development, integration, security, and beyond, providing a
                one-stop solution hub for your business needs.
              </Typography>
            </article>
          </section>
        </section>
      </main>
    </Box>
  );
};

export default DataIntegration;
