import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="h-auto pb-3 md:h-[82vh] bg-white/70 flex flex-col-reverse justify-end gap-12 md:flex-row md:justify-around items-center md:py-2 px-3  rounded-md"
      id="home"
    >
      <div className="flex flex-col gap-2 justify-center items-center md:w-[70%]">
        <div className="flex flex-col-reverse md:flex-col justify-center items-center pb-5">
          <p className="text-[1.60rem] md:text-2xl lg:text-3xl font-bold text-black/80">
            Hi, i'm Oluwadare Queensheba
          </p>
          <p className="text-[2.4rem] md:text-3xl lg:text-4xl font-bold text-purple-800 mb-2 md:mb-5">
            Front-end Developer
          </p>
        </div>
        <div className="flex gap-5 text-black/70 text-2xl pb-16 md:pb-0">
          <a target="_blank" href="https://github.com/Queen-in-tech">
            <BsGithub />
          </a>
          <a target="_blank" href="https://twitter.com/Queenofsheba0">
            <BsTwitter />
          </a>
          <a href="">
            <BsLinkedin />
          </a>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row gap-4 md:pt-24 items-center justify-center">
          <p className="text-2xl md:text-lg font-semibold text-black/70 border-b border-black/70 pb-1 md:border-b-0 md:pb-0">
            Tech stack <span className="hidden md:inline-block">|</span>
          </p>

          <div className="flex gap-[2.5rem] md:gap-6 items-center justify-center flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
              alt=""
              className="w-8 h-8"
              title="HTML"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
              alt=""
              title="CSS"
              className="w-8 h-8"
            />

            <img
              src="https://durableprogramming.com/wp-content/uploads/2023/04/JavaScript-logo.png"
              alt=""
              title="Javascript"
              className="w-8 h-8"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s"
              alt=""
              title="TailwindCSS"
              className="w-8 h-8"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt=""
              title="React"
              className="w-8 h-8"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
              alt=""
              title="Typescript"
              className="w-8 h-8"
            />

            <img
              src="https://www.svgrepo.com/show/303670/firebase-1-logo.svg"
              alt=""
              title="Firebase"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      <div>
        <img
          src="IMG_2619.PNG"
          alt="hero image"
          className="w-64 h-56 object-contain md:w-auto md:h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
