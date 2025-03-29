import Image from "next/image";

function ChangePassword() {
  return (
    <div className="bg-slate-100 py-6 px-4 rounded-md max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-center md:text-left">Change Password</h3>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-8 px-4 py-2">
        <form className="w-full p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Old Password *</label>
            <input
              type="password"
              placeholder="********"
              name="oldPassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">New Password *</label>
            <input
              type="password"
              placeholder="********"
              name="newPassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Re-enter Password *</label>
            <input
              type="password"
              placeholder="********"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary"
            />
          </div>

          <button type="submit" className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-blue-600 transition">
            Change Password
          </button>
        </form>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/p-update-img.png"
            alt="avatar"
            width={350}
            height={350}
            className="w-48 h-48 md:w-72 md:h-72"
            priority
            placeholder="blur"
            blurDataURL="/images/profile.png"
          />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
