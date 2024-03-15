export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json"
  );
  const data = response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
      // Basically we are trying to copy everything from the object as it is.
    });
  }

  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
