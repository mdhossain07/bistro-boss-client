import SectionTitle from "../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxios from "../../hooks/useAxios";

const image_hosting_api = import.meta.env.VITE_image_hosting_api;
const image_hosting_key = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_key, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);

    const menuInfo = {
      category: data.category,
      name: data.name,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: res.data.data.display_url,
    };

    axiosSecure.post("/api/v1/create/menu", menuInfo).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <SectionTitle heading={"Add an Item"} subHeading={"What's New"} />
      {/* Add Form */}
      <form
        className="bg-[#F3F3F3] font-medium text-[#444444] p-10 lg:w-1/2 mx-auto space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="">Recipe Name *</label>
        <br />
        <input className="w-full py-2 my-2" {...register("name")} />
        <div className="flex justify-between gap-10">
          <div className="flex-1">
            <label htmlFor="">Select Category *</label>
            <br />
            <select
              className="py-2 w-full my-2"
              defaultValue="default"
              {...register("category")}
            >
              <option value="salad">salad</option>
              <option value="pizza">pizza</option>
              <option value="dessert">dessert</option>
              <option value="drinks">drinks</option>
              <option value="soup">soup</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="">Price *</label>
            <br />
            <input className="py-2 my-2 w-full" {...register("price")} />
          </div>
        </div>
        <label htmlFor="">Recipe Details *</label>
        <br />
        <textarea
          className="my-2 w-full"
          {...register("recipe")}
          cols="50"
          rows="5"
        ></textarea>
        <br />
        <input
          {...register("image")}
          type="file"
          className="file-input w-full max-w-xs"
        />
        <br />
        <input className="btn btn-warning" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItems;
