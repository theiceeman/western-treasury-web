import { Bars } from 'react-loading-icons';
import NotFound from '../NotFound';

type TableProps = {
  title?: string;
  header?: Array<string>;
  column?: Array<Array<React.ReactElement>>;
  lastHeaderSticky?: Boolean;
  lastColumnSticky?: Boolean;
  isLoading?: Boolean;
  pagination?: {
    previousButton: {
      onClick: () => void;
    };
    firstButton: {
      onClick: () => void;
    };
    lastButton: {
      onClick: () => void;
    };
    nextButton: {
      onClick: () => void;
    };
    currentPage: string;
    totalPages?: string;
  };
  [key: string]: any;
};

const BaseTable = ({ table }: { table?: TableProps }) => {
  return (
    // <div className="intro-y box">
    <div className="flex w-full flex-col items-center border-b border-slate-200/60 p-5 sm:flex-row">
      <div className="w-full overflow-x-auto">
        {table?.isLoading ? (
          <div className="flex h-96 justify-center">
            <div className="mt-36 flex flex-col items-center">
              <Bars className="h-32 w-32" />
              <h3 className="mt-3 text-center text-lg">Fetching available data...</h3>
            </div>
          </div>
        ) : null}

        {!table?.isLoading && (!table?.column || table?.column?.length === 0) ? (
          <NotFound/>
        ) : null}

        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {!table?.isLoading &&
                table?.column &&
                table?.column?.length > 0 &&
                table?.header?.map((e, key) => (
                  <th scope="col" className="px-6 py-3">
                    {e}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {!table?.isLoading &&
              table?.column?.map((item, key) => (
                <tr
                  key={key}
                  className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                >
                  {item.map((e, index) => (
                    <td key={index} className="px-6 py-4">
                      {e}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
};

export default BaseTable;
