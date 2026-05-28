function StatsSection() {
  return (
    <section className="px-10 py-16 bg-white">

      <div className="grid md:grid-cols-5 gap-8 text-center">

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
  )
}

export default StatsSection