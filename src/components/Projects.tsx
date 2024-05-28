import { useRef, useState } from "react";

const projectArr = [
  {
    photo: "liberation/Liberation-Note.png",
    title: "Liberation note",
  },
  {
    photo: "musica/Musica full view.png",
    title: "Musica",
  },
  {
    photo: "food/food001-netlify-app-trendy-page home.png",
    title: "Food Recipe App",
  },
];

const projectDetailArr = [
  {
    title: "Liberation Note",
    details:
      "Liberation Notes is a modern and responsive social media web application built with React, Tailwind CSS, and Firebase. The app allows users to interact with each other through posts, likes, comments, and private messaging. Users can also update their profiles, change usernames, update display photos, and delete accounts. Additionally, the app features a mood tracker to keep a record of users' moods throughout the day.",
    features: [
      "User Authentication: Secure user registration and login using Firebase Authentication.",
      "User Profile Management: Users can update their profiles, including changing usernames and display photos.",
      "Create and Edit Posts: Users can create posts with text, images, or emojis. They can also edit or delete their own posts.",
      "Like and Comment: Users can like and comment on posts made by other users.",
      "Private and Public Posts: Users can choose to make their posts private or public, controlling who can view them.",
      "Private Messaging: Users can send private messages to other users through the app.",
      "Mood Tracker: Users can record and track their moods throughout the day.",
    ],
    images: [],
    stacks:
      "React, TailwindCss, Firebase, React-toastify, React-calender, React-timeago",
    live: "https://my-dairy-app-1683d.web.app/",
    gitHub: "https://github.com/Queen-in-tech/Liberstion-note",
  },
  {
    title: "Musica app",
    details:
      "Musica is a sleek and responsive music player app built with react that allows you to immerse yourself in your favorite tunes. With a seamless integration of the Spotify API and local storage, Musica offers a delightful music experience right at your fingertips.",
    features: [
      "Spotify API Authentication: Connect your Spotify account seamlessly and access your personal library and playlists.",
      "Play, Pause, Shuffle, Forward & Backward: Control your music playback with ease. Play, pause, shuffle through tracks, and move forward or backward to enjoy your favorite moments.",
      "Search Music & Artists: Discover and explore a vast collection of music and artists through the app's robust search functionality.",
      "Add to Favorites: Curate your own collection by adding songs and artists to your favorites, making it easy to access them anytime.",
      "Remove from Favorites: Don't worry if your music taste evolves. You can effortlessly remove songs and artists from your favorites list too.",
    ],
    images: [],
    stacks: "React, TailwindCSS, HTML, Spotify API, Local Storage",
    live: "https://musica-web-app.netlify.app/",
    gitHub: "https://github.com/Queen-in-tech/Musica-app",
  },
  {
    title: "Food Recipe App",
    details:
      "Welcome to the Food Recipe App, your ultimate destination for discovering delicious recipes right at your fingertips. Whether you're a seasoned chef or a cooking enthusiast, this app has got you covered with a wide range of mouthwatering recipes.",
    features: [
      "Search for Recipes: Quickly find recipes based on your favorite food items. Just enter the ingredient, and let the app do the rest.",
      "Get Detailed Information: Access intensive details about each recipe, including calorie count, health benefits, ratings, and more.",
      "Direct Recipe Access: Choose whether you want to view the full recipe details directly within the app or visit the original recipe website.",
      "Responsive Design: Enjoy a seamless and visually pleasing experience across all devices, thanks to the app's responsive design.",
      "Pagination: Easily navigate through multiple recipes with the convenient pagination feature.",
    ],
    images: [],
    stacks: "Javascript, HTML, TailwindCSS, Spoonacular API",
    live: "https://food001.netlify.app/",
    gitHub: "https://github.com/Queen-in-tech/food_app",
  },
];

import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  //const [projectIndex, setProjectIndex] = useState(0)
  const [openDetails, setOpenDetails] = useState(0);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setOpenDetails(index);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-5 rounded-lg " id="project">
      <p className="text-3xl font-bold text-black/90 text-center bg-white p-2 rounded-lg mt-18 mb-10">
        Projects
      </p>
      <div className="w-full md:px-5 py-1 flex justify-between gap-7">
        <div className="md:w-[45%] flex flex-col justify-center items-center gap-8 py-5  rounded-md bg-[#f7f9fb]">
          {projectArr.map((project, index) => {
            return (
              <div
                className={` w-full bg-white rounded-xl flex flex-col justify-center items-center shadow-md py-1 ${
                  openDetails === index
                    ? "border-r-[3px] border-purple-900 scale-105"
                    : "hover:scale-105"
                }`}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`cursor-pointer rounded-b-lg p-5 ${
                    openDetails === index ? "w-[95%]" : "w-[85%] "
                  }`}
                >
                  <p className="text-xl text-black/80 font-bold capitalize text-end px-2 pb-2 rounded-xl">
                    {project.title}
                  </p>
                  <img
                    src={project.photo}
                    alt="image"
                    className={`object-center w-full rounded-b-lg ${
                      openDetails === index ? "h-76" : "h-72"
                    }`}
                  />
                </div>

                {openDetails === index && (
                  <div className="block md:hidden p-1 text-center">
                    <p className="py-3  text-lg font-semibold">
                      {projectDetailArr[openDetails].details}
                    </p>
                    <p className="pb-3 text-lg font-bold">
                      Built with:{" "}
                      <span className="font-medium">
                        {projectDetailArr[openDetails].stacks}
                      </span>
                    </p>

                    <div className="flex gap-4 pt-8 ml-3 justify-center">
                      <button className="flex items-center gap-2 bg-purple-900 text-white p-2 rounded-md font-semibold hover:opacity-90">
                        <a
                          href={projectDetailArr[openDetails].live}
                          target="_blank"
                        >
                          Live URL
                        </a>
                        <span className="text-xl">
                          <FiExternalLink />
                        </span>
                      </button>

                      <button className="flex items-cente  gap-1 font-semibold bg-purple-700 text-white p-2 rounded-md hover:opacity-90">
                        <a
                          href={projectDetailArr[openDetails].gitHub}
                          target="_blank"
                        >
                          Code
                        </a>
                        <span className="text-xl">
                          <AiFillGithub />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="hidden md:block w-[55%] px-8 py-5 my-5 bg-white rounded-xl"
          ref={scrollRef}
        >
          <p className="text-center text-2xl py-4 font-bold text-black/80">
            {projectDetailArr[openDetails].title}
          </p>
          <p className="py-4 text-sm font-semibold">
            {projectDetailArr[openDetails].details}
          </p>
          <p className="py-3  text-lg font-bold">
            Built with:{" "}
            <span className="font-medium text-base">
              {projectDetailArr[openDetails].stacks}
            </span>
          </p>
          <p className="font-bold py-5 text-lg ">
            Features:{" "}
            {
              <ul className="list-disc ml-8 font-normal flex flex-col gap-2">
                {projectDetailArr[openDetails].features.map((feature) => (
                  <li className=" leading-7 text-base">{feature}</li>
                ))}
              </ul>
            }
          </p>
          <div className="flex gap-4 pt-12 ml-3">
            <button className="flex items-center gap-2 bg-purple-900 text-white p-2 rounded-md font-semibold hover:opacity-90">
              <a href={projectDetailArr[openDetails].live} target="_blank">
                Live URL
              </a>
              <span className="text-xl">
                <FiExternalLink />
              </span>
            </button>

            <button className="flex items-center gap-1 font-semibold bg-purple-700 text-white p-2 rounded-md hover:opacity-90">
              <a href={projectDetailArr[openDetails].gitHub} target="_blank">
                Code
              </a>
              <span className="text-xl">
                <AiFillGithub />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
