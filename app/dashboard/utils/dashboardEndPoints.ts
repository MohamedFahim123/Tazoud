import { baseUrl } from "@/app/utils/baseUrl";
import dashboardEndPointsInterface from "./interfaces";

export const dashboardEndPoints: dashboardEndPointsInterface = {
  profile: {
    showProfile: `${baseUrl}/staff/show-profile?t=${new Date().getTime()}`,
    updateProfile: `${baseUrl}/staff/update-profile?t=${new Date().getTime()}`,
  },
  categories: {
    allCategories: `${baseUrl}/categories?t=${new Date().getTime()}`,
    singleCategory: (id?: string) => `${baseUrl}/categories/${id}?t=${new Date().getTime()}`,
  },
  brands: {
    allBrands: `${baseUrl}/brands?t=${new Date().getTime()}`,
  },
  orders: {
    allOrders: `${baseUrl}/orders?t=${new Date().getTime()}`,
    singleOrder: (id?: string) => `${baseUrl}/orders/${id}?t=${new Date().getTime()}`,
  },
  unitsMeasures: {
    allUnitsMeasures: `${baseUrl}/units-of-measure?t=${new Date().getTime()}`,
  },
  products: {
    allProducts: `${baseUrl}/staff/products?t=${new Date().getTime()}`,
    singleProduct: (id?: string) => `${baseUrl}/staff/products/${id}?t=${new Date().getTime()}`,
    createProduct: `${baseUrl}/staff/products?t=${new Date().getTime()}`,
    filterProducts: `${baseUrl}/staff/filter-products?t=${new Date().getTime()}`,
    updateProduct: (id?: string) => `${baseUrl}/staff/update-product-status/${id}?t=${new Date().getTime()}`,
    deleteProduct: (id?: string) => `${baseUrl}/staff/products/${id}?t=${new Date().getTime()}`,
  },
};
