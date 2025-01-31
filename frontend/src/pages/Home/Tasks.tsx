import { useState } from "react";

const tasks = [
  {
    day: "Day 1",
    tasks: [
      { title: "Do 15 min Exercise (It can be Yoga,meditation etc..", isChecked: false, proof: [] },
      { title: "Do not eat junk food today", isChecked: false, proof: [] },
    ],
  },
  // {
  //   day: "Day 2",
  //   tasks: [
  //     { title: "Run for a mile", isChecked: true, proof: [] },
  //     { title: "Have breakfast", isChecked: true, proof: [] },
  //   ],
  // },
];

const Tasks = () => {
  const [activeDay, setActiveDay] = useState<string | null>(null);

  const handleToggleTasks = (day: string) => {
    setActiveDay((prev) => (prev === day ? null : day));
  };

  return (
    <div className="m-10">
      {tasks.map((dayTask, dayIndex) => (
        <div key={dayIndex} className="mb-6">
          <h1
            className="text-xl font-bold cursor-pointer hover:text-blue-600 shadow-md rounded p-5 bg-[#f3f3f]"
            onClick={() => handleToggleTasks(dayTask.day)}
          >
            {dayTask.day}
          </h1>
          {activeDay === dayTask.day && (
            <ul className="mt-4 space-y-3 pl-4">
              {dayTask.tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="flex items-center gap-4 bg-gray-50 p-3 rounded shadow-sm"
                >
                  <input
                    type="checkbox"
                    defaultChecked={task.isChecked}
                  />
                  <h2>{task.title}</h2>
                  <button className="ml-auto px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Upload your proof (optional)
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tasks;
