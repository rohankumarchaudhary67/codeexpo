interface RegistrationTicketProps {
    registrationData: {
        fullName: string;
        email: string;
    }
}

const Registration_Ticket: React.FC<RegistrationTicketProps> = ({ registrationData }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-black opacity-80 inset-0 z-0"></div>
                <div className="flex flex-col">
                    <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                        <div className="flex-none sm:flex">
                            <div className="flex-auto justify-evenly md:w-96">
                                <div className="flex items-center justify-center">
                                    <h1 className="text-black font-bold text-2xl">Entry Pass</h1>
                                </div>
                                <div className="border-dashed border-black border-b-2 my-5">
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -left-2"></div>
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -right-2"></div>
                                </div>
                                <div className="flex flex-col text-black">
                                    <div className="pr-16 md:pr-24">
                                        <h1 className="text-sm pl-2">You are invited</h1>
                                        <h1 className="font-bold text-3xl pl-2">{registrationData.fullName}</h1>
                                        <h1 className="text-lg pl-2">({registrationData.email})</h1>
                                    </div>
                                </div>
                                <div className="border-black border-dashed border-b-2 my-2 pt-2">
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -left-2"></div>
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -right-2"></div>
                                </div>
                                <div className="flex items-center justify-between text-black">
                                    <div>
                                        <h1>Date:</h1>
                                        <h1>Time:</h1>
                                        <h1>Venue:</h1>
                                    </div>
                                    <div className="flex flex-col justify-end items-end">
                                        <h1>5th-7th May, 2024</h1>
                                        <h1>10:00 a.m.</h1>
                                        <h1>Online Mode</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration_Ticket;

