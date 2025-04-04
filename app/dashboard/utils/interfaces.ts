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
}

export default dashboardEndPointsInterface;
