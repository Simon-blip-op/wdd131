const form = document.querySelector("#storyForm");
const storiesContainer = document.querySelector("#storiesContainer");

// Load stories from localStorage
let stories = JSON.parse(localStorage.getItem("stories")) || [];


function displayStories() {

    if (!storiesContainer) return;

    storiesContainer.innerHTML = "";

    if (stories.length === 0) {
        storiesContainer.innerHTML = "<p>No stories have been added yet.</p>";
        return;
    }

    stories.forEach(story => {

        storiesContainer.innerHTML += `
            <div class="story-card">
                <h3>${story.name}</h3>
                <p>${story.text}</p>

                <button onclick="deleteStory(${story.id})">
                    Delete
                </button>
            </div>
        `;
    });
}


function saveStory(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const text = document.querySelector("#story").value;

    const story = {
        id: Date.now(),
        name: name,
        text: text
    };

    stories.push(story);

    localStorage.setItem("stories", JSON.stringify(stories));

    form.reset();

    displayStories();
}


function deleteStory(id) {

    stories = stories.filter(story => story.id !== id);

    localStorage.setItem("stories", JSON.stringify(stories));

    displayStories();
}



if (form) {
    form.addEventListener("submit", saveStory);
}



displayStories();


const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}