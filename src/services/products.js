import request from "@/utils/request";

export function GetProducts(ids) {
  return request(`/api/products?ids=${ids.join(';')}`, {
    method: 'GET',
  });
}