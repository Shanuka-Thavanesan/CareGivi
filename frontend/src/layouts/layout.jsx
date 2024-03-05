import React from 'react';

import Header from '../componets/Header/Header';
import Footer from '../componets/Footer/Footer';
import Routers from '../routes/Routers';

const Layout =()=>{
    return <>
    <Header />
        <main>
            <Routers />
        </main>
            <Footer />
    </> 
};

export default Layout;