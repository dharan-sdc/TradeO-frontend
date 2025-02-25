import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Dialog } from "@radix-ui/react-dialog"
import { CopyIcon, ReloadIcon, UploadIcon } from "@radix-ui/react-icons"
import { DollarSign, IndianRupeeIcon, WalletIcon } from "lucide-react"
import TopupForm from "./TopupForm"

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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Wallet