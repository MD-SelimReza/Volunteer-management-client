const Event = ({ image, title, description, time, venue, date }) => {
  return (
    <div className="relative group max-w-sm rounded-b overflow-hidden shadow-lg bg-white">
      <div className="relative overflow-hidden">
        <img
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src="https://i.ibb.co/Lgbm5gx/item2.jpg"
          alt="item2"
          border="0"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
          <button className="bg-emerald-500 uppercase text-white py-2 px-6 rounded-full transition duration-500 hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500 border-2 border-transparent">
            read more
          </button>
        </div>
      </div>
      <div className="px-6 flex flex-col py-4">
        <div className="flex-1">
          <h2 className="font-medium text-xl text-gray-700 mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="mt-4 border-t-2 pt-4">
          <p className="text-sm text-gray-600">Started On: {time}</p>
          <p className="text-sm text-gray-600">{venue}</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-white p-2">
        <p className="text-xs text-gray-600">{date}</p>
      </div>
    </div>
  );
};

export default Event;
