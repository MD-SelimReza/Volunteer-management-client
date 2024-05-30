import { useState } from "react";
import Banner from "../components/Banner";
import RadioOption from "../components/RadioOption";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import useAxiosCommon from "../hooks/useAxiosCommon";
import Event from "../components/Event";

const Events = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filter, setFilter] = useState("");
  const axiosCommon = useAxiosCommon();

  const handleSelect = (value) => {
    setSelectedOption(value);
    if (value === "events") {
      setFilter("");
    }
  };

  const {
    data: events = [],
    isLoading: eventsLoading,
    isError: eventsError,
  } = useQuery({
    queryKey: ["events", filter],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/events?filter=${filter}`);
      return data;
    },
  });

  const currentDate = new Date();

  const upcomingEvents = events
    .filter((event) => new Date(event.date) > currentDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 10);

  const expiredEvents = events
    .filter((event) => new Date(event.date) < currentDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 10);

  const allEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const getFilteredEvents = () => {
    if (selectedOption === "upcoming") {
      return upcomingEvents;
    } else if (selectedOption === "expired") {
      return expiredEvents;
    } else {
      if (filter) {
        return events
          .filter((event) => event.category === filter)
          .sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      return allEvents;
    }
  };

  if (eventsLoading) return <Loader />;
  if (eventsError) return <p>Failed to fetch data...</p>;

  const filteredEvents = getFilteredEvents();

  return (
    <div>
      <Banner
        image="https://cdn.pixabay.com/photo/2022/01/24/14/26/dice-6963527_640.jpg"
        title="Our Events"
        text="Events"
      />
      <h2 className="text-3xl text-center">Our Events</h2>
      <div className="lg:px-10 px-5">
        <div className="flex justify-center font-medium gap-10 bg-[#F7F7F7] my-10 py-8">
          <RadioOption
            value="upcoming"
            selectedOption={selectedOption}
            handleSelect={handleSelect}
            label="Upcoming Events"
          />
          <RadioOption
            value="events"
            selectedOption={selectedOption}
            handleSelect={handleSelect}
            label="All Events"
          />

          <div className="">
            <select
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              value={filter}
              name="category"
              id="category"
            >
              <option value="">Filter By Category</option>
              <option value="Education">Education</option>
              <option value="Health">Healthcare</option>
              <option value="Social Services">Social Services</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>
          </div>
          <RadioOption
            value="expired"
            selectedOption={selectedOption}
            handleSelect={handleSelect}
            label="Expired Events"
          />
        </div>
        <div className="grid gap-8 grid-cols-3 my-10">
          {filteredEvents.map((event) => (
            <Event
              key={event._id}
              image="https://source.unsplash.com/301x301/?random"
              title={event.title}
              description={event.description}
              time={event.time}
              venue={event.venue}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
