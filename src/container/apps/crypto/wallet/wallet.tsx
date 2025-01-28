import  { FC, Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader';
import SpkWalletcard from '../../../../@spk/apps/spk-walletcard';
import { WalletData, WalletData1 } from '../../../../components/ui/data/apps/crypto/walletcarddata';
import SpkWallet from '../../../../@spk/apps/spk-wallet';
interface WalletProps {}

const Wallet: FC<WalletProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Wallet" activepage="Crypto" mainpage="Wallet" />
            <div className="container !px-md-2 !px-0">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 col-span-12">
                        {WalletData.map((idx) => (
                      <SpkWalletcard key={Math.random()} card={idx} />
                        ))}
                    </div>
                    <div className="xl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="xl:col-span-12 col-span-12">
                            {WalletData1.map((idx) => (
                                <SpkWallet key={Math.random()} card={idx} />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Wallet