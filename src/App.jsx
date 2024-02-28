import { createBrowserRouter , RouterProvider } from 'react-router-dom' ;
import './App.css';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';
import RootLayout from './pages/Root';
import ErrorPage, {ErrorPage2} from './pages/Error';
import UserHome from './pages/UserHome';
import Home from './pages/Home';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost'
import UserPosts from './pages/UserPosts';
import PostById from './pages/PostById';

const router = createBrowserRouter([
  {
    path: '/',
    element : <RootLayout />,
    errorElement: <ErrorPage />,
    children : [
      { index:true , element: <Welcome /> },
      { path: 'signIn', element: <SignIn /> },
    ]
  } ,
  { 
    path : '/home',
    element : <UserHome />,
    errorElement  : <ErrorPage2 />,
    children : [
      { index: true, element: <Home /> },
      { path: 'posts', element: <Posts /> },
      { path: 'posts/:id', element: <PostById />},
      { path: 'newPost', element: <NewPost /> },
      { path: 'posted', element: <UserPosts />} 
    ]
  }
])

export default function App() {

  return < RouterProvider router={router} />

}


