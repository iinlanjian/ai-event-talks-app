document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('scheduleContainer');
    const searchInput = document.getElementById('searchInput');
    let allTalks = [];

    // Fetch talk data from the API
    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            allTalks = data;
            renderSchedule(allTalks);
        })
        .catch(error => {
            console.error('Error fetching talks:', error);
            scheduleContainer.innerHTML = '<p>无法加载日程，请稍后再试。</p>';
        });

    // Render the schedule
    function renderSchedule(talks) {
        scheduleContainer.innerHTML = ''; // Clear existing content

        if (talks.length === 0) {
            scheduleContainer.innerHTML = '<p>没有找到符合条件的讲座。</p>';
            return;
        }

        talks.forEach(talk => {
            const card = document.createElement('div');
            const time = `${talk.startTime} - ${talk.endTime}`;

            if (talk.type === 'break') {
                card.className = 'break-card';
                card.innerHTML = `
                    <div class="time-info">${time}</div>
                    <div class="talk-details">
                        <h2>${talk.title}</h2>
                    </div>
                `;
            } else {
                card.className = 'talk-card';
                card.innerHTML = `
                    <div class="time-info">${time}</div>
                    <div class="talk-details">
                        <h2>${talk.title}</h2>
                        <p class="speakers">主讲人：${talk.speakers.join(', ')}</p>
                        <p class="description">${talk.description}</p>
                        <div class="categories">
                            ${talk.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            scheduleContainer.appendChild(card);
        });
    }

    // Filter talks based on search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTalks = allTalks.filter(talk => {
            if (talk.type === 'break') {
                return true; // Always show breaks
            }
            const searchTermLower = e.target.value.toLowerCase();
            const matchesCategory = talk.categories.some(cat => cat.toLowerCase().includes(searchTermLower));
            const matchesSpeaker = talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTermLower));
            return matchesCategory || matchesSpeaker;
        });
        renderSchedule(filteredTalks);
    });
});
