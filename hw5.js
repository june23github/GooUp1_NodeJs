const events = [
    { id: 1, name: 'Conference', date: new Date('2023-12-01T09:00:00') },
    { id: 2, name: 'Workshop', date: new Date('2023-12-10T14:30:00') },
    { id: 3, name: 'Meeting', date: new Date('2023-11-20T11:45:00') },
    { id: 3, name: 'Solve rubik', date: new Date('2023-11-29T11:45:00') },
    { id: 3, name: 'Buy new phone', date: new Date('2023-11-30T11:45:00') },
    { id: 3, name: 'Eating', date: new Date('2023-12-20T11:45:00') },
    { id: 3, name: 'Walking', date: new Date('2023-12-20T11:45:00') },
    { id: 3, name: 'Runing', date: new Date('2025-12-20T12:45:00') },
    { id: 3, name: 'Checking Bug', date: new Date('2025-12-20T12:46:00') },
    { id: 3, name: 'Deploy Production', date: new Date('2025-12-20T12:47:00') },
    ];


const result1 = events.sort((a, b) => {
    return a.date - b.date;
})

// console.log(result1);

function findEvents(inputTime){
    [day, month, year] = inputTime.split("-");
    startTime = new Date(year, month-1, day, 0, 0, 0);
    endTime = new Date(year, month-1, day, 23, 59, 59);

    const filterEvents = events.filter(event =>{
        return event.date >= startTime && event.date <= endTime;
    })

    filterEvents.forEach(event =>{
        console.log(event);
    })
}

// findEvents('20-12-2023');


function getRemainingTimeString(days) {
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 365 % 30;
  
    let result = '';
    if (years > 0) result += `${years} year${years > 1 ? 's' : ''}, `;
    if (months > 0) result += `${months} month${months > 1 ? 's' : ''}, `;
    if (remainingDays > 0) result += `${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
  
    return result.trim().replace(/,\s*$/, ''); // Remove trailing comma if any
  }
  
function getEvents(inputTime) {
    const [day, month, year] = inputTime.split("-");
    const convertTime = new Date(year, month - 1, day, 23, 59, 59);
    const nowTime = new Date(2023, 10, 28); // Assuming this is the current date

    if (convertTime > nowTime) {
        const filterEvents = events.filter(event => {
        return event.date >= nowTime && event.date <= convertTime;
        });

        const result = filterEvents.map(event => {
        const diffTime = Math.ceil((event.date - nowTime) / (1000 * 60 * 60 * 24)); // Difference in days
        return {
            id: event.id,
            name: event.name,
            date: event.date.toISOString().split('T')[0], // Format as YYYY-MM-DD
            remainingTime: getRemainingTimeString(diffTime),
        };
        });
        return result;
    } else {
        const filterEvents = events.filter(event => {
            return event.date <= nowTime && event.date >= convertTime;
            });
    
            const result = filterEvents.map(event => {
            const diffTime = Math.ceil((event.date - nowTime) / (1000 * 60 * 60 * 24)); // Difference in days
            return {
                id: event.id,
                name: event.name,
                date: event.date.toISOString().split('T')[0], // Format as YYYY-MM-DD
                remainingTime: getRemainingTimeString(diffTime),
            };
            });
            return result;
    }
}
  
getEvents('30-11-2023').forEach(event =>{
    console.log(event)
})