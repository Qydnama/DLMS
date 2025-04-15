import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PageNotFound = () => {
  return (
    <div className="min-h-[710px] flex flex-col justify-center items-center bg-white text-center rounded-3xl shadow-md">
        <div className="flex flex-col md:flex-row md:items-start items-center md:space-x-10">
            <div>
                    <img src="/images/toncoin.png" alt="404" className="w-[200px] md:w-[250px] md:w-[300px] md:my-10"/>
            </div>
            <div className="flex flex-col md:items-start m-0">
                <h1 className="text-[80px] md:text-[120px] font-bold text-black-900">404</h1>
                <p className="text-lg md:text-xl text-black-900 mb-2 font-semibold">Sorry, didn't find any result.</p>
                <p className="text-sm md:text-[14px] text-gray-400 mb-6 px-2 md:p-0">Make sure your request is correct and repeat the search.</p>

                <Link to="/">
                    <Button className="bg-goluboy hover:bg-blue-600 text-white px-6 py-2 rounded-2xl font-semibold">
                    Go Back Home
                    </Button>
                </Link>
            </div>
      </div>
    </div>
  );
};