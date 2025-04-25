export type TLeaveYearContract = {
  id: number;
  employeeId: number;
  companyId: number;
  patternId: number | null;
  createdAt: string;
  updatedAt: string;
  addedBy: number;
  updatedBy: number | null;
  contractType: number;
  contractStartDate: string;
  contractEndDate: string;
  contractedHoursPerWeek: number;
  companyHoursPerWeek: number;
  contractedDaysPerWeek: number;
  companyDaysPerWeek: number;
  averageWorkingDay: number;
  isDays: boolean;
  companyLeaveEntitlement: number;
  contractedLeaveEntitlement: number;
  firstLeaveAllowence: number;
  nextLeaveAllowence: number;
  termTimeId: number;
  discardedId: number | null;
  allowance: number;
};

export type TLeaveYear = {
  startDate: string;
  endDate: string;
  isSelectedYear: boolean;
};

export type TLeaveData = {
  leaveYearContracts: TLeaveYearContract[];
  absences: any[]; // You can replace `any` with a proper type if known
  leaveYears: TLeaveYear[];
};
