import { Outlet } from 'react-router-dom';
import Header  from './Layout/Header';
import Footer from './Layout/Footer';
import { Fragment } from 'react';

const RootLayout = () => {
   
    return (
        <Fragment>
        <Header />
         <Outlet />
          <Footer/>
       </Fragment>
      
    )
         

       
    
}
export default RootLayout;