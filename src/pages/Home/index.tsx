import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRegBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { api } from '../../service/api'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
interface UserProps {
  html_url: string
  avatar_url: string
  login: string
}

export interface PostProps {
  body: string
  title: string
  created_at: string
  url: string
  number: number
  user: UserProps
}

const newPostFormValidationSchema = zod.object({
  content: zod
    .string()
    .min(1, { message: 'Necessario ter no minimo 1 caractere' })
    .max(60),
})
type NewPostFormData = zod.infer<typeof newPostFormValidationSchema>

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const newPostForm = useForm<NewPostFormData>({
    resolver: zodResolver(newPostFormValidationSchema),
  })

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = newPostForm

  useEffect(() => {
    async function getPosts() {
      const response = await api.get('search/issues', {
        params: {
          q: `repo:daltonmenezes/test`,
        },
      })
      setPosts(response.data.items)
    }
    getPosts()
  }, [])

  async function searchContent(data: NewPostFormData) {
    const response = await api.get('search/issues', {
      params: {
        q: `${data.content}repo:daltonmenezes/test`,
      },
    })
    setPosts(response.data.items)
    reset()
  }

  return (
    <div>
      <div className="p-10 bg-base-profile rounded-lg -mt-12 flex gap-8 ">
        <img
          src={posts[0]?.user.avatar_url}
          alt=""
          className="w-36 rounded-lg"
        />
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-base-title font-bold leading-tight text-2xl">
              {posts[0]?.user.login}
            </h1>
            <a
              href={posts[0]?.user.html_url}
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
              <span className="text-base-subtitle">{posts[0]?.user.login}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegBuilding className="text-base-label text-lg" />
              <span className="text-base-subtitle">{posts[0]?.user.login}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaUserFriends className="text-base-label text-lg" />
              <span className="text-base-subtitle">{posts[0]?.user.login}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-60">
        <div className="flex justify-between items-center">
          <h2 className="text-base-subtitle text-2xl font-bold">Publicações</h2>
          <h3 className="text-base-span text-sm font-bold space-x-5">
            <span>{posts.length}</span> publicações
          </h3>
        </div>
        <form onSubmit={handleSubmit(searchContent)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            className="p-3 w-full mt-3 rounded-md bg-base-input border border-base-border outline-none focus:outline-blue-theme text-base-text"
            {...register('content')}
          />
          {errors.content && (
            <p className="text-base-text font-bold mt-4 text-2xl">
              {errors.content.message}
            </p>
          )}
        </form>
        <div className="pt-12 grid grid-cols-2 gap-5 ">
          {posts.map((post) => (
            <Link
              key={post.number}
              to={`/post/${post.number}`}
              className="rounded-xl bg-base-post p-8"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-base-title">
                  {post.title}
                </h1>
                <h2 className="text-sm text-base-span">Há 1 dia</h2>
              </div>
              <p className="mt-5 text-base text-base-text overflow-hidden">
                {post.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
