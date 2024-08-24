import React from "react";

const OurStories = () => {
  return (
    <section className="min-h-[63rem] md:min-h-[40rem] lg:min-h-[35rem] xl:min-h-[45rem] ourStories py-16">
      <h1 className="text-center font-bold text-3xl text-DarkBlue">
        OUR STORIES
      </h1>
      <div className="flex justify-center items-center pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          <div className="card card-compact bg-base-100 w-[30rem] shadow-xl rounded-[40px]">
            <figure className="m-1">
              <img src="/assets/Rectangle 34.png" alt="education child" />
            </figure>
            <div className="card-body my-7 mx-7">
              <h2 className="card-title">Education</h2>
              <p className="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, 
              </p>
              <div className="card-actions justify-start">
                <span>By Star John</span>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-[30rem] shadow-xl rounded-[40px]">
            <figure className="m-1">
              <img src="/assets/Rectangle 35.png" alt="education child" />
            </figure>
            <div className="card-body my-7 mx-7">
              <h2 className="card-title">The Flood man</h2>
              <p className="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, 
              </p>
              <div className="card-actions justify-start">
                <span>By Star John</span>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-[30rem] shadow-xl rounded-[40px]">
            <figure className="m-1">
              <img src="/assets/Rectangle 34-1.png" alt="education child" />
            </figure>
            <div className="card-body my-7 mx-7">
              <h2 className="card-title">Education</h2>
              <p className="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, 
              </p>
              <div className="card-actions justify-start">
                <span>By Star John</span>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-[30rem] shadow-xl rounded-[40px]">
            <figure className="m-1">
              <img src="/assets/Rectangle 35-1.png" alt="education child" />
            </figure>
            <div className="card-body my-7 mx-7">
              <h2 className="card-title">Education</h2>
              <p className="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, 
              </p>
              <div className="card-actions justify-start">
                <span>By Star John</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="btn btn-wide text-DarkBlue font-bold text-xl shadow-[0_8px_26.8px_0_rgba(0,82,127,0.17)] bg-[rgb(244,250,255)] rounded-[50px]">
          View More
        </button>
      </div>
    </section>
  );
};

export default OurStories;
