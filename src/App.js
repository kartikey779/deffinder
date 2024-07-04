// App.js
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ComputerScience from './pages/computerScience';
// import Economics from './pages/economics'; 
// import MusicPage from './pages/musicPage'; 
import React,{useState, useEffect} from 'react';
import RootLayout from './pages/root'; 
import Alphabet from './pages/Alphabet'; 
// import SubjectComponent from './subjects/allInOne';
import DynamicSubject from './pages/DySubject';
import CombinedComponent from './subjects/allInOne';
import Login from './auth/Login';
import Blog from './article/Blog';

// ... (your existing imports)

const App = () => {
  const [uniqueSubjects, setUniqueSubjects] = useState([]);

  useEffect(() => {
    // Fetch unique subjects from the server
    fetch('https://deffind-api.vercel.app/words/subjects/uniqueSubjects', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'uniqueSubjects');
        setUniqueSubjects(data);
      })
      .catch((error) => {
        console.error('error fetching unique subjects:', error);
      });
  }, []);

  const routes = [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        ...uniqueSubjects.map((subject) => ({
          path: `/subjects/${subject}`,
          element: <DynamicSubject  key={subject}  subject={subject}/>,
        })),
        { path: '/alphabet', element: <Alphabet /> },
        { path: '/subjects/*', element: <DynamicSubject /> },
        { path: '/*', element: <CombinedComponent /> },
        { path:'/login', element: <Login/>},
        { path:'/blog', element:<Blog/>}
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;


