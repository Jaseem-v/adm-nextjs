import SectionHeader from "@/components/SectionHeader";

const events = [
  {
    id: 1,
    image: "/images/event1.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "12/04/2023",
    time: "7:30PM",
  },
  {
    id: 2,
    image: "/images/event2.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "12/04/2023",
    time: "7:30PM",
  },
  {
    id: 3,
    image: "/images/event3.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "12/04/2023",
    time: "7:30PM",
  },
  {
    id: 4,
    image: "/images/event2.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "12/04/2023",
    time: "7:30PM",
  },
  {
    id: 5,
    image: "/images/event3.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "12/04/2023",
    time: "7:30PM",
  },
  {
    id: 6,
    image: "/images/event1.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "12/04/2023",
    time: "7:30PM",
  },
];

const Events = () => {
  return (
    <>
      <SectionHeader title="Events" page="Events" />

      {/* \\\\\\\\\\\\ */}
      {/* EVENTS */}
      {/* \\\\\\\\\\\\ */}

      <section>
        <div
          className="py-14 md:py-20 lg:py-24 bg-white text-black
            max-w-screen-xl mx-auto"
        >
          <div className="px-6 xl:px-0">
            <p className="font-bold text-3xl lg:text-4xl">Upcoming events</p>
            <div
              className="event-cards mt-8 md:mt-9 lg:mt-11
                    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            >
              {events.map((event) => (
                <div
                  className="event-card rounded-xl max-w-sm shadow-eventCard hover:scale-[1.02] transition-all duration-200 hover:shadow-xl"
                  key={event.id}
                >
                  <img src={event.image} alt="event image" />
                  <div
                    className="px-7 md:px-8 lg:px-9
                            py-5 md:py-6 
                            font-normal flex flex-col"
                  >
                    <p className="text-base lg:text-lg">{event.title}</p>
                    <p className="text-xs lg:text-sm font-semibold text-desc">
                      {event.description}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <p className="px-5 py-2 text-base lg:text-lg bg-[#e3e3e3]">
                        {event.date}
                      </p>
                      <p className="px-5 py-2 text-base lg:text-lg bg-[#e3e3e3]">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
