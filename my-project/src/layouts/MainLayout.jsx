import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            {/* Navber */}
            <Header></Header>

            <div className="min-h-[calc(100vh-232px)] container mx-auto px-20 py-12">
                {/* Dainamic section */}
                <Outlet></Outlet>

            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;