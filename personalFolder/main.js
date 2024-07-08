import activities from "./activities.mjs";   

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function getRandomList(list) {
    const listLength = list.length;
    const randomNum = randomNumber(listLength);
    return list[randomNum];
}

function activityTemplate(activity) {
	return `<section class="activity">
				<ul>${activity.name}
					<li>Difficulty: ${activity.difficulty}</li>
					<li>Activity: ${activity.type}</li>
					<li>Distance: ${activity.distance}</li>
					<li>Location: ${activity.location}</li>
					<li>Other Info: ${activity.otherInfo}</li>
					<li>Source: ${activity.source}</li>
				</ul>
			</section>
        `;
}

function renderActivities(activityList) {
    const activityContent = document.querySelector('.activity-section');
    activityContent.innerHTML = '';

    activityList.forEach(activity => {
      activityContent.innerHTML += activityTemplate(activity);
    });
}

function init() {
    const activity = getRandomList(activities)

    renderActivities([activity]);

    const search = document.getElementById('search');
    search.addEventListener('submit', searchHandler);
}

init();

function filter(query) {
    const filter = activities.filter(activity => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            activity.name.toLowerCase().includes(lowerCaseQuery) ||
            activity.description.toLowerCase().includes(lowerCaseQuery) ||
            (activity.difficulty && activity.difficulty.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
        );
    });

    const sorted = filter.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault(); 
    const search = document.getElementById('search').value.toLowerCase();
    const filteredActivity = filter(search);
    renderActivities(filteredActivity);
}