import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { rules } from "../../Util/rules";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  console.log(errors);
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
              noValidate
            >
              <div className="text-2xl">Đăng ký</div>
              <div className="mt-8">
                <input
                  type="email"
                  className="p-3 w-full outline-none border border-gray-400 focus:border-gray-600 rounded-sm
                  focus:shadow-sm"
                  placeholder="Email"
                  {...register("email", rules.email)}
                />
                <div className="mt-1 text-red-500 min-h-[1.25rem] text-sm">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-400 focus:border-gray-600 rounded-sm
                  focus:shadow-sm"
                  placeholder="Password"
                  {...register("password", rules.password)}
                />
                <div className="mt-1 text-red-500 min-h-[1.25rem] text-sm">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="confirm_password"
                  className="p-3 w-full outline-none border border-gray-400 focus:border-gray-600 rounded-sm
                  focus:shadow-sm"
                  placeholder="Confirm password"
                  {...register("confirm_password", rules.confirm_password)}
                />
                <div className="mt-1 text-red-500 min-h-[1.25rem] text-sm">
                  {errors.confirm_password?.message}
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-500"
              >
                Đăng ký
              </button>
              <div className="mt-8 text-center">
                <div className="flex items-center">
                  <span className="text-sm text-slate-400">
                    Bạn đã có tài khoản?
                  </span>
                  <Link className="text-red-400 text-sm ml-1" to="/login">
                    Đăng nhập
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

export default Register;
