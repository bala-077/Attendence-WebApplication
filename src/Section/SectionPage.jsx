import React from "react";
import { useNavigate } from "react-router-dom";

const SectionPage = () => {
    const FristYear_Girls = useNavigate()
    const FristYear_Boys = useNavigate()
    const SecondYear_Girls = useNavigate()
    const SecondYear_Boys = useNavigate()

    const handleFristGirls = () => {
        const title = "1st-year Girls"
        FristYear_Girls("/fristyear-Girls",{state: {title}})
    }

    const handleFristBoys = () => {
        const title = "1st-year Boys"
        FristYear_Boys("/fristyear-Boys",{state: {title}})
    }

    const handleSecondGirls = () => {
        const title = "2nd-year Girls"
        SecondYear_Girls("/secondyear_Girls", {state: {title}})
    }

    const handleSecondBoys = () => {
        const title = "2nd-year Boys"
        SecondYear_Boys("/secondyear_Boys", {state: {title}})
    }

    const handleNews = () => {

    }

    const handleCircular = () => {

    }

    return (
        <>
            <div className="w-full h-screen bg-red-400">
                <div className="w-full p-5 bg-white">
                    <h1 className="text-xl font-medium md:text-3xl">Department Of Computer Application</h1>
                </div>
                <div className="bg-green-300 flex border justify-center items-center mt-5">
                    <div className="w-full  bg-yellow-500 gap-5 flex flex-col md:w-6/12">
                        <button className="px-3 py-2 bg-black rounded-lg text-white"
                        onClick={handleFristGirls}>1st-MCA Girls</button>
                        <button className="px-3 py-2 bg-black rounded-lg text-white" onClick={handleFristBoys}>1st-MCA Boys</button>
                        <button className="px-3 py-2 bg-black rounded-lg text-white" onClick={handleSecondGirls}>2nd-MCA Girls</button>
                        <button className="px-3 py-2 bg-black rounded-lg text-white" onClick={handleSecondBoys}>2nd-MCA Boys</button>
                        <button className="px-3 py-2 bg-black rounded-lg text-white" onClick={handleNews}>New Room</button>
                        <button className="px-3 py-2 bg-black rounded-lg text-white" onClick={handleCircular}>Circular</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionPage;
