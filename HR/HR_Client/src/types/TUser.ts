export type TUserCard = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  teamName: string;
  teamId: number;
  title: string | null;
  userRole: number;
  annualLeaveStartDate: string;
  profilePicture: string | null;
};

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  dateOfBirth: string | null;
  teamName: string;
  teamId: number;
  annualLeaveStartDate: string;
  profilePicture: string | null;
  isTerminated: boolean;
  isVerified: boolean;
  createdAt: string;
  niNo: string | null;
  driversLicenceNumber: string | null;
  driversLicenceExpirationDate: string | null;
  passportNumber: string | null;
  passportExpirationDate: string | null;
  userRole: number;
  permissionId: number | null;
  managers: TManager[];
};

export type TManager = {
  managerId: number;
  fullName: string;
  title: string | null;
  email: string;
};
