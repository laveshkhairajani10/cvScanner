const data = [{
        name: "lavesh",
        age: 20,
        city: "jaipur",
        image: "https://randomuser.me/api/portraits/med/men/7.jpg"
    },
    {
        name: "randi babu",
        age: 20,
        city: "jaipur",
        image: "https://randomuser.me/api/portraits/med/men/73.jpg"
    },
    {

        name: "ram",
        age: 20,
        city: "jaipur",
        image: "https://randomuser.me/api/portraits/med/men/72.jpg"
    },
    {
        name: "karan",
        age: 20,
        city: "jaipur",
        image: "https://randomuser.me/api/portraits/med/men/71.jpg"
    },
    {
        name: "okaa",
        age: 20,
        city: "jaipur",
        image: "https://randomuser.me/api/portraits/med/men/76.jpg"
    }
]
let btn = document.getElementById('next');

btn.addEventListener('click', nextCV)

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}
const candidates = cvIterator(data);

console.log(candidates.next().value);



function nextCV() {
    const currentCandidate = candidate.next().value
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
      </ul>`;
    } else {
        alert('End of candidate applications');
        window.location.reload();
    }
}
const candidate = cvIterator(data);