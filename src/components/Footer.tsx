import {BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs"


const Footer = () => {
  return (
    <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-around items-center bg-white py-10 z-10 w-full">
      <p className="text-xl font-semibold text-black/70 ">copyright &copy; 2023. All rights are reserved</p>
      <div className="flex gap-5 text-black/70 text-xl items-center">
            <a target="_blank" href="https://github.com/Queen-in-tech"><BsGithub/></a>
            <a target="_blank" href="https://twitter.com/Queenofsheba0"><BsTwitter/></a>
            <a href=""><BsLinkedin/></a>
      </div>
    </div>
  )
}

export default Footer
