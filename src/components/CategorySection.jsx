import {
  FaUtensils,
  FaLandmark,
  FaMountain,
  FaTree,
} from "react-icons/fa"

import { GiTempleGate } from "react-icons/gi"
import { MdFestival } from "react-icons/md"

function CategorySection() {

  const categories = [
    {
      title: "Food",
      icon: <FaUtensils />,
      color: "from-orange-400 to-red-500",
    },

    {
      title: "Culture",
      icon: <MdFestival />,
      color: "from-pink-400 to-purple-500",
    },

    {
      title: "Temples",
      icon: <GiTempleGate />,
      color: "from-yellow-400 to-orange-500",
    },

    {
      title: "Heritage",
      icon: <FaLandmark />,
      color: "from-blue-400 to-cyan-500",
    },

    {
      title: "Mountains",
      icon: <FaMountain />,
      color: "from-green-400 to-emerald-500",
    },

    {
      title: "Wildlife",
      icon: <FaTree />,
      color: "from-lime-400 to-green-600",
    },
  ]

  return (
    <section className="bg-white px-10 py-20">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold">
          Explore by Categories
        </h2>

        <p className="text-gray-500 mt-5 text-xl">
          Discover India through culture, food, heritage and nature
        </p>

      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">

        {categories.map((item, index) => (
          <div
            key={index}
            className="group rounded-3xl p-8 bg-[#f5f5f7] hover:shadow-2xl transition duration-300 hover:-translate-y-3 cursor-pointer"
          >

            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-4xl mx-auto`}
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-center mt-6">
              {item.title}
            </h3>

            <p className="text-gray-500 text-center mt-3">
              Explore amazing {item.title.toLowerCase()} experiences
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default CategorySection