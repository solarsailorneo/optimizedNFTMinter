import {Navbar, Welcome, Loader, Footer, Services, Transactions} from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
