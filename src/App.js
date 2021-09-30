function App() {
  return (
    <div className="flex flex-col items-center" style={{ minHeight: "100vh" }}>
      <div className="h-16 sticky top-0 left-0 w-full bg-red-100">Navbar</div>
      <div className="bg-blue-500 font-bold text-3xl w-full flex flex-col justify-center items-center flex-grow">
        {" "}
        Hello
      </div>
      <div className="h-16 w-full bg-red-200">Footer</div>
    </div>
  );
}

export default App;
