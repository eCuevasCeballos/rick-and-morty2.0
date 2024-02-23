import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-blue-400 h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center max-w-2xl px-5 h-screen hover:scale-105 hover:duration-200 cursor-pointer">
        <img src={logo} alt="Rick & Morty logo" />
        <h1 className="uppercase font-bold tracking-widest text-2xl sm:text-4xl max-w-2xl text-center text-gray-200">
          Character
        </h1>
      </div>
    </header>
  );
};

export default Header;
