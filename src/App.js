import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComputerScience from './pages/computerScience';
import Economics from './pages/economics';
import MusicPage from './pages/musicPage';
import RootLayout from './pages/root';
import Alphabet from './pages/Alphabet';

const router = createBrowserRouter([
  {path:'/',
   element:<RootLayout />,
  children:[ 
    {path:'/', element:<HomePage/>},
    {path:'/ComputerScience', element:<ComputerScience/>},
    {path:'/Economics', element:<Economics/>},
    {path:'/Music', element:<MusicPage/>},
    {path:'/alphabet', element:<Alphabet/>},
    
  ]},
  
])

function App(){
  return <RouterProvider router={router}/>

}
export default App;