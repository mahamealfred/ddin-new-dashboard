import  { FC, Fragment, useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Pageheader from '../../../components/common/page-header/pageheader';
import media83 from "../../../assets/images/media/media-83.svg";
import SpkBadge from '../../../@spk/uielements/spk-badge';
import SpkButton from '../../../@spk/uielements/spk-button';


interface FullcalendarProps {}

const Fullcalendar: FC<FullcalendarProps> = () => {
  let eventGuid = 0;
	const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
	const INITIAL_EVENTS = [
		{
			id: createEventId(),
			title: "Meeting",
			start: todayStr,
		},
		{
			id: createEventId(),
			title: "Meeting Time",
			start: todayStr + "T16:00:00",
		},
	];

	function createEventId() {
		return String(eventGuid++);
	}
	const initialstate1 = {
		calendarEvents: [
			{
				title: "Atlanta Monster",
				start: new Date("2019-04-04 00:00"),
				id: "1001",
			},
			{
				title: "My Favorite Murder",
				start: new Date("2019-04-05 00:00"),
				id: "1002",
			},
		],

		events: [
			{
				title: "Calendar Events",
				id: "1",
				bg: "primary",
			},
			{
				title: "Birthday Events",
				id: "2",
				bg: "secondary",
			},
			{
				title: "Holiday Calendar",
				id: "3",
				bg: "success",
			},
			{
				title: "Office Events",
				id: "4", 
        bg: "info",
				border: "border-info-transparent"
			},
			{
				title: "Other Events",
				id: "5",
				bg: "warning",
			},
			{
				title: "Festival Events",
				id: "6",
				bg: "danger",
			},
			{
				title: "Timeline Events",
				id: "7",
				bg: "teal",
			},
		],
	};
	const [state] = useState(initialstate1);

	useEffect(() => {
		const draggableEl:any = document.getElementById("external-events");
		new Draggable(draggableEl, {
			itemSelector: ".fc-event",
			eventData: function (eventEl) {
				const title = eventEl.getAttribute("title");
				const id = eventEl.getAttribute("data");
				const classValue = eventEl.getAttribute("class");
				return {
					title: title,
					id: id,
					className: classValue,
				};
			},
		});
	}, []);

	function renderEventContent(eventInfo:any) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}
	const handleEventClick = (clickInfo:any) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};
	const handleEvents = () => { };

	const handleDateSelect = (selectInfo:any) => {
		const title = prompt("Please enter a new title for your event");
		const calendarApi = selectInfo.view.calendar;

		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};

  return (
    <Fragment>
      <Pageheader currentpage="Full Calendar" activepage="Apps" mainpage="Full Calendar" />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-3 col-span-12">
          <div className="box custom-box">
            <div className="py-4 px-[1.25rem] border-b dark:border-defaultborder/10  !grid">
              <SpkButton buttontype="button" variant="primary" customClass="ti-btn"><i className="ri-add-line align-middle me-1 font-semibold inline-block"></i>Create New Event</SpkButton>
            </div>
            <div className="box-body !p-0">
              <div id="external-events" className="border-b dark:border-defaultborder/10 p-4">
                {state.events.map((event) => (
                      <div
                        className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-${event.bg} border !border-${event.bg}`}
                        title={event.title}
                        key={event.id}>
                        <div className={`fc-event-main text-${event.bg}`}>{event.title}</div>
                      </div>
                    ))}
              </div>
              <div className="p-4 border-b dark:border-defaultborder/10 ">
                <div className="flex items-center mb-4 justify-between">
                  <h6 className="font-semibold">
                    Activity :
                  </h6>
                  <SpkButton buttontype="button" variant="primary" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave">View All</SpkButton>
                </div>
                <ul className="list-none mb-0 fullcalendar-events-activity" id="full-calendar-activity">
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Monday, Jan 1,2023
                      </p>
                      <SpkBadge variant="light" customClass="text-default mb-1">12:00PM - 1:00PM</SpkBadge>
                    </div>
                    <p className="mb-0 text-mutedtext-[0.75rem]">
                      Meeting with a client about new project requirement.
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Thursday, Dec 29,2022
                      </p>
                      <SpkBadge variant="success" customClass="text-white mb-1">Completed</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted text-[0.75rem]">
                      Birthday party of niha suka
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Wednesday, Jan 3,2023
                      </p>
                      <SpkBadge variant="warning/10" customClass="text-warning mb-1">Reminder</SpkBadge>
                    </div>
                    <p className="mb-0 text-mutedtext-[0.75rem]">
                      WOrk taget for new project is completing
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Friday, Jan 20,2023
                      </p>
                      <SpkBadge variant="light" customClass="text-default mb-1">06:00PM - 09:00PM</SpkBadge>
                    </div>
                    <p className="mb-0 text-mutedtext-[0.75rem]">
                      Watch new movie with family
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Saturday, Jan 07,2023
                      </p>
                      <SpkBadge variant="danger/10" customClass="text-danger mb-1">Due Date</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted text-[0.75rem]">
                      Last day to pay the electricity bill and water bill.need to check the bank details.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <img src={media83} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-9 col-span-12">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Full Calendar</div>
            </div>
            <div className="box-body">
              <div id="calendar2">
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true} 
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Fullcalendar