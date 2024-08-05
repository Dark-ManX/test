import { I_HeaderData, I_NavigationItem } from "@/shared/types";
import { Link } from "@tanstack/react-router";

const Header = ({ data }: { data: I_HeaderData[] }) => {
  return (
    <>
      <header className="w-full fixed top-0 left-0">
        <nav>
          <ul className="flex gap-10 justify-center">
            {data.map((el: I_NavigationItem, idx: number) => (
              <li key={idx} data-testid="nav-item">
                <Link to={el.path} className="text-2xl [&.active]:text-white">
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <hr className="my-10" />
    </>
  );
};

export default Header;
