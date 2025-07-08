import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  
  return (
    <div className="bg-orange-600">
      {/* container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* //form  */}
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Đăng nhập</div>
              <div className="mt-8">
                <input
                  type="email"
                  name="email"
                  className="p-3 w-full outline-none border border-gray-400 focus:border-gray-600 rounded-sm
                  focus:shadow-sm"
                  placeholder="Email"
                />
                <div className="mt-1 text-red-500 min-h-[1rem] text-sm">
                  Email không hợp lệ
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="password"
                  name="password"
                  className="p-3 w-full outline-none border border-gray-400 focus:border-gray-600 rounded-sm
                  focus:shadow-sm"
                  placeholder="Password"
                />
                <div className="mt-1 text-red-500 min-h-[1rem] text-sm"></div>
              </div>
              <button
                type="submit"
                className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-500"
              >
                Đăng nhập
              </button>
              <div className="mt-8 text-center">
                <div className="flex items-center">
                  <span className="text-sm text-slate-400">
                    Bạn đã có tài khoản?
                  </span>
                  <Link className="text-red-400 text-sm ml-1" to="/register">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
