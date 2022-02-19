import React, { useState } from "react";
import FormData from "form-data";
import { HiOutlineX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createBusinessCategory } from "../../actions/businessCategoryActions";

const CreateCategoryPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, category, loading } = useSelector(
    (state) => state.createBusinessCategory
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    dispatch(createBusinessCategory(formData));
  };

  if (category) {
    navigate(`/admin/categories/${category._id}`);
  }
  return (
    <div className="flex justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <div className="flex justify-end">
          <Link
            className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
            to="/admin/categories"
          >
            <span>
              <HiOutlineX className="h-6 w-6" />
            </span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-3">
          Add new category
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Category name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block" htmlFor="description">
              Description
            </label>
            <textarea
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray  resize-none"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Category description"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block" htmlFor="image">
              Image
            </label>
            <input
              className="w-full file:text-sm file:border-0 file:px-4 file:py-2 file:mt-3 file:rounded-full file:text-indigo-500 file:bg-violet-50 file:font-semibold hover:file:bg-violet-100"
              type="file"
              accept="image/jpeg"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-3">
            <button
              className="w-full py-2 text-lg bg-indigo-500 rounded-lg text-white"
              type="submit"
            >
              Save
            </button>
          </div>
          <div className="mb-3 text-center">
            {loading && <h1>Loading...</h1>}
            {error && <h1 className="text-red-500">{error}</h1>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryPage;
