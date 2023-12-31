import httpClient from "@/utils/request";
export function getNamespacesReq(getNamespaceData) {
    return httpClient({
      method: "get",
      url: "/corev1/getnamespaces",
    });
  }