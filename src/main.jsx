// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './config/redux/store/store.js'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )


import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import { Provider } from 'react-redux'
import { store } from './config/redux/store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "*",
        element: <h1>Not Found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>

    </RouterProvider>
  </Provider>
)