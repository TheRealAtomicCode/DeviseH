import { TLeaveData } from '../../../types/TContract';

function ContractSection({ leaveYear }: { leaveYear: TLeaveData | undefined }) {
  if (leaveYear === undefined)
    return <div>An error occured, unable to load contract data</div>;

  const lastContract =
    leaveYear.leaveYearContracts[leaveYear.leaveYearContracts.length - 1];

  return (
    <div className="p-6 ">
      <div className="mb-4 flex items-center justify-between">
        <label
          htmlFor="yearSelector"
          className="text-sm font-medium text-gray-600 dark:text-gray-400"
        >
          Select Leave Year
        </label>
        <select
          id="yearSelector"
          className="ml-4 mr-16 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-48"
        >
          {leaveYear.leaveYears.map((year) => (
            <option key={year.startDate} value={year.startDate}>
              {new Date(year.startDate).getFullYear()}
            </option>
          ))}
        </select>
      </div>

      {leaveYear.leaveYearContracts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No contract data available for the selected year.
        </p>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Contract Start Date
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {new Date(lastContract.contractStartDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Contract End Date
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {new Date(lastContract.contractEndDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Contracted Hours/Week
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {lastContract.contractedHoursPerWeek} hrs
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Company Hours/Week
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {lastContract.companyHoursPerWeek} hrs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Contracted Leave Entitlement
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {lastContract.contractedLeaveEntitlement} days
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Company Leave Entitlement
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {lastContract.companyLeaveEntitlement} days
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Leave Allowance
              </p>
              <p className="text-gray-800 dark:text-gray-100">
                {lastContract.allowance} days
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContractSection;
