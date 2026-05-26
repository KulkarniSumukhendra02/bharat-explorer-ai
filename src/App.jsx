function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      
      {/* ================= NAVBAR ================= */}
      <nav className="bg-[#071426] text-white px-10 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            Bharat <span className="text-orange-400">Explorer AI</span>
          </h1>
          <p className="text-sm text-gray-400">
            Discover India Smarter
          </p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">Explore States</li>
          <li className="hover:text-orange-400 cursor-pointer">Destinations</li>
          <li className="hover:text-orange-400 cursor-pointer">AI Planner</li>
          <li className="hover:text-orange-400 cursor-pointer">Festivals</li>
        </ul>

        {/* Login */}
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold">
          Login
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#071426] text-white px-10 pt-20 pb-16">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div>

            <p className="bg-white/10 inline-block px-5 py-2 rounded-full text-orange-300 mb-6">
              ✨ AI Powered Discovery of Incredible India
            </p>

            <h2 className="text-6xl font-extrabold leading-tight">
              Explore India <br />
              Like <span className="text-orange-400">Never Before</span>
            </h2>

            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
              Your AI travel companion to discover states, hidden gems,
              culture, food, history and unforgettable experiences across India.
            </p>

            {/* Search */}
            <div className="mt-10 flex bg-white rounded-2xl overflow-hidden shadow-xl max-w-2xl">

              <input
                type="text"
                placeholder="Search places, states, food, festivals..."
                className="flex-1 px-6 py-5 text-black text-lg outline-none"
              />

              <button className="bg-orange-500 px-8 hover:bg-orange-600 text-lg font-semibold">
                Search
              </button>
            </div>

            {/* Quick Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-[#0d223d] border border-white/10 px-5 py-4 rounded-2xl hover:bg-[#163458]">
                Explore States
              </button>

              <button className="bg-[#0d223d] border border-white/10 px-5 py-4 rounded-2xl hover:bg-[#163458]">
                Famous Foods
              </button>

              <button className="bg-[#0d223d] border border-white/10 px-5 py-4 rounded-2xl hover:bg-[#163458]">
                Historical Places
              </button>

              <button className="bg-[#0d223d] border border-white/10 px-5 py-4 rounded-2xl hover:bg-[#163458]">
                Festivals
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* India Map Placeholder */}
            <div className="w-[450px] h-[500px] bg-gradient-to-b from-blue-500 to-cyan-300 rounded-[40px] shadow-2xl flex items-center justify-center text-3xl font-bold">
              INDIA MAP
            </div>

            {/* Karnataka Card */}
            <div className="absolute top-10 right-0 bg-[#0d223d] border border-white/10 p-6 rounded-3xl w-[280px] shadow-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Karnataka
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>📍 Capital: Bengaluru</p>
                <p>🍛 Famous Food: Dosa</p>
                <p>🏛 Mysore Palace</p>
                <p>🎭 Yakshagana Culture</p>
              </div>

              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold">
                Explore Karnataka
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-10 -mt-8 relative z-20">
        
        <div className="bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-5 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-orange-500">28+</h3>
            <p className="text-gray-500 mt-2">States & UTs</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">10K+</h3>
            <p className="text-gray-500 mt-2">Tourist Places</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">500+</h3>
            <p className="text-gray-500 mt-2">Foods</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-500">100+</h3>
            <p className="text-gray-500 mt-2">Festivals</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">1K+</h3>
            <p className="text-gray-500 mt-2">Cultures</p>
          </div>

        </div>
      </section>

      {/* ================= TRENDING ================= */}
      <section className="px-10 py-20">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">
            🔥 Trending Destinations
          </h2>

          <button className="text-blue-600 font-semibold">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {/* Card */}
          {[
            "Goa Beaches",
            "Kashmir Valleys",
            "Hampi",
            "Jaipur",
            "Kerala Backwaters",
          ].map((place) => (
            <div
              key={place}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <div className="h-52 bg-gray-300"></div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{place}</h3>

                <p className="text-yellow-500 mt-2">
                  ⭐ 4.8
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="px-10 pb-20">

        <h2 className="text-4xl font-bold mb-10">
          Explore by Categories
        </h2>

        <div className="grid md:grid-cols-6 gap-6">

          {[
            "Food",
            "Culture",
            "Temples",
            "Mountains",
            "Beaches",
            "Wildlife",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">✨</div>

              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default App