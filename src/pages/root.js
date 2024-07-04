import { Outlet } from 'react-router-dom';
import Header from '../HEADER/header';
import Footer from '../footer/footer';

function RootLayout(){
    return (
    <>
    < Header/>
    <Outlet/>
    <Footer/>
    </>
    );
}

export default RootLayout;