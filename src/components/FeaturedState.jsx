import telanganaImage from "../assets/telangana.jpg"
function FeaturedState() {
  return (
    <section className="bg-[#f5f5f7] px-10 py-24">

      <div className="bg-gradient-to-r from-purple-900 to-pink-600 rounded-[40px] overflow-hidden shadow-2xl">

        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT SIDE */}
          <div className="p-14 text-white">

            <p className="text-orange-300 text-lg font-semibold mb-5">
              🌟 Featured State of the Week
            </p>

            <h2 className="text-6xl font-extrabold leading-tight">
              Telangana
            </h2>

            <p className="mt-8 text-xl text-pink-100 leading-relaxed">
              Discover Telangana — famous for Hyderabad,
              Charminar, Golconda Fort, rich Telugu culture,
              festivals, delicious biryani and modern technology hubs.
            </p>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="bg-white/10 rounded-2xl p-5">
                🕌 Charminar
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                🍛 Hyderabadi Biryani
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                🏰 Golconda Fort
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                🎉 Bathukamma Festival
              </div>

            </div>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-semibold transition">
              Explore Telangana
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="h-full">

            <img
  src={telanganaImage}
  alt="Telangana"
  className="w-full h-full object-cover"
/>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FeaturedState