import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import ProtectedHeader from "../components/ProtectedHeader";
import { useCreateBook } from "../hooks/useBooks";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const createBookMutation = useCreateBook();
  console.log("🚀 ~ CreateBooks ~ createBookMutation:", createBookMutation);

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    createBookMutation.mutate(data, {
      onSuccess: () => {
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      },
      onError: (error) => {
        const errorMessage =
          error.response?.data?.message || "Error creating book";
        enqueueSnackbar(errorMessage, { variant: "error" });
        console.log(error);
      },
    });
  };

  return (
    <div>
      <ProtectedHeader />
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Create Book</h1>
        {createBookMutation.isPending ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
