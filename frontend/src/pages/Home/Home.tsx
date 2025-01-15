import { useEffect, useState } from "react";
import Contacts from "../../components/Footer";
import Navbar from "../../components/Navbar";


const YesterdaysProgress = () => {
    return (
        <div className="bg-[#6A1B9A] shadow-md p-4 rounded-md">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[#FFFFFF] text-xl">Your Yesterday's Progress!</h1>
                <p className="pt-2 text-[#F1F1F1] text-center">
                    Ohh!! Sorry, you didn't make progress yesterday, but don’t worry, today is a new day!
                </p>
            </div>
        </div>
    );
}

const TodaysProgress = ({ currentTime }: { currentTime: string }) => {
    return (
        <div className="flex flex-col items-center gap-5 bg-[#1E3A8A] p-4 rounded-md w-full">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-white text-xl">Your Today's Progress!</h1>
                <p className="pt-2 text-center text-white">
                    Hey! {currentTime} left, you can still complete the challenge and update your progress!
                </p>
            </div>
            <p className="bg-[#4F46E5] hover:bg-[#4338CA] px-3 py-2 rounded text-white cursor-pointer">Click to update your progress</p>
        </div>
    );
};

const TodaysMotivation = () => {
    return (
        <div>
            <div className="flex flex-col justify-center gap-2 border-[#A2A9D3] bg-[#512D6D] p-5 rounded-lg w-full text-center text-white">
                <h1 className="font-semibold text-xl">Today's Motivation</h1>
                <p>Gear up your day! Ready for the challenge?</p>
            </div>
        </div>
    );
}

const Home = () => {
    const token = localStorage.getItem("token");
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            {token ? (
                <>
                    <div className="flex flex-col justify-center gap-5 m-5 md:m-20 text-white">
                        <TodaysMotivation />
                        <YesterdaysProgress />
                        <TodaysProgress currentTime={currentTime} />
                        <div className="relative bg-[#5E2A8C] shadow-lg mt-5 rounded-lg w-full h-[60vh] text-white"></div>
                    </div>
                    <Contacts />
                </>
            )
                :
                null
            }
        </>
    );
}

export default Home;