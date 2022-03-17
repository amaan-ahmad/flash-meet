import uuid from "../utils/uuid";

const dateToday = new Date().toISOString().split("T")[0];

export const generateMeetLink = async (token) => {
  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",
    {
      method: "POST",
      body: JSON.stringify({
        start: {
          date: dateToday,
        },
        end: {
          date: dateToday,
        },
        conferenceData: {
          createRequest: {
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
            requestId: uuid(),
          },
        },
      }),
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  deleteMeeting(token, data.id);
  return data.hangoutLink;
};

export const deleteMeeting = (token, id) => {
  fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`,
    { method: "DELETE", headers: { authorization: `Bearer ${token}` } }
  )
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
};
