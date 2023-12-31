import httpClient from "@/utils/request";

export function getPodsReq(getPodsData) {
  return httpClient({
    method: "get",
    url: "/corev1/getpods",
    params: getPodsData,
  });
}
export function updatePodsReq(updatePodsData) {
  return httpClient({
    method: "put",
    url: "/corev1/updatepod",
    data: updatePodsData,
  });
}
export function getPodsDetailReq(getPodDetailData) {
  return httpClient({
    method: "get",
    url: "/corev1/podetail",
    params: getPodDetailData,
  });
}
export function deletePodReq(deletePodData) {
  return httpClient({
    method: "delete",
    url: "/corev1/deletepod",
    params: deletePodData,
  });
}
export function getContainersReq(getContainerData) {
  return httpClient({
    method: "get",
    url: "/corev1/getcontainers",
    params: getContainerData,
  });
}
export function getLogReq(getLogData) {
  return httpClient({
    method: "get",
    url: "/corev1/getlog",
    params: getLogData,
  });
}
export function getContainerPath(getContainerPathData) {
  return httpClient({
    method: "get",
    url: "/listPath",
    params: getContainerPathData,
  });
}

