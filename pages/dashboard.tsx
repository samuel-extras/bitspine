import { Fragment, useContext, useState } from 'react';
import { FaWallet, FaLock, FaLockOpen } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';
import { BsBarChart } from 'react-icons/bs';

import Nav from '../src/components/NavBar';
import Button from '../src/components/Button';
import Loader from '../src/components/Loader';
import Modal from '../src/components/Modal';
import Prompt from '../src/components/Prompt';
import Alert from '../src/components/Alert';

const Dashboard = () => {
  const [tab, setTab] = useState(true);
  const [supplyPrompt, setSupplyPrompt] = useState(false);
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(true);

  return (
    <>
      <Prompt
        heading="Supply Eth"
        subheading="the ehnfue hfefj hyhfj"
        placeholder="eth quantity"
        button="Supply Ethereum"
        show={supplyPrompt}
        onClose={() => setSupplyPrompt(false)}
      />
      {loader && <Loader />}
      {alert && (
        <Alert message="this is the alert" onClose={() => setAlert(false)} />
      )}
      <Nav />
      <div className="p-4 bg-[#011936]">
        <div className="p-6">
          <div className="flex ">
            <div className="cursor-pointer flex items-center justify-center">
              <div className="bg-slate-800 rounded-md p-2 m-2">
                <IoWalletOutline className="h-6 w-6 text-gray-200" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm text-gray-200 font-bold"> Net Worth</p>
                <div className="flex justify-start items-center">
                  <span className="text-sm text-gray-200 font-bold">$</span>
                  <span className="text-3xl text-white font-extrabold">
                    0
                  </span>{' '}
                </div>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-center">
              <div className="bg-slate-800 rounded-md p-2 m-2">
                <BsBarChart className="h-6 w-6 text-gray-200" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm text-gray-200 font-bold"> Net APY</p>
                <div className="flex justify-start items-center">
                  <span className="text-3xl text-white font-extrabold">0</span>{' '}
                  <span className="text-sm text-gray-200 font-bold">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <ul className="flex bg-slate-800  p-1 rounded-lg w-min">
            <li
              onClick={() => setTab(true)}
              className={`py-2 px-6 md:px-16 mx-1 ${
                tab ? 'bg-white text-black' : 'bg-[#011936] text-white'
              } rounded-lg cursor-pointer`}
            >
              Supply
            </li>
            <li
              onClick={() => setTab(false)}
              className={`py-2 px-6 md:px-16 mx-1 ${
                !tab ? 'bg-white text-black' : 'bg-[#011936] text-white'
              } rounded-lg cursor-pointer`}
            >
              Borrow
            </li>
          </ul>
        </div>
        <>
          <div className="-mx-2">
            {tab && (
              <div className="w-full   lg:px-8">
                <div className="rounded-lg shadow-sm mb-4">
                  <div className="rounded-lg bg-slate-800 shadow-lg md:shadow-xl relative overflow-hidden">
                    <div className="px-3 pt-8 pb-10 text-center relative z-1">
                      <h3 className="text-3xl text-white font-semibold leading-tight my-3">
                        Your Supplies
                      </h3>
                      <div className="bg-slate-800 lg:p-8 rounded-md w-full">
                        <div>
                          <div className=" py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                              <table className="min-w-full leading-normal">
                                <thead>
                                  <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                      Assets
                                    </th>
                                    <th className="px-5 py-3 flex justify-center items-center border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                      Wallet Balance
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                      APY
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                      Can be collateral
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"></th>
                                    <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"></th>
                                  </tr>
                                </thead>
                                <tbody className="bg-slate-800">
                                  <tr>
                                    <td className="px-5 py-5 border-b border-gray-600 bg-slate-800 text-sm">
                                      <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                          <img
                                            className="w-full h-full rounded-full"
                                            src="data:image/png;base64,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"
                                            alt=""
                                          />
                                        </div>
                                        <div className="ml-3">
                                          <div className="text-white font-bold whitespace-nowrap">
                                            USDC
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className=" py-5 border-b text-center border-gray-600 bg-slate-800 text-sm">
                                      <div className="text-white font-normal whitespace-nowrap">
                                        $908M
                                      </div>
                                    </td>
                                    <td className="py-5 border-b text-center border-gray-600 bg-slate-800 text-sm">
                                      <p className="text-white whitespace-nowrap self-center ">
                                        0.46%
                                      </p>
                                    </td>
                                    <td className="py-5 border-b text-center border-gray-600 bg-slate-800 text-sm">
                                      <div className="text-white whitespace-nowrap">
                                        Yes
                                      </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-600 bg-slate-800 text-sm">
                                      <Button
                                        title="Use as collateral"
                                        onClick={() => setLoader(true)}
                                      />
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-600 bg-slate-800 text-sm">
                                      <Button
                                        title="Redeem"
                                        onClick={() => setLoader(true)}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0">
                      <canvas id="chart1" height="70"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!tab && (
              <div className="w-full  lg:px-8">
                <div className="rounded-lg shadow-sm mb-4">
                  <div className="rounded-lg bg-slate-800 shadow-lg md:shadow-xl relative overflow-hidden">
                    <div className="px-3 pt-8 pb-10 text-center relative z-1">
                      <h4 className="text-sm uppercase text-gray-200 leading-tight">
                        Your borrows
                      </h4>
                      <h3 className="text-3xl text-white font-semibold leading-tight my-3">
                        Nothing borrowed yet
                      </h3>
                    </div>
                    <div className="absolute bottom-0 inset-x-0">
                      <canvas id="chart2" height="70"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-[#011936] lg:p-8 rounded-md w-full">
              <div>
                <h3 className="text-white font-extrabold text-3xl">
                  Assets to Supply
                </h3>
                <div className=" py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                            Assets
                          </th>
                          <th className="px-5 py-3 flex justify-center items-center border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                            Wallet Balance
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                            APY
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                            Can be collateral
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"></th>
                          <th className="px-5 py-3 border-b-2 border-gray-600 bg-slate-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-800">
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-600 bg-slate-800 text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="data:image/png;base64,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"
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <div className="text-white font-bold whitespace-nowrap">
                                  USDC
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className=" py-5 border-b text-center border-gray-600 bg-slate-800 text-sm">
                            <div className="text-white font-normal whitespace-nowrap">
                              $908M
                            </div>
                          </td>
                          <td className="py-5 border-b text-center border-gray-600 bg-slate-800 text-sm">
                            <p className="text-white whitespace-nowrap self-center ">
                              0.46%
                            </p>
                          </td>
                          <td className="py-5 border-b text-center border-gray-600 bg-slate-800 text-sm">
                            <div className="text-white whitespace-nowrap">
                              Yes
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-600 bg-slate-800 text-sm">
                            <Button
                              title="Supply"
                              onClick={() => setSupplyPrompt(true)}
                            />
                          </td>
                          <td className="px-5 py-5 border-b border-gray-600 bg-slate-800 text-sm">
                            <Button title="Details" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default Dashboard;
