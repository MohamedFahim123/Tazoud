import { CgMail } from "react-icons/cg";
import { FaSkype } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";

const CustomerContactCard = ({ name }: { name: string }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white">
      <div className="bg-gray font-bold text-xl mb-2 p-4">{name}</div>
      <div className="mb-4 p-4">
        <p className="text-gray-700 text-base flex items-center mb-4 ">
          <PiPhone size={20} className="mr-2 bg-primary rounded-full text-white" /> +91 564-258-4781
        </p>
        <p className="text-gray-700 text-base flex items-center mb-4 ">
          <FaSkype size={20} className="mr-2 bg-primary rounded-full text-white" />
          Samantha (Skype)
        </p>
        <p className="text-gray-700 text-base flex items-center mb-4 ">
          <CgMail size={20} className="mr-2 bg-primary rounded-full text-white" /> margaretraw@gmail.com
        </p>
      </div>
    </div>
  );
};

export default CustomerContactCard;
