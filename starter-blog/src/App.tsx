import Header from 'components/Header'
import Blog from 'pages/blog'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Header />
      <Blog />
    </Fragment>
  )
}

export default App
