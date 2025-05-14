import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../CustomInput/CustomInput";
import { AppDispatch, RootState } from "@/app/rtk/store";
import { useEffect } from "react";
import { getAllowedPermissions } from "@/app/rtk/slices/permissionsSlice";
import * as Yup from "yup";
import { createRole, getAllRoles } from "@/app/rtk/slices/rolesSlice";
import { ErrorMessage, Form, Formik } from "formik";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
type RoleFormValues = {
  name: string;
  permission_id: number[];
};

const AddRole = () => {
  const { permission, loading } = useSelector((state: RootState) => state.permissions);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: RoleFormValues = {
    name: "",
    permission_id: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Role name is required"),
    permission_id: Yup.array().min(1, "Select at least one permission"),
  });

  const handleSubmit = async (values: RoleFormValues) => {
    await dispatch(createRole(values));
    await dispatch(getAllRoles());
    toast.success("Role created successfully");
  };

  useEffect(() => {
    dispatch(getAllowedPermissions());
  }, [dispatch]);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ values, handleChange, setFieldValue }) => (
        <Form className="flex flex-col text-black/75">
          <CustomInput id="name" name="name" type="text" placeHolder="Enter Role Name" value={values.name} onChange={handleChange} className="w-full mt-5" />
          <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />

          <div className="h-[80%] overflow-y-scroll flex flex-col px-5 mt-4">
            {loading ? (
              <Loading />
            ) : (
              permission.map((perm, idx) => {
                const checked = values.permission_id.includes(perm.id);
                return (
                  <div key={idx} className="flex items-center justify-between w-full h-10">
                    <span>{idx + 1}</span>
                    <p className="text-black/75 text-md">{perm.name}</p>
                    <label className="items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          const newIds = checked ? values.permission_id.filter((id) => id !== perm.id) : [...values.permission_id, perm.id];
                          setFieldValue("permission_id", newIds);
                        }}
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5 ring-2 ring-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray_dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                );
              })
            )}
          </div>

          <ErrorMessage name="permission_id" component="p" className="text-red-500 text-sm mt-1" />

          <button type="submit" className="w-32 mx-auto uppercase font h-10 bg-primary text-white rounded-md mt-5 hover:bg-opacity-90">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddRole;
