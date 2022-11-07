import {
  FaGithub,
  FaExternalLinkAlt,
  FaRegBuilding,
  FaUserFriends,
} from 'react-icons/fa'
export const Home = () => {
  return (
    <div className="h-max p-10 bg-base-profile rounded-lg -mt-12 ">
      <div className="flex gap-8">
        <img
          src="https://avatars.githubusercontent.com/u/43641969?v=4"
          alt=""
          className="w-36 rounded-lg"
        />
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-base-title font-bold leading-tight text-2xl">
              André Luiz
            </h1>
            <a
              href="https://api.github.com/users/aluiz815"
              target="_blank"
              className="text-blue-theme font-bold text-xs flex gap-2"
              rel="noreferrer"
            >
              GITHUB
              <FaExternalLinkAlt />
            </a>
          </div>
          <p className="font-normal text-base text-base-text w-full text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            accusamus ex perferendis deserunt magnam ratione, quod provident
            molestias adipisci commodi necessitatibus dolore aut sapiente. Vero,
            quam? Dolorum perspiciatis iusto ipsa!
          </p>
          <div className="flex gap-6 mt-6">
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
    </div>
  )
}
