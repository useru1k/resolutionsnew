import { useEffect, useState } from "react";
import Contacts from "../../components/Footer";
// import Navbar from "../../components/Navbar";
import Tasks from "./Tasks";

const SectionCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
    {children}
  </div>
);

const YesterdaysProgress = () => (
  <SectionCard>
    <h1 className="text-2xl font-bold mb-3 text-center">
      Your Yesterday's Progress!
    </h1>
    <p className="text-gray-700 text-center">
      Ohh!! Sorry, you didn't make progress yesterday, but don’t worry, today is
      a new day!
    </p>
  </SectionCard>
);

const TodaysProgress = ({ currentTime }: { currentTime: string }) => (
  <SectionCard>
    <h1 className="text-2xl font-bold mb-3 text-center">Your Today's Progress!</h1>
    <p className="text-gray-700 text-center">
      Hey! {currentTime} left, you can still complete the challenge and update
      your progress!
    </p>
    <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
      Click to update your progress
    </button>
  </SectionCard>
);

const TodaysMotivation = () => (
  <SectionCard>
    <h1 className="text-2xl font-bold mb-3 text-center">Today's Motivation</h1>
    <p className="text-gray-700 text-center">
      Gear up your day! Ready for the challenge?
    </p>
  </SectionCard>
);

const Home = () => {
  const token = localStorage.getItem("token");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {token && (
        <>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 p-8">
            <TodaysMotivation />
            <YesterdaysProgress />
            <TodaysProgress currentTime={currentTime} />
          </div>
          <Tasks />
          <Contacts />
        </>
      )}
    </>
  );
};

export default Home;
