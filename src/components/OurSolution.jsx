import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "./Loader";

const OurSolution = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: services = [],
    isLoading: servicesLoading,
    isError: servicesError,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure("/services");
      return data;
    },
    queryKey: ["services"],
  });

  if (servicesLoading) return <Loader />;
  if (servicesError) return <p>Failed to fetch data...</p>;

  return (
    <div className="lg:my-20 md:my-16 my-10 lg:px-10 px-5">
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-5 border-b-4 border-[#DE2A4D]"></span>

          <p className="text-[#DE2A4D] font-bold">Our Mission & Vision</p>

          <span className="w-5 border-b-4 border-[#DE2A4D]"></span>
        </div>
        <p className="text-3xl font-bold text-center">
          We Can Make Solution <br /> Everything To Our <br /> Demand.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col shadow-xl dark:bg-gray-50"
          >
            <div className="relative">
              <img
                alt=""
                className="object-cover w-full dark:bg-gray-500"
                src={service.image}
              />
              <div className="absolute bottom-5 w-full">
                <p className="text-xl font-medium uppercase text-center bg-white mx-2 p-2 border-red-400">
                  {service.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolution;
