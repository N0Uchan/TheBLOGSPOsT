import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import UserHome from './pages/UserHome';
import Home from './pages/Home';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost'
import UserPosts from './pages/UserPosts';
import PostById from './pages/PostById';
import UserPostById from './pages/UserPostById';
import UserDetailsContextProvider from './components/userDetailsContextProvider';

export default function App() {
  return (
    <UserDetailsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Welcome />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="home" element={<UserHome />}>
              <Route index element={<Home />} />
              <Route path="posts" element={<Posts />} />
              <Route path="posts/post/:id" element={<PostById />} />
              <Route path="posted/post/:id" element={<UserPostById />} />
              <Route path="newPost" element={<NewPost />} />
              <Route path="posted" element={<UserPosts />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </UserDetailsContextProvider>
  );
}



// import { createBrowserRouter , RouterProvider } from 'react-router-dom' ;
// import './App.css';
// import SignIn from './pages/SignIn';
// import Welcome from './pages/Welcome';
// import RootLayout from './pages/Root';
// import ErrorPage, {ErrorPage2} from './pages/Error';
// import UserHome from './pages/UserHome';
// import Home from './pages/Home';
// import Posts from './pages/Posts';
// import NewPost from './pages/NewPost'
// import UserPosts from './pages/UserPosts';
// import PostById from './pages/PostById';

// const router = createBrowserRouter([
//   {
//     path: '/TheBLOGSPOsT',
//     element : <RootLayout />,
//     errorElement: <ErrorPage />,
//     children : [
//       { index:true , element: <Welcome /> },
//       { path: 'signIn', element: <SignIn /> },
//     ]
//   } ,
//   { 
//     path : 'TheBLOGSPOsT/home',
//     element : <UserHome />,
//     errorElement  : <ErrorPage2 />,
//     children : [
//       { index: true, element: <Home /> },
//       { path: 'posts', element: <Posts /> },
//       { path: 'posts/:id', element: <PostById />},
//       { path: 'newPost', element: <NewPost /> },
//       { path: 'posted', element: <UserPosts />} 
//     ]
//   }
// ])

// export default function App() {

//   return < RouterProvider router={router} />

// }


