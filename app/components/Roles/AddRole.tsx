import CustomInput from "../CustomInput/CustomInput";

const AddRole = () => {
  return (
    <form className="flex flex-col text-black/75">
      <CustomInput id="name" type="text" placeHolder="Enter Role Name" className="w-full mt-5" />
      <div className="flex items-center justify-between w-full h-10">
        <span>{+1}</span>
        <p className="text-black/75 text-md">name</p>
        <label className="items-center cursor-pointer">
          <input type="checkbox" value={""} readOnly className="sr-only peer" />
          <div className="relative w-9 h-5 ring-2 ring-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray_dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>
      <button type="submit" className="w-32 mx-auto uppercase font-bold h-10 bg-primary text-white rounded-md mt-5 hover:bg-opacity-90">
        Save
      </button>
    </form>
  );
};

export default AddRole;
