import './App.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Routers from './pages/Routes'
import ScreenLoader from './components/Misc/screenLoader'
import { useAuth } from './context/Auth'
import { ConfigProvider } from 'antd'


function App() {

  const { isAppLoading } = useAuth()
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutlineWidth: 0 } } }}>
        {!isAppLoading
          ? <Routers />
          : <ScreenLoader />
        }
      </ConfigProvider>

    </>
  )
}

export default App
