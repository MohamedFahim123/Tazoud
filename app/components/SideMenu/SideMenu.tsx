import Image from "next/image";
import Link from "next/link";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsBoxFill } from "react-icons/bs";
import { FaBell, FaSignOutAlt, FaUser, FaUserEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const menuItems = [
  {
    title: "DASHBOARD",
    items: [
      {
        icon: <MdDashboard />,
        label: "Dashboard",
        href: "/dashboard",
      },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      {
        icon: <BsBoxFill />,
        label: "Products",
        href: "/dashboard/products",
      },
      {
        icon: <IoMdAdd />,
        label: "Add Product",
        href: "/dashboard/products/add-product",
      },
      {
        icon: <TbListDetails />,
        label: "Product Details",
        href: "/dashboard/products/product-details",
      },
    ],
  },
  {
    title: "Orders",
    items: [
      {
        icon: <AiOutlineUnorderedList />,
        label: "Orders",
        href: "/dashboard/orders/order-list",
      },
      {
        icon: <TbListDetails />,
        label: "Order Details",
        href: "/dashboard/orders/order-details",
      },
    ],
  },
  {
    title: "PROFILE",
    items: [
      {
        icon: <FaUser />,
        label: "Profile Details",
        href: "/dashboard/profile",
      },
      {
        icon: <FaUserEdit />,
        label: "Update Profile",
        href: "/dashboard/profile/update-profile",
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        icon: <FaBell />,
        label: "Notifications",
        href: "/dashboard/notifications",
      },
      {
        icon: <FaSignOutAlt />,
        label: "Requests",
        href: "/dashboard/requests",
      },
    ],
  },
];
const SideMenu = () => {
  return (
    <div className="mt-4 text-sm ">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 " key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-SkyLight"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
