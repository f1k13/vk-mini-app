import { useStore } from "effector-react";
import {
  $currentMonth,
  $currentMonthFormat,
  $daysMonth,
} from "../../../entities/calendar/model/calendar-days";
import Weather from "../../../features/weather/ui/weather";
import { $allergensMonth } from "../../../entities/allergies/model/allergies";
import {Fragment, useEffect, useRef, useState} from "react";
import { getAllergiesUserForMonth } from "../../../entities/allergies/lib/allergies-fx";
import { DateTime } from "luxon";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip as BarTooltip,
  Cell,
} from "recharts";
import { setCurrentMonthFormat } from "../../../entities/calendar/lib/calendar-event";

import {temp} from '../data'

const CalendarStatistics = () => {
  const today = DateTime.now();
  const days = useStore($daysMonth);
  // const allergiesMonth = useStore($allergensMonth);
  const allergiesMonth = temp;
  const currentMonth = useStore($currentMonth);
  const month = today.toFormat("MM");
  const currentMonthToFormat = useStore($currentMonthFormat);
  useEffect(() => {
    getAllergiesUserForMonth(Number(month));
    setCurrentMonthFormat(today.toFormat("LLLL", { locale: "ru-RU" }));
  }, []);
  const periodDays = [
    `01.${currentMonth}-10.${currentMonth}`,
    `11.${currentMonth}-20.${currentMonth}`,
    `21.${currentMonth}-${days.length - 1}.${currentMonth}`,
  ];

  const dataO = allergiesMonth.map((item) => {
    const startDate = DateTime.fromFormat(item.start, "dd.MM");
    const endDate = DateTime.fromFormat(item.end, "dd.MM");

    const dateRangeArray = [];

    for (let date = startDate; date <= endDate; date = date.plus({ days: 1 })) {
      dateRangeArray.push(date.toFormat("dd.MM"));
    }

    const filteredDates = dateRangeArray.filter((date) => {
      const dateObj = DateTime.fromFormat(date, "dd.MM");
      return !currentMonth
        ? dateObj.month === Number(month)
        : dateObj.month === Number(currentMonth);
    });
    // const dateArr = [{
    //   period: '01.03-10.03',
    //   allergens: [{
    //     title: 'asd',
    //     value:
    //   }]
    // }]
    return {
      period: periodDays,
      allergens: [
        {
          title: item.title,
          value: item.intensity.map((item) => item.value),
        },
      ],
    };
  });

  const data = [
    {
      period: `01.${currentMonth}-10.${currentMonth}`,
      allergens: allergiesMonth.map((item) => {
        const intensity = item.intensity.find((inten) => inten.period === `01.${currentMonth}-10.${currentMonth}`);
        if (intensity) {
          return {
            title: item.title,
            value: intensity.value[0] === '>' ? intensity.value.slice(1) : intensity.value.split("-")[1]
          }
        }
        return null;
      }).filter((item) => item !== null)
    },
    {
      period: `11.${currentMonth}-20.${currentMonth}`,
      allergens: allergiesMonth.map((item) => {
        const intensity = item.intensity.find((inten) => inten.period === `11.${currentMonth}-20.${currentMonth}`);
        if (intensity) {
          return {
            title: item.title,
            value: intensity.value[0] === '>' ? intensity.value.slice(1) : intensity.value.split("-")[1]
          }
        }
        return null;
      }).filter((item) => item !== null)
    },
    {
      period: `21.${currentMonth}-${days.length}.${currentMonth}`,
      allergens: allergiesMonth.map((item) => {
        const intensity = item.intensity.find((inten) => inten.period === `21.${currentMonth}-${days.length}.${currentMonth}`);
        if (intensity) {
          return {
            title: item.title,
            value: intensity.value[0] === '>' ? intensity.value.slice(1) : intensity.value.split("-")[1]
          }
        }
        return null;
      }).filter((item) => item !== null)
    }
  ]

  console.log(data);
  const containerRef = useRef<HTMLDivElement>(null);
  const CustomTooltip = ({
    label,
    active,
  }: {
    label: string;
    active: boolean;
  }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="intro">{label}</p>
        </div>
      );
    }

    return null;
  };



  const maxLength = Math.max(...data.map((item) => item.allergens.length))


  return (
    <div className=" w-full bg-white mt-[5px] pl-[20px] pr-[35px] ">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <p className="bg-primaryColor w-full uppercase text-24px my-[20px] py-2 rounded-2xl text-center">
        {currentMonthToFormat}
      </p>
      <div className="ml-[-50px]" ref={containerRef}>
        <BarChart
          width={containerRef.current?.offsetWidth}
          height={250}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis dataKey="period" />
          <YAxis ticks={Array.from(Array(2000).keys())} />
          {/*<BarTooltip*/}
          {/*  content={({ label, payload, active }: any) => (*/}
          {/*    <CustomTooltip label={label} active={active} />*/}
          {/*  )}*/}
          {/*/>*/}

          {/*{data.map((item, neindex) => {*/}
          {/*  return (*/}
          {/*    <Fragment key={item.period}>*/}
          {/*      {item.allergens.map((allergen, index) => {*/}
          {/*        return (*/}
          {/*          <Bar*/}
          {/*            key={`${item.period}-${index}-${neindex}-${allergen?.value}`}*/}
          {/*            dataKey={`allergens[${index}].value`}*/}
          {/*            fill={'#8884d8'}*/}
          {/*          />*/}
          {/*        )*/}
          {/*      })}*/}
          {/*    </Fragment>*/}
          {/*  );*/}
          {/*})}*/}

          {Array.from(Array(maxLength).keys()).map((item, index) => (
            <Bar
              key={`${item}-${index}-${index}`}
              dataKey={`allergens[${index}].value`}
              fill={'#8884d8'}
            />
          ))}

          {/*{data.map((item, index) => {*/}
          {/*  const firstIndex = index;*/}
          {/*  return (*/}
          {/*    <Fragment key={item.period}>*/}
          {/*      {item.allergens.map((allergen, index) => {*/}
          {/*        return <Bar key={`${item.period}-${index}`} dataKey={`allergens[${firstIndex}].value`} fill={'#8884d8'} />*/}
          {/*      })}*/}
          {/*    </Fragment>*/}
          {/*  )*/}
          {/*})}*/}

        </BarChart>
      </div>
      <div className="flex justify-center mt-[20px]">
        <Weather height={"h-[180px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
