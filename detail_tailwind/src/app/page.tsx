export default function Appearance() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white rounded-2xl shadow-md p-6 w-[420px]">
        
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-xl font-semibold">Appearance</h1>
          <p className="text-gray-500 text-sm">
            Set or customize your preferences for the system
          </p>
        </header>

        <hr className="my-4 border-gray-200" />

        {/* Language */}
        <section className="mb-4">
          <h2 className="flex items-center justify-between">
            <h2>
              <h2 className="text-sm font-medium text-gray-700 mb-1">Language</h2>
              <p className="text-gray-500 text-xs mb-0">
                Select the language of the platform
              </p>
            </h2>
            <select className="border border-gray-300 shadow-xs rounded-lg px-3 py-2 text-sm ml-4 self-center min-w-[120px]">
              <option>English</option>
            </select>
          </h2>
        </section>

        <hr className="my-4 border-gray-200" />

        {/* Interface theme */}
        <section className="mb-4">
          <h2 className="text-sm font-medium text-gray-700 mb-1">
            Interface theme
          </h2>
          <p className="text-gray-500 text-xs mb-2">
            Customize your application appearance
          </p>
          <section className="grid grid-cols-3 gap-3">
            <figure className=" rounded-xl p-2 cursor-pointer hover:ring-2 hover:ring-indigo-400">
              <img src="/auto.png" alt="Auto theme" className="rounded-lg" />
              <figcaption className="text-center text-gray-500 font-semibold text-xs mt-1">Auto</figcaption>
            </figure>
            <figure className=" border-indigo-500 rounded-xl p-2 cursor-pointer">
              <img src="/light.png" alt="Light theme" className="rounded-lg" />
              <figcaption className="text-center text-gray-500 font-semibold text-xs mt-1">Light</figcaption>
            </figure>
            <figure className=" rounded-xl p-2 cursor-pointer hover:ring-2 hover:ring-indigo-400">
              <img src="/dark.png" alt="Dark theme" className="rounded-lg" />
              <figcaption className="text-center text-gray-500 font-semibold text-xs mt-1">Dark</figcaption>
            </figure>
          </section>
        </section>

        <hr className="my-4 border-gray-200" />

        {/* Accent color */}
        <section className="mb-4">
          <h2 className="flex items-center justify-between">
            <h2>
              <h2 className="text-sm font-medium text-gray-700 mb-1">Accent color</h2>
              <p className="text-gray-500 text-xs mb-2">
              Pick your platform's main color
              </p>
            </h2>
          <ul className="flex space-x-3">
            <li><span className="w-5 h-5 rounded-full bg-red-400 inline-block cursor-pointer"></span></li>
            <li><span className="w-5 h-5 rounded-full bg-orange-400 inline-block cursor-pointer"></span></li>
            <li><span className="w-5 h-5 rounded-full bg-yellow-400 inline-block cursor-pointer"></span></li>
            <li><span className="w-5 h-5 rounded-full bg-green-400 inline-block cursor-pointer"></span></li>
            <li><span className="w-5 h-5 rounded-full bg-blue-400 inline-block cursor-pointer"></span></li>
          </ul>
          </h2>
        </section>

        <hr className="my-4 border-gray-200" />

        {/* Toggles */}
        <section className="mb-4">
          <article className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
            <section className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.75 7.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm3.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM6 13.25c0-.69.56-1.25 1.25-1.25h5.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-5.5C6.56 14.5 6 13.94 6 13.25z" />
              </svg>
              <span className="text-sm text-gray-700">Reduce motion</span>
            </section>
            <section className="w-11 h-6 bg-blue-600 rounded-full relative">
              <span className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></span>
            </section>
          </article>

          <article className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
            <section className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span className="text-sm text-gray-700">Auto play</span>
            </section>
            <section className="w-11 h-6 bg-blue-600 rounded-full relative">
              <span className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></span>
            </section>
          </article>

          <article className="flex items-center justify-between pb-3 border-b border-gray-200">
            <section className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">High quality photo</span>
            </section>
            <section className="w-11 h-6 bg-gray-200 rounded-full relative">
              <span className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-sm"></span>
            </section>
          </article>
        </section>

        {/* Footer */}
        <footer className="flex justify-between ">
          <button className="text-sm text-gray-500 hover:underline">
            Reset to default
          </button>
          <nav className="flex space-x-2">
            <button className="px-4 py-2 text-sm rounded-lg border border-gray-300">Cancel</button>
            <button className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white">
              Save Preferences
            </button>
          </nav>
        </footer>
      </section>
    </main>
  );
}
