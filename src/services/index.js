import request from "@/utils/request";

export function GetUserInfo() {
  return request(`/api/userinfo`, {
    method: 'GET',
  });
}