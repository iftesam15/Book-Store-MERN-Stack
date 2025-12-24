import { useState } from "react";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import UseMyContext from "../components/ChainPropsContext/UseChainContext";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Demo from "./Demo";
import UseContext from "../components/useContext/UseContext";
import TagManager from "../components/useReducer/TagManager";
import DropdownWithCities from "./DropDownWithCities";
import Item from "../components/Item";
import Cart from "../components/Cart";
import i18n from "../i18n";
import UserContextProvider from "../components/context/UserContextProvider";
import Profile from "../components/Profile";
import Parent from "../components/Parent-child/Parent";
import { Boss } from "../components/Callbackdemo";
import CommentList from "../components/Comments";
import ProtectedHeader from "../components/ProtectedHeader";
import InfiniteScrollList from "../components/InterSectionObserverDemo";
import MultiObserverExample from "../components/IntercetionBoxExample";
import { useBooks } from "../hooks/useBooks";
import DemoMutation from "../components/home/DemoMutation";

const Home = () => {
  const navigate = useNavigate();
  const [showType, setShowType] = useState("table");
  const { data: books = [], isLoading: loading, error } = useBooks();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <ProtectedHeader />
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 ml-2 rounded"
            onClick={() => changeLanguage("pt")}
          >
            Portuguese
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
            onClick={() => navigate("/dark")}
          >
            Dark Mode
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner />
          </div>
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
        {/* <Demo></Demo>
      <UseContext></UseContext>
      <UseMyContext></UseMyContext> */}
        {/* <UseRef></UseRef> */}

        {/* <TagManager></TagManager> */}
        {/* <CounterProvider>
        <UseCountContext></UseCountContext>
      </CounterProvider> */}
        {/* <DropdownWithCities></DropdownWithCities>
      <div className="flex flex-col  items-center ">
        <Item name="Macbook" price="100000" />
        <Item name="Iphone" price="150000" />{" "}
        <Item name="Microsoft surface" price="90000" />{" "}
        <Item name="Macbook pro" price="200000" />
      </div> */}
        {/* <Cart /> */}
        {/* <div>
        <UserContextProvider>
          <Login></Login>
          <Profile></Profile>
        </UserContextProvider>
      </div>
      <div>
        <Parent></Parent>
      </div> */}
        {/* <Boss></Boss> */}

        {/* <CommentList /> */}

        {/* <InfiniteScrollList></InfiniteScrollList>
        <MultiObserverExample></MultiObserverExample> */}

        <Parent></Parent>
      </div>
    </div>
  );
};

export default Home;
