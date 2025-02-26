import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Dialog } from "@radix-ui/react-dialog"
import { CopyIcon, ReloadIcon, ShadowIcon, ShuffleIcon, UpdateIcon, UploadIcon } from "@radix-ui/react-icons"
import { DollarSign, IndianRupeeIcon, WalletIcon } from "lucide-react"
import TopupForm from "./TopupForm"
import WithdrawalForm from "./WithdrawalForm"
import TransferForm from "./TransferForm"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback } from "@/components/ui/avatar"

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl">My PigBank Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400 text-sm">
                      #16F04
                    </p>
                    <CopyIcon size={10} className="cursor-pointer hover:text-orange-400" />
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon className="w-6 h-6 cursor-pointer
                hover:text-green-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <IndianRupeeIcon size={24} className="text-blue-400" />
              <span className="text-2xl font-semibold text-red-400">
                45,000
              </span>
            </div>
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-orange-200 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Top Up Your Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-orange-200 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Request withfrawal
                    </DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-orange-200 shadow-md">
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Tranfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                      Tranfer to other wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold pb-1">History</h1>
            <UpdateIcon className="h-6 w-6 p-0 cursor-pointer hover:text-red-500" />

          </div>
          <div className="space-y-5">

            {[1, 1, 1, 1, 1, 1].map((item, i) => <div key={i}>
              <Card className=" px-5 flex justify-between items-center p-2" >
                <div className="flex items-center gap-5">
                  <Avatar>
                    <AvatarFallback>
                      <ShuffleIcon className="w-9 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h1>Buy Asset</h1>
                    <p className="text-sm text-blue-500">2003-07-13</p>

                  </div>
                </div>
                <div>
                  <p className={`text-green-600`}>999 INR</p>
                </div>
              </Card>
            </div>)}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet