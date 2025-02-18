import Image from "next/image";

export default function ProfileDetails() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-100 py-6 px-4 rounded-md">
        <div className="flex-shrink-0 bg-primary rounded-full h-[160px] w-[160px] flex items-center justify-center">
          <Image className="rounded-full mt-1 mx-auto" src="/images/profile.png" alt="avatar" width={150} height={150} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-primary ">John Doe</h3>
          <p className="text-sm text-gray-500">I am Professional Graphic Designer</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-6 px-4 mt-4">
        <h3 className="text-lg font-bold">Personal Information</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Full Name :</span>
          <p>John Doe</p>
        </div>
        <div className="flex items-start justify-start gap-2 border-solid border-[1px] rounded-sm px-4 py-2 ">
          <span className=" text-primary">About:</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus rem in, accusantium totam, dolorum porro ab numquam, quaerat sapiente nemo tempore nam esse tempora quam
            cumque alias corrupti ullam.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Email:</span>
          <p>example@gmail.com</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Phone:</span>
          <p>01005697324</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Date of Birth:</span>
          <p>2000/2/5</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Address:</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Country:</span>
          <p>EG</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border border-gray-300 rounded-sm px-4 py-2">
          <span className="text-primary">Language:</span>
          <p>EG</p>
        </div>
      </div>
    </>
  );
}
