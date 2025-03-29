"use client";

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
            <label htmlFor="add_category">Add Category</label>
            <input
              type="text"
              name="add_category"
              id="add_category"
              placeholder="type"
              className="w-full px-4 py-2 border border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
            />
          </div>
          <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
            Add
          </button>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <label htmlFor="add_brand">Add Brand</label>
            <input
              type="text"
              name="add_brand"
              id="add_brand"
              placeholder="type"
              className="w-full px-4 py-2 border border-r-0 rounded-l-md  focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
            />
          </div>
          <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
            Add
          </button>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <label htmlFor="add_color">Add Color</label>
            <input
              type="text"
              name="add_color"
              id="add_color"
              placeholder="type"
              className="w-full px-4 py-2 border border-r-0 rounded-l-md  focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
            />
          </div>
          <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
            Add
          </button>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-[80%]">
            <label htmlFor="add_size">Add Size</label>
            <input
              type="text"
              name="add_size"
              id="add_size"
              placeholder="type"
              className="w-full px-4 py-2 border border-r-0 rounded-l-md  focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary "
            />
          </div>
          <button type="button" className="px-12 py-2 mt-6 text-white bg-green rounded-r-md ">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
