import './globals.css';
import SideBar from '@/components/sidebar/Sidebar';
import Navbar from '@/components/navbar/Navbar';
import { ContactFormProvider, MenuProvider } from '@/provider/Provider';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer/Footer';

export const metadata = {
    title: 'portfolio',
    description: 'personal portfolio',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MenuProvider>
                    <ContactFormProvider>
                        <Toaster />
                        <div className="flex">
                            <SideBar />
                            <main className="flex-1 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                                <Footer/>
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
