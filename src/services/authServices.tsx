import apiClient from "~/utility/axioconfig";
import IReport from "../type/auth.type";

// const handleLoginApi = async (user: IUser) => {
//   console.log("========================================")
//   console.log(user)
//   console.log("========================================")
//   const response = await apiClient.post<IUser[]>("/auth/login/",user);
//   if (response) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   return response.data;
// }

const handleReportAPI = async (report: IReport) => {
  const response = await apiClient.post<IReport[]>("/reports/",report);
  return response.data;
}

const authService = {
  handleReportAPI
}

export default authService;