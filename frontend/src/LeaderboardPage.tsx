import React from "react";

const leaderboard = [
  { name: "Alice", aura: 120 },
  { name: "Bob", aura: 105 },
  { name: "Claire", aura: 97 },
  { name: "Dan", aura: 85 },
  { name: "Eva", aura: 80 },
];

const LeaderboardPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-2xl font-bold text-blue-700 tracking-wide mb-8">
        Leaderboard
      </h1>
      <div className="w-full max-w-md bg-gray-50 rounded-xl shadow p-6">
        <ol className="space-y-3">
          {leaderboard.map((user, idx) => (
            <li
              key={user.name}
              className={`flex items-center justify-between text-lg font-semibold
              ${idx === 0 ? "text-yellow-500" : "text-gray-800"}`}
            >
              <span>
                #{idx + 1} {user.name}
              </span>
              <span className="font-mono">{user.aura} ✦</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default LeaderboardPage;
