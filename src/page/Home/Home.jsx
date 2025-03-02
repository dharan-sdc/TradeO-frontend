import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import "../../index.css"; // If index.css is in the root directory

import React, { useEffect, useState } from 'react'
import AssetTable from './AssetTable'
import StackChart from './StackChart'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinList, getTop50CoinList } from '@/State/Coin/Action'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DotIcon } from 'lucide-react'
import { motion } from "framer-motion";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 20; // Show 20 coins per page

  const dispatch = useDispatch();
  const { coin } = useSelector(store => store);

  useEffect(() => {
    dispatch(getTop50CoinList());
  }, [category]);

  useEffect(() => {
    dispatch(getCoinList(2));
  }, []);

  // Determine which data to display
  const coinList = category === "all" ? coin.coinList : coin.top50;
  const totalPages = Math.ceil(coinList.length / coinsPerPage);

  // Get paginated data
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coinList.slice(indexOfFirstCoin, indexOfLastCoin);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className='relative'>
      <div className='lg:flex'>
        <div className='lg:w-[50%] lg:border-r ml-2 pr-2'>

          {/* Category Buttons */}
          <div className='p-3 flex items-center gap-4'>
            <Button
              onClick={() => setCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full">
              All
            </Button>
            <Button
              onClick={() => setCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full">
              Top 10
            </Button>
          </div>

          {/* Table with Pagination Data */}
          <AssetTable coin={currentCoins} category={category} />

          {/* Pagination Component */}
          <div className="mt-4 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(index + 1)}
                      className={currentPage === index + 1 ? "font-bold" : ""}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

        </div>

        {/* Chart Section */}
        <div className='hidden lg:block lg:w-[50%] p-5 '>
          <div className='pb-5'>


            <Button className="relative w-full overflow-hidden">
              <motion.span
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute whitespace-nowrap"
              >
                TradeO Coin © 2025 SDC Group. All rights reserved
              </motion.span>
            </Button>



          </div>
          <StackChart coinId={"ethereum"} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" />
              </Avatar>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <p>ETH</p>
                <DotIcon className='text-gray-400' />
                <p className='text-gray-400'>TradeO</p>
              </div>
              <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>5464</p>
                <p className='text-red-500'>
                  <span>-13192962630.7865</span>
                  <span>(-0.298986%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;
