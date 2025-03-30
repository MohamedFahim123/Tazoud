"use client";

import CustomInput from "../CustomInput/CustomInput";

export default function AddCategory() {
  // const dispatch = useDispatch<AppDispatch>();
  // const { categories, singleCategory, loading, error } = useSelector((state: RootState) => state.categories);

  // useEffect(() => {
  //   dispatch(getCategories());
  //   dispatch(getSingleCategory(1));
  // }, [dispatch]);

  // if (loading) return <p>Loading categories...</p>;
  // if (error) return <p>Error: {error}</p>;

  // console.log(categories);
  // console.log(singleCategory);
  return (
    <div className="max-h-[500px] p-6 border-[1px]  bg-white rounded-lg shadow-sm  border-gray-200 mb-5">
      <h3 className="text-lg font-bold mb-3"> Organization</h3>
      <form action="" className="">
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <CustomInput type="text" id="add_category" label="Add Category" placeHolder="type" />
          </div>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <CustomInput type="text" id="add_brand" label="Add Brand" placeHolder="type" />
          </div>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <CustomInput type="text" id="add_color" label="Add Color" placeHolder="type" />
          </div>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <CustomInput type="text" id="add_size" label="Add Size" placeHolder="type" />
          </div>
        </div>
      </form>
    </div>
  );
}
