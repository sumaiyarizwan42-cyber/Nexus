import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const MeetingCalendar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow max-w-4xl mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        editable={true}
        selectable={true}
        select={(info) => {
          const title = prompt('Enter Meeting Title:');
          if (title) {
            info.view.calendar.addEvent({
              title,
              start: info.startStr,
              end: info.endStr
            });
          }
        }}eventClick={(info) => {
          if (info.event.backgroundColor === '#eab308') { // If it's Yellow
            if (confirm("Accept this meeting request?")) {
              info.event.setProp('color', '#22c55e'); // Change to Green
              alert("Meeting Confirmed!");
            } else if (confirm("Decline and delete this request?")) {
              info.event.remove();
            }
          } else { // If it's already Green
            if (confirm("Delete this confirmed meeting?")) {
              info.event.remove();
            }
          }
        }}
        contentHeight={400}
        initialEvents={[
          { title: 'Investment Pitch (Request)', start: new Date().toISOString().split('T')[0], color: '#eab308' }, // Yellow for pending
          { title: 'Follow-up Call (Confirmed)', start: '2026-07-10', color: '#22c55e' } // Green for confirmed
        ]}
        height="auto"
      />
    </div>
  );
};

export default MeetingCalendar;