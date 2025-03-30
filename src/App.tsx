import { Form } from './components/Form';
import { Header } from './components/Header';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-600">
      <Header />
      <div className='flex justify-center items-center w-full max-w-[1024px] mx-auto px-3'>
        <Form />
      </div>
    </div>
  );
}

export default App;
