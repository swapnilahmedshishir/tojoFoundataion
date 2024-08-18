import React from "react";

const HeroCard = () => {
  return (
    <div className="bg-White rounded-3xl text-center p-4 bg-[url('/assets/icons/Group60.png')] bg-no-repeat bg-top w-[22rem]">
      <div className="relative">
        <img
          src="/assets/icons/education 1.png"
          alt="education"
          className="absolute top-9 left-[8rem] h-16 z-[2]"
        />
        <br />
        <div className="mt-28">
          <h2 className="text-blue1 font-bold text-2xl mb-2">Education</h2>
          <p className="text-Paragraph text-[18px]">
            Education is recognized as a fundamental right in Bangladesh. The
            country has made significant progress in delivering education to its
            people. Acknowledging the crucial role of education,
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
