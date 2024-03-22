import HomeHero from "../HomeHero/HomeHero";


const Home = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <HomeHero></HomeHero>
        <img className="absolute bottom-0 w-full" src="/src/assets/wave.svg" alt="" />
        </div>
    );
};

export default Home;