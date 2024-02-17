import { Routes, Route } from 'react-router-dom';
import AddTodo from "./presentation/component/AddTodo"
import GetTodo from "./presentation/component/GetTodo"
import NoMatch from './presentation/page/NoMatch';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<GetTodo />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App