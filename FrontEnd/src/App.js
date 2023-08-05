import './App.css';
import Home from './components/Home';
import Item from './components/Item';
import AddItem from './components/AddItem';
import Layout from './components/Layout'
import Update from './components/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import SearchedItems from './components/SearchedItems';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/Home' element={<Home />} />
            <Route path='/Items' element={<Item/>} />
            <Route path='/AddItem' element={<AddItem />} />
            <Route path='/Search' element={<Search />} />
          </Route>
          <Route path='/Update/:id' element={<Update />} />
          <Route path='/SearchedItem' element={<SearchedItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;