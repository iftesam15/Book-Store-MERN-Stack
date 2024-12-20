import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import UseMyContext from "../components/ChainPropsContext/UseChainContext";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Demo from "./demo";
import UseContext from "../components/useContext/UseContext";
import UseRef from "../components/useRef/UseRef";
import UseReducer from "../components/useReducer/UseReducer";
import Post from "../components/useReducer/UseReducer";
import TagManager from "../components/useReducer/TagManager";
import UseCountContext from "../components/useContext2/useCountContext";
import { CounterProvider } from "../components/useContext2/Counter";
import DropdownWithCities from "./DropDownWithCities";
import Item from "../components/item";
import Cart from "../components/Cart";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      {/* <div className="flex justify-center items-center gap-x-4">
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
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
      <Demo></Demo>
      <UseContext></UseContext>
      <UseMyContext></UseMyContext>
      <UseRef></UseRef>

     
      <TagManager></TagManager> */}
      <CounterProvider>
        <UseCountContext></UseCountContext>
      </CounterProvider>
      <DropdownWithCities></DropdownWithCities>
      <div className="flex flex-col  items-center ">
        <Item name="Macbook" price="100000" />
        <Item name="Iphone" price="150000" />{" "}
        <Item name="Microsoft surface" price="90000" />{" "}
        <Item name="Macbook pro" price="200000" />
      </div>
      <Cart />
    </div>
  );
};

export default Home;
