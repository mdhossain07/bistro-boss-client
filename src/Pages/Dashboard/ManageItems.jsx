import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import useMenus from "../../hooks/useMenus";
import SectionTitle from "../../Shared/SectionTitle";
import useAxios from "../../hooks/useAxios";

const ManageItems = () => {
  const [menus, , refetch] = useMenus();
  const axiosSecure = useAxios();

  const handleDeleteItem = (id) => {
    axiosSecure.delete(`/api/v1/delete/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        alert("item deleted...");
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage Items"} subHeading={"Hurry Up"} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Food</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menus.map((menu, index) => (
              <tr key={menu._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={menu.image} alt={menu.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{menu.name}</td>
                <td>${menu.price}</td>
                <th>
                  <button className="btn bg-orange-500 btn-md text-white">
                    <FaPencilAlt />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteItem(menu._id)}
                    className="btn bg-red-500 btn-md text-white"
                  >
                    <FaRegTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
