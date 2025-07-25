import { Link } from "react-router-dom";
import iconShopee from "../../assets/iconShopee.png";
import Popover from "../Popover/Popover"; // Thêm dòng này

const Header = () => {
  return (
    <div className="pb-5 pt-2 bg-gradient-to-b from-[#f53d2d] to-[#f63] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-6">
          <Popover
            renderPopover={
              <div className="bg-white shadow-md rounded-sm border border-gray-200">
                <div className="flex flex-col py-2 px-3">
                  <button className="py-2 px-3 text-gray-700 hover:text-orange-500">
                    Tiếng Việt
                  </button>
                  <button className="py-2 px-3 text-gray-700 hover:text-orange-500 mt-2">
                    English
                  </button>
                </div>
              </div>
            }
            className="flex items-center space-x-2 py-1 hover:text-gray-300 cursor-pointer"
            placement="bottom-end"
          >
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>Tiếng Việt</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </span>
          </Popover>

          <div className="flex items-center space-x-2 py-1 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>minhnt</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-5 items-center">
          <div className="col-span-3">
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src={iconShopee}
                className="h-14"
                alt="Shopee logo"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src = "https://via.placeholder.com/56";
                }}
              />
              <span className="ml-2 text-white text-3xl">Shopee</span>
            </Link>
          </div>

          <div className="col-span-8">
            <div className="bg-white rounded-sm p-1 flex">
              <input
                type="text"
                name="search"
                className="text-black px-3 py-2 flex-grow border-none outline-none bg-transparent"
                placeholder="Tìm kiếm sản phẩm, thương hiệu và tên shop"
              />
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-sm hover:bg-orange-600"
                onClick={() => alert("Tìm kiếm được kích hoạt!")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803a7.5 7.5 0 0 0 10.607 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <Popover
              renderPopover={
                <div className="bg-white relative shadow-md rounded-sm border border-gray-200 max-w-[400px] text-sm">
                  <div className="p-2">
                    <div className="text-gray-400 capitalize">
                      Sản phẩm mới thêm
                    </div>
                    <div className="mt-5">
                      {[1, 2, 3, 4, 5].map((_, idx) => (
                        <div className="mt-4 flex" key={idx}>
                          <div className="flex-shrink-0">
                            <img
                              src="https://cf.shopee.vn/file/sg-11134201-22110-s3ycuwtvgvjvb4_tn"
                              alt="anh"
                              className="w-11 h-11 object-cover"
                            />
                          </div>
                          <div className="flex-grow ml-2 overflow-hidden">
                            <div className="truncate">
                              [LIFEMCMBP2 -12% đơn 250K] Bộ Nồi Inox 3 Đáy
                              SUNHOUSE SH334 16, 20, 24 cm
                            </div>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <span className="text-orange-500">₫469.000</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex mt-6 items-center justify-between">
                      <div className="capitalize text-xs text-gray-500">
                        Thêm hàng vào giỏ
                      </div>
                      <button className="capitalize bg-orange-600 hover:bg-opacity-90 px-4 py-2 rounded-sm text-white">
                        Xem giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              }
            >
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3
                     2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0
                      .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
