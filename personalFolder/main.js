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
				<ul><strong>${activity.name}</strong>
					<li> <strong>Difficulty:</strong> ${activity.difficulty}</li>
					<li><strong>Activity:</strong> ${activity.type}</li>
					<li><strong>Distance:</strong> ${activity.distance}</li>
					<li><strong>Location:</strong> ${activity.location}</li>
					<li><strong>Other Info:</strong> ${activity.otherInfo}</li>
					<li><strong>Source:</strong> ${activity.source}</li>
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

function filter(query) {
    const filter = activities.filter(activity => {
        const lowerCaseQuery = query.toLowerCase();

        if (lowerCaseQuery == "")
        {
            alert("Please enter a difficulty level");
        }
        else {
            return (
                activity.name.toLowerCase().includes(lowerCaseQuery) ||
                activity.description.toLowerCase().includes(lowerCaseQuery) ||
                (activity.difficulty && activity.difficulty.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
            );
        }


        
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

init();