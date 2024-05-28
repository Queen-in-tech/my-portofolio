const About = () => {
  return (
    <div
      className="pt-3 md:flex  md:py-20 w-full justify-center gap-20 items-center"
      id="about"
    >
      <div className="flex justify-center items-center pb-5 md:pb-0">
        <img
          src="IMG_2613.PNG"
          alt="hero image"
          className="w-72 h-72 md:w-96 md:h-96"
        />
      </div>

      <div className="flex flex-col gap-3 md:gap-5 md:w-[60%] items-center ">
        <p className=" text-3xl font-bold text-black/80">About me.</p>
        <p className=" font-semibold text-[1.2rem] text-center md:text-start md:text-[1.2rem] text-black/80 leading-9">
          Hey there, I'm Queensheba Oluwadare, a frontend developer hailing from
          Nigeria.
          <br />
          My journey in frontend development has been nothing short of
          thrilling, driven by my unwavering passion for creativity and the
          ability to bring about positive change through innovative web
          solutions. With a keen focus on React, I craft elegant web experiences
          using a powerful blend of React, TypeScript, Firebase, JavaScript,
          TailwindCSS, HTML, and CSS. <br />
          <span className="hidden md:block">
            {" "}
            I excel in designing and maintaining responsive websites that offer
            a smooth user experience. My expertise lies in creating dynamic,
            engaging interfaces through writting clean and optimized code and
            utilizing cutting edge development tools and techniques.
          </span>
          So, take a peek at my projects and get a taste of what I can bring to
          the table. Let's chat about how I can be a valuable asset to your
          team!.
        </p>
      </div>
    </div>
  );
};

export default About;
