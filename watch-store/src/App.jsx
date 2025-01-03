import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold underline text-center">Watch Store</h1>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-4">
        <p className="text-center">Welcome to the Watch Store! Explore our collection of premium watches.</p>
        {/* Add more content here */}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
