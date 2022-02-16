import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBusinessCategories } from "../../actions/businessCategoryActions";

const CategoriesPage = () => {
  const { loading, categories, error } = useSelector(
    (state) => state.getBusinessCategories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessCategories());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Categories</h1>
      <div className="mt-10 flex flex-rows justify-center">
        {loading && <h2>Loading...</h2>}
        {error && <h2 className="text-red-500">{error}</h2>}
        {categories && categories.length > 0 && (
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <table className="table-auto divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category, index) => {
                  return (
                    <tr key={category._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {category.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {category.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {category.updatedAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link
                          className="px-2 py-2 text-sm bg-indigo-500 rounded-lg text-white"
                          to={`/admin/categories/${category._id}`}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
