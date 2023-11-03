import Header from "./widgets/header";
import HomePage from "./widgets/home";
import Navbar from "./widgets/navbar";
import SideBar from "./widgets/sidebar";

const RootLayout = () => {
    return ( 
        <main className="w-screen h-screen flex flex-row bg-stone-300 overflow-hidden">
            <Navbar/>
            <section className="flex-1 flex flex-col">
                <Header/>
                <section className="flex-1 flex-row">
                    <SideBar/>
                    <HomePage/>
                </section>

            </section>
        </main>
     );
}
 
export default RootLayout;