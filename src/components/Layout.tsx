import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { Header } from './Header';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className='w-full h-full'>
            <Header />
            <div className="flex flex-col md:flex-row w-full"> 
                <Sidebar />
                <main className='w-full p-6  mt-16'>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
