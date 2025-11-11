import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import ProtectedHeader from "../components/ProtectedHeader";
import { useBook } from "../hooks/useBooks";

const ShowBook = () => {
  const { id } = useParams();
  const { data: book, isLoading: loading, error } = useBook(id);

  if (error) {
    return (
      <div>
        <ProtectedHeader />
        <div className="p-4">
          <BackButton />
          <h1 className="text-3xl my-4">Show Book</h1>
          <div className="text-red-500">Error loading book. Please try again.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ProtectedHeader />
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : book ? (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{book.createdAt ? new Date(book.createdAt).toString() : "N/A"}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{book.updatedAt ? new Date(book.updatedAt).toString() : "N/A"}</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">No book data available</div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
