import React from "react";

const categories = {
  "Trending Now": [
    "https://image.tmdb.org/t/p/w500/nygOUcBKPHFTbxsYRFZVeP6tiTI.jpg",
    "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    "https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    "https://image.tmdb.org/t/p/w500/7q448EVOnuE3gVAx24krzO7SNXM.jpg",
    "https://image.tmdb.org/t/p/w500/q8EEFNUXLEcTcI0HDNwEptIgZV8.jpg"
  ],

  "Action Movies": [
    "https://image.tmdb.org/t/p/w500/2rVkDZFLN6di2lRv8caseX1Tfyj.jpg",
    "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGdEyVu8lF5R.jpg",
    "https://image.tmdb.org/t/p/w500/1eKWqTHp4OgKdx1QX1O9LxKHr1M.jpg",
    "https://image.tmdb.org/t/p/w500/8rtJYpPz1TsqfXl7nUlT5PUGzt7.jpg",
    "https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg"
  ],

  "Romantic Movies": [
    "https://image.tmdb.org/t/p/w500/t7xhP8SQTVanzecvn1oQRVWG4aS.jpg",
    "https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
    "https://image.tmdb.org/t/p/w500/yGHGgsYtTyOuhvTFvzdZgXFaG9x.jpg",
    "https://image.tmdb.org/t/p/w500/ztZ4vw151mw04bg87l3VBpB6Tnf.jpg"
  ]
};

const Dashboard = ({ onLogout }) => {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-4 fixed w-full top-0 bg-black/70 backdrop-blur z-30">
        <h1 className="text-4xl font-extrabold text-red-600">
          NETFLIX
        </h1>

        <div className="flex items-center gap-6">
          <button
            onClick={onLogout}
            className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="w-10 h-10 rounded"
          />
        </div>
      </nav>

      {/* HERO BANNER */}
      <div
        className="w-full h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/sRLC052ieEzkQs9dEtPMfFxYkej.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>

        <div className="absolute bottom-20 left-10">
          <h1 className="text-5xl font-extrabold mb-4">INTERSTELLAR</h1>
          <p className="max-w-xl text-lg opacity-80">
            A team of explorers travel through a wormhole in space in an attempt to save humanity.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300">
              ▶ Play
            </button>

            <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* MOVIE ROWS */}
      <div className="mt-10 px-6">
        {Object.entries(categories).map(([category, imgs]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>

            <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
              {imgs.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className="w-52 rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;