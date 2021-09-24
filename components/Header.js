import Image from "next/image";
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, SearchIcon } from '@heroicons/react/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";


function Header({ placeholder }) {
    const [searchInput, setsearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setnoOfGuests] = useState(1);
    const router = useRouter();


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setsearchInput("");
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location:searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

    
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px">

            {/* left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={() => router.push("/")}>
                <Image
                    src="https://links.papareact.com/qd3" 
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left" />
            </div>

            {/* middle */}
            <div className="flex items-center border-2 rounded-full p-2 md:shadow-md">
                
                <input  value={searchInput} 
                        onChange={(e) => setsearchInput(e.target.value)} 
                        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" 
                        type="text" 
                        placeholder={placeholder || "Start your search"} />

                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline">Become a Host</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>
            
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
            </div>
            
            </div>

            {searchInput && 
                <div className="flex flex-col col-span-3 mx-auto mt-5">
                    <DateRangePicker
                        ranges= {[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

                        <UsersIcon className="h-5"/>
                        <input value={noOfGuests} min={1} onChange={(e) => setnoOfGuests(e.target.value)} type="number" className="w-12 pl-2 text-lg outline-none text-red-400" />
                    </div>

                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-red-400 flex items-center border-2 rounded-full p-2 md:shadow-md text-center px-4 py-2  cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">
                            Cancel
                        </button>
                        
                        <button className="flex-grow bg-red-400 text-white flex items-center border-2 rounded-full p-2 md:shadow-md px-4 py-2 cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out" onClick={search}>
                            Search
                        </button>

                    </div>
                </div>
            }
        </header>
    );
}

export default Header
