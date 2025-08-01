import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { schema, type Schema } from "../../Utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useMutation } from "@tanstack/react-query";
import { registerAccount } from "../../apis/auth.api";
import { forEach, omit } from "lodash";
import { isAxiosUnprocessableEntityError } from "../../Utils/utils";
import type { ResponseApi } from "../../components/types/utils.type";

type FormData = Schema;

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, "confirm_password">) =>
      registerAccount(body),
  });

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ["confirm_password"]);
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        if (
          isAxiosUnprocessableEntityError<
            ResponseApi<Omit<FormData, "confirm_password">>
          >(error)
        ) {
          const formError = error.response?.data.data;
          // cach 1
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, "confirm_password">, {
                message:
                  formError[key as keyof Omit<FormData, "confirm_password">],
                type: "Server",
              });
            });
          }
          // cach 2
          // if (formError?.email) {
          //   setError("email", {
          //     message: formError.email,
          //     type: "Server",
          //   });
          // }
          // if (formError?.password) {
          //   setError("password", {
          //     message: formError.password,
          //     type: "Server",
          //   });
          // }
        }
      },
    });
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
              <Input
                name="confirm_password"
                register={register}
                type="password"
                className="mt-3"
                errorMessagse={errors.confirm_password?.message}
                placeholder="Confirm password"
                autoComplete="on"
              />
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
