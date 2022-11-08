/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRegBuilding,
  FaUserFriends,
} from 'react-icons/fa'

export const Post = () => {
  return (
    <div>
      <div className="p-10 bg-base-profile rounded-lg -mt-12 flex gap-8 ">
        <div className="flex flex-col justify-center items-start  w-full">
          <div className="flex justify-between items-center w-full">
            <a
              href="https://api.github.com/users/aluiz815"
              target="_blank"
              className="text-blue-theme font-bold text-xs flex gap-2"
              rel="noreferrer"
            >
              VER NO GITHUB
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://api.github.com/users/aluiz815"
              target="_blank"
              className="text-blue-theme font-bold text-xs flex gap-2"
              rel="noreferrer"
            >
              VER NO GITHUB
              <FaExternalLinkAlt />
            </a>
          </div>

          <h1 className="mt-5 text-base-title font-bold leading-tight text-2xl">
            JavaScript data types and data structures
          </h1>

          <div className="flex gap-6 pt-6">
            <div className="flex gap-2 items-center">
              <FaGithub className="text-base-label text-lg" />
              <span className="text-base-subtitle">aluiz815</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegBuilding className="text-base-label text-lg" />
              <span className="text-base-subtitle">Rocketseat</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaUserFriends className="text-base-label text-lg" />
              <span className="text-base-subtitle">aluiz815</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-60 p-10">
        <ReactMarkdown className="text-base-text">
          # André Luiz [![Github
          Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/lucasgdb)](https://github.com/aluiz815)
          [![Linkedin
          Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rebeccamanzi/)](https://www.linkedin.com/in/andr%C3%A9-luiz-90126716a/)
          [![Gmail
          Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rebeccamanzi@gmail.com)](mailto:aluizdev@gmail.com)
          Hello! Welcome to my profile :smile: I'm André and I'm a fullstack
          Developer and Salesforce Developer - ❤️ In love with JavaScript &
          Typescript & LWC
        </ReactMarkdown>
      </div>
    </div>
  )
}
