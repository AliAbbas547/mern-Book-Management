import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CreateBooks from './pages/CreateBooks';
import GetBooksData from './pages/GetBooksData';
import BooksDataWithReviews from './pages/BooksDataWithReviews';
import CreateReviews from './pages/CreateReviews';
import UpdateReviews from './pages/UpdateReviews';
import DeleteReviews from './pages/DeleteReviews';
import UpdateBooksData from './pages/UpdateBooksData';
import DeleteBooksData from './pages/DeleteBooksData';
import Hello from './pages/Hello';

export default function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/createUser" element={<SignUp/>}/>
        <Route exact path="/createBooks" element={<CreateBooks/>}/>
        <Route exact path="/getBooksData" element={<GetBooksData/>}/>
        <Route exact path="/getBooksDataWithReviews" element={<BooksDataWithReviews/>}/>
        <Route exact path="/CreateReviews" element={<CreateReviews/>}/>
        <Route exact path="/updateReviews" element={<UpdateReviews/>}/>
        <Route exact path="/DeleteReviews" element={<DeleteReviews/>}/>
        <Route exact path="/UpdateBooksData" element={<UpdateBooksData/>}/>
        <Route exact path="/DeleteBooksData" element={<DeleteBooksData/>}/>
        <Route exact path="/done" element={<Hello/>}/>

      </Routes>
    </div>
  </Router>
  )
}
