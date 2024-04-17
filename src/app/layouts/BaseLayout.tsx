import { Outlet } from 'react-router-dom'

export default function BaseLayout() {
  return (
    <div className='app'>
      <Outlet/>
    </div>
  )
}
