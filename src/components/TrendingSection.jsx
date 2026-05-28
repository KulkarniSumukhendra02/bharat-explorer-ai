function TrendingSection() {

  const places = [
    {
      title: "Goa Beaches",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Kashmir Valleys",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Hampi",
      image:
        "https://images.unsplash.com/photo-1600100597609-8df7d24f4d1f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <section className="bg-[#f5f5f7] px-10 py-20">

      <div className="flex items-center justify-between mb-12">

        <h2 className="text-5xl font-bold">
          🔥 Trending Destinations
        </h2>

        <button className="text-blue-600 font-semibold text-lg">
          View All →
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-8">

        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
          >

            <img
              src={place.image}
              alt={place.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {place.title}
              </h3>

              <p className="text-gray-500 mt-3">
                Explore breathtaking beauty and culture.
              </p>

              <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold">
                Explore
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default TrendingSection