import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBusinessCategory } from "../../actions/businessCategoryActions";
import { HiOutlineArrowSmLeft, HiOutlinePencil } from "react-icons/hi";

const CategoryPage = () => {
  const { loading, category, error } = useSelector(
    (state) => state.getBusinessCategory
  );

  const { category_id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessCategory(category_id));
  }, [dispatch, category_id]);

  return (
    <div className="flex justify-center">
      {loading && <h1>Loading...</h1>}
      {error && <h1 className="text-red-500">{error}</h1>}
      {category && (
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
          <div className="flex justify-between">
            <Link
              className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
              to="/admin/categories"
            >
              <span>
                <HiOutlineArrowSmLeft className="h-6 w-6" />
              </span>
            </Link>
            <Link
              className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
              to={`/admin/categories/${category._id}/edit`}
            >
              <span>
                <HiOutlinePencil className="h-6 w-6" />
              </span>
            </Link>
          </div>

          {category.image ? (
            <img
              className="h-64 rounded-lg mb-5 object-cover"
              src={category.image}
              alt=""
            />
          ) : (
            <div className="h-64 rounded-lg bg-gray-400 flex items-center justify-center mb-5">
              <h2 className="text-white font-medium">Upload Image</h2>
            </div>
          )}
          <h1 className="text-2xl text-center mb-2 font-medium">
            {category.name}
          </h1>
          <div className="mb-2"></div>
          <p className="text-sm mb-2 text-center ">{category.description}</p>
          <p className="text-sm">Last Modified : {category.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
