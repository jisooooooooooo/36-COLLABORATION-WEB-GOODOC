import apiClient from '@/shared/apis/apiClient';
import type { HospitalInfo } from '@/pages/main/components/HospitalListItem';

export interface HospitalInfoResponse {
  statusCode: number;
  message: string;
  data: { hospitals: HospitalInfo[] };
}

export const fetchHospitalInfo = async (): Promise<HospitalInfo[]> => {
  const response = await apiClient.get<HospitalInfoResponse>('/hospitals');

  return response.data.data.hospitals;
};
