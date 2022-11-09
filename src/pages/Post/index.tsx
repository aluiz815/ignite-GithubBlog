/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRegBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { PostProps } from '../Home'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Post = () => {
  const params = useParams()
  const id = params.id

  const [post, setPost] = useState<PostProps>()

  useEffect(() => {
    async function getPosts() {
      const response = await api.get(`/repos/daltonmenezes/test/issues/${id}`)
      setPost(response.data)
    }
    getPosts()
  }, [id])

  return (
    <div>
      <div className="p-10 bg-base-profile rounded-lg -mt-12 flex gap-8 ">
        <div className="flex flex-col justify-center items-start  w-full">
          <div className="flex justify-between items-center w-full">
            <Link
              to="/"
              className="text-blue-theme font-bold text-xs flex gap-2"
            >
              VOLTAR
              <FaExternalLinkAlt />
            </Link>
            <a
              href={post?.user.html_url}
              target="_blank"
              className="text-blue-theme font-bold text-xs flex gap-2 cursor-pointer"
              rel="noreferrer"
            >
              VER NO GITHUB
              <FaExternalLinkAlt />
            </a>
          </div>

          <h1 className="mt-5 text-base-title font-bold leading-tight text-2xl">
            {post?.title}
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
        <ReactMarkdown className="text-base-text">{post?.body!}</ReactMarkdown>
      </div>
    </div>
  )
}
