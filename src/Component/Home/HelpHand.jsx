import React from "react";

const HelpHand = () => {
  return (
    <section className="min-h-[63rem] md:min-h-[40rem] lg:min-h-[35rem] xl:min-h-[45rem] HelpHand py-16">
      <div className="pt-20 w-full px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="place-self-center">
            <h1 className="text-[#011C52] font-extrabold text-4xl leading-[3.4rem] w-5/6">
              Give a Hand to Make The Better world
            </h1>
            <p className="py-6 w-fit">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="btn btn-wide text-DarkBlue font-bold text-xl shadow-[0_8px_26.8px_0_rgba(0,82,127,0.17)] bg-[rgb(244,250,255)] rounded-[50px]">
              Donate Now
            </button>
          </div>
          <div className="relative">
            <img
              className="absolute -top-10 right-10 z-[2]"
              src="/assets/Ellipse 30 (1).png"
              alt="helphandImage"
            />
            <img src="/assets/Ellipse 29.png" alt="helphandImage" />
            <img
              className="absolute -z-[1] -right-5 -bottom-9"
              src="/assets/Ellipse 28.png"
              alt="helphandImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpHand;
