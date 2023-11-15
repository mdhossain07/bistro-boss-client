import { axiosSecure } from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cart, refetch] = useCart();
  //   console.log(cart);

  const totalPrice = cart.reduce(
    (total, prevItem) => total + prevItem.price,
    0
  );

  const handleRemove = (id) => {
    console.log("delete", id);
    axiosSecure.delete(`/api/v1/delete-item/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        alert("item is deleted");
        console.log(res.data);
      }
    });
  };

  //   let totalPrice = 0;
  //   for (const item of cart) {
  //     totalPrice += item.price;
  //   }
  return (
    <div className="">
      <div className="flex justify-around">
        <h2 className="text-2xl font-semibold">Total Items : {cart.length} </h2>
        <h2 className="text-2xl font-semibold">Total Price : {totalPrice} </h2>
      </div>

      {/* Food Items showing in Table */}
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="table mt-16">
            {/* head */}
            <thead
              style={{ borderRadius: "15px 15px 0px 0px" }}
              className="text-lg bg-[#D1A054] text-white"
            >
              <tr>
                <th>
                  <label>
                    <p>No.</p>
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{item.name}</td>
                  <td className="font-semibold">{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="btn btn-ghost btn-lg text-red-500"
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
    </div>
  );
};

export default Cart;
