export default function SignIn() {
  return (
    <main className="min-h-screen bg-red-50 grid place-items-center">
      {/* Card contenedor */}
      <section className="bg-white rounded-2xl shadow-md overflow-hidden w-[900px] flex flex-row relative">
        {/* Imagen flotante fuera del aside */}
        <img
          src="/mounstruo.png"
          alt="Illustration"
          className="w-[500px] h-auto object-contain absolute top-[100px] left-[25px] rounded-2xl p-2 z-20 "
        />
        <img
          src="/pin.png"
          alt="Illustration"
          className="w-[50px] h-auto object-contain absolute top-[30px] left-[28px] rounded-2xl p-2 z-20 "
        />
        {/* Aside de la imagen */}
        <aside className="bg-red-50 flex items-center justify-center p-6 rounded-xl w-[415px] h-[730px] m-8 relative">
        </aside>
        {/* No tiene sesion */}
        <article className="flex flex-col justify-start px-10 py-12 flex-1">
          <header className="mb-6 flex flex-col items-end">
            <p className="text-gray-500 text-xs font-semibold mt-1 mb-40">
              Don’t have an account?{" "}
              <a href="#" className="text-black hover:underline">
                Sign up
              </a>
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mt-2 self-start">Sign in</h1>
          </header>

          {/* Iniciar sesion  */}
          <p className="text-left text-xs font-semibold mb-2 w-full">Sign in with Open account</p>

          {/* Botones de Google y Apple */}
          <section className="flex flex-row gap-x-4 mb-6 w-full justify-center">
            <button className="flex-1 flex items-center justify-center gap-2 border text-xs font-semibold border-gray-300 rounded-lg py-2 hover:bg-gray-50 w-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border text-xs font-semibold border-gray-300 rounded-lg py-2 hover:bg-gray-50 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                alt="Apple ID"
                className="w-5 h-5"
              />
              <span>Apple ID</span>
            </button>
          </section>

          {/* Línea de separación */}
          <div className="border-t border-gray-200 w-full mb-6"></div>

          {/* Divisor */}
          <p className="text-left text-xs font-semibold mb-6">
            Or continue with email address
          </p>

          {/* Email + contraseña */}
          <form className="flex flex-col gap-4 ">
            <label className="flex items-center gap-2  rounded-lg px-3 py-2 bg-gray-50">
              <img
                src="https://icones.pro/wp-content/uploads/2021/02/icone-de-courrier-electronique-gris.png"
                alt="Email"
                className="w-5 h-5"
              />
              <input
                type="email"
                placeholder=""
                className="flex-1 bg-transparent outline-none"
              />
            </label>

            <label className="flex items-center gap-2  rounded-lg px-3 py-2 bg-gray-50">
              <img
                src="https://cdn-icons-png.freepik.com/512/2725/2725281.png"
                alt="Password"
                className="w-5 h-5"
              />
              <input
                type="password"
                placeholder=""
                className="flex-1 bg-transparent outline-none"
              />
            </label>

            {/* boton final */}
            <button
              type="submit"
              className=" bg-blue-600 text-white rounded-full py-3.5 text-xs font-semibold  hover:bg-blue-700 transition"
            >
              Start trading
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
