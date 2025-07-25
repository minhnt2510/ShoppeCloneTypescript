import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { schema, schemalogin, type SchemaLogin } from "../../Utils/rules";
import type { Schema } from "yup";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth.api";
import type { ResponseApi } from "../../components/types/utils.type";
import { isAxiosUnprocessableEntityError } from "../../Utils/utils";
import Input from "../../components/Input";

type FormData = SchemaLogin;
const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemalogin),
  });

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, "confirm_password">) => login(body),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<FormData>>(error)) {
          const formError = error.response?.data.data;
          console.log(error.response?.data);
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: "Server",
              });
            });
          }
        }
      },
    });
  });
  const value = watch();
  console.log(value);

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
              <div className="text-2xl">Đăng nhập</div>
              <Input
                name="email"
                register={register}
                type="email"
                className="mt-8"
                errorMessagse={errors.email?.message}
                placeholder="email"
              />
              <Input
                name="password"
                register={register}
                type="password"
                className="mt-3"
                errorMessagse={errors.password?.message}
                placeholder="Password"
                autoComplete="on"
              />
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
