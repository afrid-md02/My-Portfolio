import ALogo from "../assets/ALogo.png";

const MainHeader = () => {
  return (
    <header className="w-full px-4 bg-slate-950 backdrop-blur-sm text-copy font-inter sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto bg-green-900">
        <img
          src={ALogo}
          className="duration-500 w-14 h-14 hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-logoDropShadow"
        />
      </div>
    </header>
  );
};

export default MainHeader;
