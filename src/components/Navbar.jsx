function Navbar() {
  return (
    <nav className="bg-[#071426] text-white px-10 py-5 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          Bharat <span className="text-orange-400">Explorer AI</span>
        </h1>

        <p className="text-sm text-gray-400">
          Discover India Smarter
        </p>
      </div>

      <ul className="hidden md:flex gap-10 text-lg">
        <li className="hover:text-orange-400 cursor-pointer">Home</li>
        <li className="hover:text-orange-400 cursor-pointer">Explore</li>
        <li className="hover:text-orange-400 cursor-pointer">States</li>
        <li className="hover:text-orange-400 cursor-pointer">AI Assistant</li>
      </ul>

    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold">
  Start Exploring
</button>

    </nav>
  )
}

export default Navbar