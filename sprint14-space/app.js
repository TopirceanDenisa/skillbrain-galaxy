let data;

const navButtons = document.querySelectorAll('.nav-btn');
const content = document.getElementById('content');

async function loadData() {
  const response = await fetch('./data.json');
  data = await response.json();
  loadHome();
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.nav-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    const page = btn.dataset.page;

    if (page === 'home') loadHome();
    if (page === 'destinations') loadDestinations();
    if (page === 'crew') loadCrew();
    if (page === 'technology') loadTechnology();
  });
});

function loadHome() {
  content.innerHTML = `
    <section class="home">
      <div class="home-text">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>Let’s face it, if you want to go to space, you might as well go to outer 
        space and not hover kind of on the edge of it. Sit back and relax — we’ll 
        give you a truly out-of-this-world experience!</p>
      </div>

      <button class="explore">EXPLORE</button>
    </section>
  `;
}

function loadDestinations(selected = 0) {
  const planet = data.destinations[selected];

  content.innerHTML = `
    <section class="destination">
    
      <img src="${planet.images.png}" alt="${planet.name}" />

      <div class="destination-info">

        <div class="planet-selector">
          ${data.destinations
            .map(
              (p, i) => `
            <button 
              class="${i === selected ? 'active' : ''}" 
              onclick="loadDestinations(${i})">
              ${p.name}
            </button>
          `
            )
            .join('')}
        </div>

        <h1>${planet.name}</h1>
        <p>${planet.description}</p>

        <div class="destination-meta">
          <div>
            <p>AVG. DISTANCE</p>
            <h3>${planet.distance}</h3>
          </div>

          <div>
            <p>EST. TRAVEL TIME</p>
            <h3>${planet.travel}</h3>
          </div>
        </div>
      </div>
    </section>
  `;
}

function loadCrew() {
  content.innerHTML = `<h1 style="text-align:center;">Crew în curs... 🙂</h1>`;
}

function loadTechnology() {
  content.innerHTML = `<h1 style="text-align:center;">Technology în curs... 🚀</h1>`;
}

loadData();
