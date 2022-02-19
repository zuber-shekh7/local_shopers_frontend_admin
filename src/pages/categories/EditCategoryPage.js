import React, { useState, useEffect } from "react";
import FormData from "form-data";
import { HiOutlineX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  editBusinessCategory,
  getBusinessCategory,
} from "../../actions/businessCategoryActions";

const EditCategoryPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category_id } = useParams();

  const { error, category, loading } = useSelector(
    (state) => state.getBusinessCategory
  );

  const {
    loading: updateLoading,
    category: updatedCategory,
    error: updateError,
  } = useSelector((state) => state.editBusinessCategory);

  useEffect(() => {
    dispatch(getBusinessCategory(category_id));
  }, [category_id, dispatch]);

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    if (
      name === category.name &&
      description === category.description &&
      !image
    ) {
      navigate(-1);
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    dispatch(editBusinessCategory(formData, category_id));
  };

  if (updatedCategory) {
    return <Navigate to={`/admin/categories/${category._id}`} />;
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <div className="flex justify-end">
          <Link
            className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
            to={`/admin/categories/${category_id}`}
          >
            <span>
              <HiOutlineX className="h-6 w-6" />
            </span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-3">Edit category</h1>
        {category && (
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
              {(loading || updateLoading) && <h1>Loading...</h1>}
              {(error || updateError) && (
                <h1 className="text-red-500">{error || updateError}</h1>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditCategoryPage;
