<template>
	<FullCalendar :options="calendarOptions" />
</template>

<script>
	import FullCalendar from '@fullcalendar/vue3'
	import dayGridPlugin from '@fullcalendar/daygrid'
	import interactionPlugin from '@fullcalendar/interaction'

	export default {
		components: {
			FullCalendar
		},
		data() {
			return {
				calendarOptions: {
					plugins: [dayGridPlugin, interactionPlugin],
					initialView: 'dayGridMonth',
					locale: 'ja',
					dayCellContent: function(arg){
						return arg.date.getDate();
					},
					headerToolbar: {
						start: "prev",
						center: "title",
						end: "next"
					},
					buttonText: {
						today: '今日',
						month: '月'
					},
					buttonHints: {
						prev: '前の$0',
						next: '次の$0',
					},
					events: [
						{
							id: '1',
							title: 'Meeting',
							start: new Date(),
						},
						{
							id: '2',
							title: 'Meeting',
							start: '2024-05-11',
							end: '2024-05-12'
						},
					],
					eventClick: function(info) {
						info.jsEvent.preventDefault();

						if (info.event.id) {
							window.location.href = '/articles/'+ info.event.id;
						}
					},
				}
			}
		},
	};
</script>
