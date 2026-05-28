function AIAssistantSection() {
  return (
    <section className="bg-[#071426] text-white px-10 py-24">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-orange-400 text-lg font-semibold mb-5">
            🤖 AI Learning Assistant
          </p>

          <h2 className="text-6xl font-extrabold leading-tight">
            Learn India with
            <span className="text-orange-400"> Smart AI </span>
            Assistance
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            Ask questions about Indian history, culture, science,
            geography, festivals and famous personalities in simple,
            child-friendly language.
          </p>

          {/* Suggestions */}
          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/20 transition">
              Who is APJ Abdul Kalam?
            </button>

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/20 transition">
              Tell me about Karnataka
            </button>

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/20 transition">
              Why is Diwali celebrated?
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 w-full max-w-lg shadow-2xl">

            {/* Chat Header */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-3xl">
                🤖
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Bharat AI Assistant
                </h3>

                <p className="text-green-400">
                  Online
                </p>
              </div>

            </div>

            {/* Chat Messages */}
            <div className="space-y-5">

              <div className="bg-white/10 rounded-2xl p-5 max-w-sm">
                Hello 👋 <br />
                Ask me anything about India!
              </div>

              <div className="bg-orange-500 rounded-2xl p-5 ml-auto max-w-sm">
                Tell me about Taj Mahal
              </div>

              <div className="bg-white/10 rounded-2xl p-5 max-w-sm">
                The Taj Mahal is a beautiful white marble monument
                located in Agra, Uttar Pradesh. It was built by
                Emperor Shah Jahan.
              </div>

            </div>

            {/* Input */}
            <div className="mt-8 flex bg-white rounded-2xl overflow-hidden">

              <input
                type="text"
                placeholder="Ask something..."
                className="flex-1 px-5 py-4 text-black outline-none"
              />

              <button className="bg-orange-500 hover:bg-orange-600 px-6 font-semibold">
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AIAssistantSection