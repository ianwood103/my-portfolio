import { Reveal } from "../components";

const Experience = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative bg-primary"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-start items-start w-full h-screen">
        <div className="mt-20 ml-20">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My <span className="text-secondary"> experience</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-row justify-center items-center h-full w-full">
          <div className="bg-secondary h-3 w-11/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
