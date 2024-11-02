import fetchSearchResult from "@app/hooks/useSearchQuery";
import { debounce } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SearchUser = () => {

    const [searchText, setSearchText] = useState<string>('');
    const [debouncedSearchText, setDebouncedSearchText] = useState<string>('');
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        handleSearchChange(e.target.value);
      };
      const handleSearchChange = debounce((text: string) => {
        setDebouncedSearchText(text);
      }, 500);
    const { 
        data: results,
        isLoading,
        error
      } = useQuery({
        queryKey: ['search', debouncedSearchText], 
        queryFn: () => fetchSearchResult(debouncedSearchText),
        enabled: Boolean(debouncedSearchText)// { enabled: Boolean(searchText) }
        })
    console.log(isLoading, error)
    return (
        <>
            <div className="max-w-sm w-48">
                <div className="relative" data-hs-combo-box='{
                    "groupingType": "default",
                    "preventSelection": true,
                    "isOpenOnFocus": true,
                    "groupingTitleTemplate": "<div className="block text-xs text-gray-500 m-3 mb-1 dark:text-neutral-500 dark:border-neutral-700\"></div>"
                }'>
                    <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                        <svg className="shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>
                    <input 
                    className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
                    type="text" role="combobox" aria-expanded="false" 
                    placeholder="Search ..." 
                    value={searchText} 
                    onChange={onInputChange}
                    data-hs-combo-box-input=""
                    />
                    </div>
                </div>
                {results?.country.length!=undefined && 
                <div className="w-40 absolute z-50 w-full bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800" data-hs-combo-box-output="">
                    <div className="h-48 max-h-[500px] p-2 overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" data-hs-combo-box-output-items-wrapper="">
                        {
                            results.country.map((item, index) => (
                                <>
                                <a key={index} className="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="/">
                                    <span className="text-sm text-gray-800 dark:text-neutral-200" data-hs-combo-box-search-text="Kim Ya Sung" data-hs-combo-box-value="">{item.country_id}</span>
                                </a>
                                </>
                            ))
                        }
                        
                    </div>
                    
                </div>
                }
            </div>
        </>
    )
}

export default SearchUser;