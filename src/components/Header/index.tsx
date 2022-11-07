import Logo from '../../assets/logo.svg'
import BgLeft from '../../assets/bgLeft.svg'
import BgRight from '../../assets/bgRight.svg'

export const Header = () => {
  return (
    <div className="h-72 flex justify-between items-center bg-base-post ">
      <img src={BgLeft} alt="" />
      <img src={Logo} alt="" />
      <img src={BgRight} alt="" />
    </div>
  )
}
