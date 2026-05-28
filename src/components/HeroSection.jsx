function HeroSection() {
  return (
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

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <div className="w-[450px] h-[500px] bg-gradient-to-b from-blue-500 to-cyan-300 rounded-[40px] shadow-2xl flex items-center justify-center text-3xl font-bold">
            INDIA MAP
          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection