
import About from "../Components/About/About";
// import Contact from "../Components/Contact/Contact";
// import MyWork from "../Components/MyWork/MyWork";
import Banner from "../Components/Banner";
import Services from "../Components/Services/Services";


const HomePage = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            {/* <MyWork showAll={false} /> */}
            {/* <Contact isStandalone={false} /> */}
        </>

    );
};

export default HomePage;
