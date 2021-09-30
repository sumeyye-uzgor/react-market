function App() {
  return (
    <div className="flex flex-col items-center" style={{ minHeight: "100vh" }}>
      <div className="h-16 sticky top-0 left-0 w-full bg-primary-blue text-primary-white">
        Navbar
      </div>
      <div className="font-bold text-3xl w-full flex flex-col items-center flex-grow py-16 bg-bg-gray">
        <div className="w-3/12"></div>
        <div className="flex flex-col w-6/12">
          <div className="font-normal text-text-gray">Products</div>
          <div className="flex flex-row mt-3">
            <div className="px-3 py-1 bg-primary-blue text-primary-white font-light text-lg">
              ABC
            </div>
          </div>
          <div className="w-full bg-bg-white mt-5">DEnem</div>
        </div>
        <div className="w-3/12"></div>
      </div>
      <div className="h-8 w-full text-primary-blue flex flex-row items-center justify-center">
        &#169;2019 Market . Privacy Policy
      </div>
    </div>
  );
}

export default App;
