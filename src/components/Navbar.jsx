const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center shadow-xl px-4 py-3">
      <div className="flex flex-row justify-center items-center space-x-2">
        <img src="/assets/pokeball.png" alt="pokeball" className="w-10 h-10" />
        <h1 className="font-semibold text-lg">Pokedex</h1>
      </div>
      <h1 className="font-semibold text-lg">Github</h1>
    </div>
  );
};

export default Navbar;
