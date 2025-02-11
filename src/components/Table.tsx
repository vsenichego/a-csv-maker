import { TableProps } from '@/src/helpers/types';

export default function Table({
  rows,
  onDeleteRow,
  deleteRowIndex,
  legalPayers,
  services,
  legalClinics,
  doctors,
  organizations,
}: TableProps) {
  return (
    <>
      <h2 className="text-2xl mt-4 mb-4 font-medium text-gray-800">Текущие строки</h2>
      <div className="overflow-x-auto max-h-[50vh] custom-scroll rounded-[12px]">
        <table className="w-full bg-white border-gray-300 border-separate table-fixed">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-50 text-gray-700 text-sm *:font-bold font-mono">
              <th className="p-3 border-r border-b text-left">Payer Legal ID</th>
              <th className="p-3 border-r border-b text-left">Contract ID</th>
              <th className="p-3 border-r border-b text-left">Service Code</th>
              <th className="p-3 border-r border-b text-left">Clinic Legal ID</th>
              <th className="p-3 border-r border-b text-left">User ID</th>
              <th className="p-3 border-r border-b text-left">Organization ID</th>
              <th className="p-3 border-r border-b text-left">Max Amount</th>
              <th className="p-3 border-r border-b text-left">Currency</th>
              <th className="p-3 border-b text-left">Scheduled On</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 transition duration-150 text-xs font-mono group ${deleteRowIndex === index ? "delete-row" : ""
                  }`}
              >
                <td
                  className="p-3 border-r border-b"
                  title={legalPayers.find((opt) => opt.value === row.legal_entity_id)?.label || row.legal_entity_id}
                >
                  {row.legal_entity_id}
                </td>

                <td className="p-3 border-r border-b">-</td>

                <td
                  className="p-3 border-r border-b"
                  title={services.find((opt) => opt.value === row.code)?.label || row.code}
                >
                  {row.code}
                </td>

                <td
                  className="p-3 border-r border-b"
                  title={legalClinics.find((opt) => opt.value === row.legal_id)?.label || row.legal_id}
                >
                  {row.legal_id}
                </td>

                <td
                  className="p-3 border-r border-b"
                  title={doctors.find((opt) => opt.value === row.user_id)?.label || row.user_id}
                >
                  {row.user_id}
                </td>

                <td
                  className="p-3 border-r border-b"
                  title={organizations.find((opt) => opt.value === row.organization_id)?.label || row.organization_id}
                >
                  {row.organization_id}
                </td>

                <td className="p-3 border-r border-b">{row.maxAmountToPay}</td>
                <td className="p-3 border-r border-b">{row.currency}</td>
                <td className="p-3 border-r border-b relative">
                  {row.scheduledOn}
                  <button
                    onClick={() => onDeleteRow(index)}
                    className="absolute top-1/2 right-1.5 transform -translate-y-1/2 text-base text-red-600 hover:text-red-800 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
