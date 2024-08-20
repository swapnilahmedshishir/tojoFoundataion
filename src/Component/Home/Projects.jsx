import React from "react";

const Projects = () => {
  return (
    <section className="min-h-[63rem] md:min-h-[40rem] lg:min-h-[35rem] xl:min-h-[45rem] rounded-b-[5.5rem] project py-16">
      <h1 className="text-center font-bold text-3xl text-DarkBlue">
        OUR PROJECTS
      </h1>
      <div className="flex justify-center items-center pt-20">
        <div className="bg-White mx-4 md:mx-10 lg:mx-auto lg:w-3/5 py-8 shadow-[0_4px_20px_0px_rgba(1,28,82,0.35)] rounded-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-5 relative">
            <div className="md:col-span-2">
              <img
                src="\assets\Rectangle_18.png"
                alt="project set up image "
                className="md:-ml-10"
              />
            </div>
            <div className="md:col-span-3 content-center my-5 md:my-0 mx-5 md:mx-0">
              <h2 className="text-blue1 text-2xl font-bold">
                Complete Projects
              </h2>
              <p className="my-6 text-[16px] w-full md:w-5/6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button className="py-3 px-8 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold opacity-100">
                READ MORE
              </button>
            </div>
            <div className="absolute right-4 top-[3.9rem] xl:top-[6.7rem]  hidden md:block">
              <img
                src="/assets/Navigate.png"
                alt="Navigation in project section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
