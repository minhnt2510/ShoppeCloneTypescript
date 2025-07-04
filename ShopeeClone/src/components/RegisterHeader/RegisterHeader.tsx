import { Link } from "react-router-dom";
import iconShopee from "../../assets/iconShopee.png";

const RegisterHeader = () => {
  return (
    <div>
      <header className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center">
            <Link to="/" className="flex items-center gap-2 h-10">
              <img src={iconShopee} className="h-8" alt="Shopee logo" />
              <span className="text-orange-500 text-xl">Shopee</span>
            </Link>
            <div className="ml-5 text-xl">Đăng ký</div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default RegisterHeader;
