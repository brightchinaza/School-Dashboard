import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";

const ParentPage = () => {
  return (
    <div className=" flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="md:h-[900px] h-full bg-white p-4 rounded-md">
          <h1 className=" text-xl font-semibold">Schedule (Eluno Bright)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}

      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
        {/* <EventCalendar /> */}
      </div>
    </div>
  );
};

export default ParentPage;
