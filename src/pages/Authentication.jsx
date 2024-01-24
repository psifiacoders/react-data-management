import { useState } from "react";
import Logo from "../assets/image/logo-small.png";
import Psifiako from "../assets/image/psifiako.png";

function Authentication() {
  const [formAuth, setFormAuth] = useState(true);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [formCreate, setFormCreate] = useState({
    username: "",
    nama: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormLogin({ ...formLogin, [name]: value });
  };
  console.log(formLogin);
  return (
    <div className="h-screen w-screen large:flex">
      <div className="large:w-[36%] large:flex large:flex-col">
        {/* Logo */}
        <div className="large:h-[15%] large:flex large:items-center large:justify-center">
          <img
            src={Logo}
            alt="logo"
            className="large:w-28 large:h-28 large:bg-cover"
          />
          <h1 className="font-bold font-primary max-w-[20%] text-hitam">
            PMM Magelang Timur
          </h1>
        </div>
        <div className="large:flex-1 large:flex large:items-center large:justify-center">
          <div className="large:w-[70%]">
            <form className="w-full">
              {formAuth ? (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="email"
                      value={formLogin.email}
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password"
                      value={formLogin.password}
                      placeholder="*************"
                      onChange={handleChange}
                    />
                    <p className="text-red-500 text-xs italic">
                      Please choose a password.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Nama
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Nama"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p className="text-red-500 text-xs italic">
                      Please choose a password.
                    </p>
                  </div>
                </>
              )}
              <div className="flex items-center justify-between">
                <button
                  className="bg-hijau hover:bg-putih text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  {formAuth ? "Sign in" : "Sign up"}
                </button>
                <h1
                  onClick={() => setFormAuth(!formAuth)}
                  className="large:text-xs large:font-semibold text-biru hover:cursor-pointer"
                >
                  {formAuth ? "Sign up?" : "Login?"}
                </h1>
              </div>
            </form>
          </div>
        </div>
        <div className="large:h-[5%]">
          <h1 className="text-xs font-primary font-semibold text-center">
            designed by : PsifiaCoders
          </h1>
        </div>
      </div>
      <div className="large:flex-1 large:flex large:items-center large:justify-evenly bg-abu">
        {/* Authentication */}
        <div className="large:flex large:flex-col large:justify-center large:items-center">
          <img
            src={Psifiako}
            alt=""
            className="large:w-72 large:h-72 bg-cover"
          />
          <h1 className="text-5xl font-primary font-bold">PsifiaCoders</h1>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
