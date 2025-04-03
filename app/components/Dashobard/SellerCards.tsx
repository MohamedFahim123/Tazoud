import { FaEnvelope, FaFax, FaPhoneAlt } from "react-icons/fa";

const sellers = [
  {
    name: "Mendorcart",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 120,
    sells: 11250,
    earning: 92852,
  },
  {
    name: "Margaret Ak",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 99,
    sells: 1998,
    earning: 24562,
  },
  {
    name: "Samantha",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 125,
    sells: 10254,
    earning: 84562,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
  {
    name: "Isabella Jhon",
    phone1: "+91 564-258-4781",
    phone2: "+44 161-999-8888",
    email: "infoyour@gmail.com",
    items: 135,
    sells: 15263,
    earning: 65489,
  },
];

export default function SellerCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 p-6 bg-gray-100">
      {sellers.map((seller, index) => (
        <div key={index} className="bg-white  shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold mb-3">{seller.name}</h3>
          <div className="flex flex-col items-center text-gray-600 space-y-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>
                <a href="tel:+91 564-258-4781">{seller.phone1}</a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaFax className="text-blue-500" />
              <span>
                <a href="tel:+91 564-258-4781">{seller.phone2}</a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>
                <a href="mailto:infoyour@gmail.com">{seller.email}</a>
              </span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-3 gap-2 text-gray-700">
            <div className="text-center">
              <p className="text-sm">Items</p>
              <p className="font-semibold">{seller.items}</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Sells</p>
              <p className="font-semibold">{seller.sells}</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Earning</p>
              <p className="font-semibold">{seller.earning}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
