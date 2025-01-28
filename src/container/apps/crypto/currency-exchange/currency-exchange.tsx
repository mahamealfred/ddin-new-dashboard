import  { FC, Fragment } from 'react';
import {CurrencyOptions1, CurrencyOptions2, Currencydata } from "../../../../components/ui/data/apps/crypto/currencydata";
import Pageheader from '../../../../components/common/page-header/pageheader';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkCurrencyCard from '../../../../@spk/apps/spk-currencycard';
import SpkButton from '../../../../@spk/uielements/spk-button';
interface CurrencyexchangeProps {}

const Currencyexchange: FC<CurrencyexchangeProps> = () =>{ 
    return (
        <Fragment>
            <Pageheader currentpage="Currency-Exchange" activepage="Crypto" mainpage="Currency-Exchange" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box currency-exchange-box">
                        <div className="box-body !p-[3rem] flex items-center justify-center">
                            <div className="container">
                                <h3 className="text-white text-center">Buy and Sell Coins without additional fees</h3>
                                <span className="block text-[1rem] text-white text-center opacity-[0.8] !mb-4 ">
                                    Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC crypto-currency..
                                </span>
                                <div className="p-4 mb-4 rounded currency-exchange-area">
                                    <div className="grid grid-cols-12 sm:gap-4 gap-2">
                                        <div className="xxl:col-span-3 col-span-12">
                                            <input type="text" className="form-control dark:!bg-bodybg" defaultValue="0.0453" placeholder="Enter Amount" />
                                        </div>
                                        <div className="xxl:col-span-2 col-span-12">
                                            <div>
                                            <SelectComponent  option={CurrencyOptions1} defaultvalue={[CurrencyOptions1[0]]}/>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-2 col-span-12 flex items-center justify-center">
                                            <div className="!text-xl text-white text-center op-8 leading-none">
                                                =
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-3 col-span-12">
                                            <input type="text" className="form-control dark:!bg-bodybg" defaultValue="1350.93" placeholder="Exchange Amount" />
                                        </div>
                                        <div className="xxl:col-span-2 col-span-12">
                                        <SelectComponent option={CurrencyOptions2}  defaultvalue={[CurrencyOptions2[0]]}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <SpkButton variant="success-full" buttontype="button" customClass="ti-btn btn-wave">Exchange Now</SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 justify-center">
                {Currencydata.map((idx) => (
                <div className="xl:col-span-3 col-span-12" key={Math.random()}>
                   <SpkCurrencyCard card={idx} height="60" />
                </div>
                ))}
                <div className="xl:col-span-12 col-span-12">
                    <div className="text-center my-6">
                        <SpkButton variant="primary" customClass="ti-btn !border !border-primary" buttontype="button" disabled={true}>
                            <span className="ti-spinner  !w-[1rem] !h-[1rem] align-middle" role="status"
                                aria-hidden="true"></span>
                            Loading...
                        </SpkButton>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Currencyexchange