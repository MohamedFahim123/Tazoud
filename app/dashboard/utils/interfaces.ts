interface dashboardEndPointsInterface {
  profile?: {
    showProfile?: string;
    updateProfile?: string;
  };
  categories?: {
    allCategories?: string;
    singleCategory?: (id?: string) => string;
  };
  brands?: {
    allBrands?: string;
  };
  orders?: {
    allOrders?: string;
    singleOrder?: (id?: string) => string;
    allowedDrivers?: (id?: string) => string;
    assignToDriver?: string;
    updateOrderStatusEndPoint?: string;
  };
  unitsMeasures?: {
    allUnitsMeasures?: string;
  };
  products?: {
    allProducts?: string;
    singleProduct?: (id?: string) => string;
    filterProducts?: string;
    createProduct?: string;
    updateProduct?: (id?: string) => string;
    deleteProduct?: (id?: string) => string;
  };
  rolesAndPermissions?: {
    allowedPermissions?: string;
    allRoles?: string;
    filterRoles?: string;
    createRole?: string;
    oneRole?: (id?: string) => string;
    updateRole?: (id?: string) => string;
    deleteRole?: (id?: string) => string;
  };
  staff?: {
    allStaff?: string;
    filterStaff?: string;
    allowedRoles?: string;
    createStaff?: string;
    updateStaff?: (id?: string) => string;
    updateStaffStatus?: (id?: string) => string;
    deleteStaff?: (id?: string) => string;
  };
}

export default dashboardEndPointsInterface;
