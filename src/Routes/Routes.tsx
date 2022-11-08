import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
