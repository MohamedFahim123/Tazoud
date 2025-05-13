import { BiEdit } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";

const RolesCard = ({ setOpen  }: { setOpen: (open: boolean) => void }) => {
  return (
    <div className="border border-gray_dark rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 flex justify-between items-center border-b border-gray_dark">
        <div>
          <h3 className="font-medium text-lg text-primary cursor-pointer" onClick={() => setOpen(true)}>
            name
          </h3>
        </div>
        <div className="flex gap-2">
          <BiEdit className="h-4 w-4 cursor-pointer text-primary" />

          <BsTrash2 className="h-4 w-4 cursor-pointer text-red-500" />
        </div>
      </div>

      <div className="p-4 bg-gray-50">
        <h4 className="text-xs font-medium  text-black/75 mb-2">Enabled permissions</h4>
        <div className="flex flex-wrap gap-2">
          {/* {role.permissions
            .filter((p) => p.enabled)
            .slice(0, 3)
            .map((p) => (
              <span key={p.id} className="px-2 py-1 bg-secondary text-xs rounded-md">
                {p.name}
              </span>
            ))} */}

          {/* {enabledPermissions > 3 && <span className="px-2 py-1 bg-secondary text-xs rounded-md">+{enabledPermissions - 3} more</span>}

          {enabledPermissions === 0 && <span className="text-xs text-gray-400">No permissions enabled</span>} */}
        </div>
      </div>
    </div>
  );
};

export default RolesCard;
