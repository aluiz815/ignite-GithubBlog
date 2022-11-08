import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const DefaultLayout = () => {
  return (
    <div className="font-nunito w-screen h-screen  bg-base-background box-border">
      <Header />
      <div className="px-72  bg-base-background">
        <Outlet />
      </div>
    </div>
  )
}
