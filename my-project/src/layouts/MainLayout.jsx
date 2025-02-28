import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            {/* Navber */}
            <Header></Header>
            <div className="min-h-[calc(100vh-232px)]">{/* Dainamic section */}</div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;