import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import { getCustomers } from "../../actions/customerActions";

const CustomersPage = () => {
  const { loading, customers, error } = useSelector(
    (state) => state.getCustomers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Customers</h1>
      <div className="mt-10 flex flex-rows justify-center">
        {loading && <h2>Loading...</h2>}
        {error && <h2 className="text-red-500">{error}</h2>}
        {customers && customers.length > 0 && (
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="flex justify-end mb-5">
              <Link
                className="border-2 p-2 border-indigo-500 rounded-full"
                to="/admin/categories/new"
              >
                <HiOutlinePlus className="h-6 w-6 text-indigo-500" />
              </Link>
            </div>
            <table className="table-auto divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer, index) => {
                  return (
                    <tr key={customer._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.firstName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.mobile}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.isActive ? "Active" : "Deactive"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link
                          className="px-2 py-2 text-sm bg-indigo-500 rounded-lg text-white"
                          to={`/admin/customers/${customer._id}`}
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

export default CustomersPage;
