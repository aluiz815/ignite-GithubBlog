import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const DefaultLayout = () => {
  return (
    <div className="bg-base-background w-screen h-screen font-nunito">
      <Header />
      <div className="px-72">
        <Outlet />
      </div>
    </div>
  )
}
