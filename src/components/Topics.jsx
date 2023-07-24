import * as React from "react";

// import TopicCard from "./TopicCard";
import { Link } from "react-router-dom";

function TopicCard({ name, style }) {
  return (
    <div
      className="p-4  rounded-md shadow-md text-white text-center font-bold transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
      style={{
        background: style,
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.15)",
      }}
    >
      {name}
    </div>
  );
}

function Topics() {
  const topicsList = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
  ];

  return (
    <main className="h-screen  flex justify-center p-5 pb-10 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x md:grid-cols-3 lg:grid-cols-4 md:gap-x-20 gap-y-10">
        {topicsList.map((topic) => (
          <Link to={`/letsplay/${topic.id}`} key={topic.id}>
            <TopicCard name={topic.name} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Topics;
