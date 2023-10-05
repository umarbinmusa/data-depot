function ambassadors(){
    return(
        <div class="min-h-screen" style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
   
        <div className=" container mx-auto  mr-6 ml-6" >
        <h1  class="text-center  text-3xl mb-3">Hello Ambassador</h1>
        <img src="images/bg.png" class="w-20" alt="" />
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm mt-3 font-medium text-gray-500 truncate">
                     users
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    100
                </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Ballance
                
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                     200
                </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Widrawals
                </div>
                </div>
                <img src="" alt="" />
        </div>
    </div>
    </div>


    );
}
export default ambassadors;