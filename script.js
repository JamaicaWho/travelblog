// Filter destinations
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    // remove active from all buttons
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    document.querySelectorAll(".dest-card").forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// Filter Buttons (already from before)
document.querySelectorAll('.chip').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    document.querySelectorAll('.chip').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.dest-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Modal for destination images
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <img id="modal-img" src="" alt="">
    <div class="modal-text">
      <h2 id="modal-title"></h2>
      <p id="modal-desc"></p>
    </div>
  </div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = modal.querySelector('.modal-close');

// Add event listener to all destination cards
document.querySelectorAll('.dest-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

modalTitle.style.color = "black";   // title color
modalDesc.style.color = "black";   // description color

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // prevent scroll
  });
});

// Close modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
// Select the container
const container = document.querySelector('.container.section');

// Add click event
container.addEventListener('click', () => {
  container.style.backgroundColor = "black";   // change bg to black
  container.style.color = "white";             // optional: text visible
});


