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
					dateClick: this.handleDateClick,
					locale: 'ja',
					events: [
						{
							title: 'Meeting',
							start: new Date()
						}
					],
				}
			}
		},
		methods: {
			handleDateClick: function(arg) {
				alert('予定を入れて下さい ' + arg.dateStr)
			},
		}
	};
</script>
