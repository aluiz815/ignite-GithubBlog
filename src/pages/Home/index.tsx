import {
  FaGithub,
  FaExternalLinkAlt,
  FaRegBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
      <div className="p-10 bg-base-profile rounded-lg -mt-12 flex gap-8 ">
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
      <div className="mt-20 mb-60">
        <div className="flex justify-between items-center">
          <h2 className="text-base-subtitle text-2xl font-bold">Publicações</h2>
          <h3 className="text-base-span text-sm font-bold space-x-5">
            <span>6</span> publicações
          </h3>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="p-3 w-full mt-3 rounded-md bg-base-input border border-base-border"
        />
        <div className="pt-12 grid grid-cols-2 gap-5 ">
          <Link to="/post" className="rounded-xl bg-base-post p-8">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl text-base-title">
                JavaScript data types and data structures
              </h1>
              <h2 className="text-sm text-base-span">Há 1 dia</h2>
            </div>
            <p className="mt-5 text-base text-base-text overflow-hidden">
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Link>
          <div className="rounded-xl bg-base-post p-8">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl text-base-title">
                JavaScript data types and data structures
              </h1>
              <h2 className="text-sm text-base-span">Há 1 dia</h2>
            </div>
            <p className="mt-5 text-base text-base-text overflow-hidden">
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </div>
          <div className="rounded-xl bg-base-post p-8">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl text-base-title">
                JavaScript data types and data structures
              </h1>
              <h2 className="text-sm text-base-span">Há 1 dia</h2>
            </div>
            <p className="mt-5 text-base text-base-text overflow-hidden">
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
