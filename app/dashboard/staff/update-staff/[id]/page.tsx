import UpdateStaff from "@/app/components/Staff/UpdateStaff";

const updateStaffPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <UpdateStaff id={id} />;
};

export default updateStaffPage;
