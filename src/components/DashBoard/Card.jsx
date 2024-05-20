import React from "react";

function DashboardCard(props) {
  return (
    <div className="bg-white w-full sm:w-[48%] md:w-[45%] lg:w-[40%] border rounded-xl mb-4">
      <div>
        <section className="flex gap-4 p-4 justify-start items-center">
          <div className="rounded-lg">
            {React.createElement(props.titleImg, {
              className:
                "bg-[#F8F6FE] text-[#7152F3] w-[50px] h-[50px] rounded-lg",
            })}
          </div>
          <div className="font-lexend text-xl md:text-sm sm:text-2xl font-light">
            {props.title}
          </div>
        </section>
        <section className="flex justify-between mt-4 p-4 items-center">
          <div className="text-2xl sm:text-3xl font-lexend font-extrabold">
            {props.data}
          </div>
          <div className={`${props.figBg} p-2 ${props.figTxtCol} rounded-lg flex gap-2 items-center`}>
            {React.createElement(props.figureImg, {
              className: "mt-[1px] text-lg sm:text-xl",
            })}
            {props.percentage}
          </div>
        </section>
        <div className="mt-4 bg-[#F0F0F1] h-[2px] border-[#F0F0F1]"></div>
        <section className="mt-4 p-4">
          <div className="font-lexend text-[#A2A1A8] text-xl md:text-sm sm:text-2xl">
            Updated: {props.date}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardCard;
