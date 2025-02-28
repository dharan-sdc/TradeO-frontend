
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { store } from '@/State/Store';
import { getWithdrawalHistory } from '@/State/Withdrawal/Action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


const Withdrawal = () => {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector(store => store)

  useEffect(() => {
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
  }, [])
  return (
    <div className='p-7 lg:p-20'>
      <h1 className='font-bold text-3xl pb-10'>Withdrawal Menu</h1>
      <div className="border border-gray-200 rounded overflow-hidden">
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Date</TableHead>

              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right" >Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawal.history.map((item, index) => <TableRow key={index}>
              {/* <TableCell className="font-medium">Bitcoin</TableCell> */}
              <TableCell>
                <p>{item.date.toString()}</p>

              </TableCell>


              <TableCell>Bank Account</TableCell>
              <TableCell>${item.amount}</TableCell>
              <TableCell className="text-right">
                {item.status}
              </TableCell>
            </TableRow>)}

          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default Withdrawal