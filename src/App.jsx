import { BooksProvider } from './Components/BooksContext';
import Layout from './Components/Layout';
import './app.scss';

function App() {
  return (
    <BooksProvider>
    <div className="app">
      <div className='bin'>

      <Layout />
      </div>      
    </div>
    </BooksProvider>
  );
}

export default App;
