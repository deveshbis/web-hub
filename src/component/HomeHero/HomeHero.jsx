import { Link } from "react-router-dom";

const HomeHero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">WellCome to <span>Web Hub</span></h1>
                        <p className="py-6">Welcome to WebHub - Your central hub for all things web-related. Join us and discover a world of resources, tools, and community to fuel your online journey.</p>
                        <div className="flex gap-2 justify-center">
                            <Link to='/blogs' className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Read Blogs</span>
                            </Link>
                        
                            <Link to='/bookmarks' className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Bookmarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;