// Lion Creation
document.getElementById('lionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const furColor = document.getElementById('furColor').value;
  const strength = parseInt(document.getElementById('strength').value);
  const agility = parseInt(document.getElementById('agility').value);
  const intelligence = parseInt(document.getElementById('intelligence').value);
  const charisma = parseInt(document.getElementById('charisma').value);

  const totalPoints = strength + agility + intelligence + charisma;
  if (totalPoints !== 30) {
    alert('Please distribute exactly 30 points.');
    return;
  }

  const lion = {
    name,
    gender,
    furColor,
    strength,
    agility,
    intelligence,
    charisma
  };

  localStorage.setItem('lion', JSON.stringify(lion));
  window.location.href = 'pride.html';
});

// Pride Page
function loadPride() {
  const lion = JSON.parse(localStorage.getItem('lion'));
  if (!lion) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('prideTitle').textContent = `${lion.name}'s Pride`;
  document.getElementById('lionList').innerHTML = `
    <li>${lion.name} (${lion.gender}) - Strength: ${lion.strength}, Agility: ${lion.agility}, Intelligence: ${lion.intelligence}, Charisma: ${lion.charisma}</li>
  `;
}

function changePrideName() {
  const newName = prompt('Enter new pride name:');
  if (newName) {
    document.getElementById('prideTitle').textContent = `${newName}'s Pride`;
  }
}

// Exploration Page
function explore() {
  const result = Math.random() > 0.5 ? 'You found a new territory!' : 'Nothing interesting found.';
  document.getElementById('explorationResult').textContent = result;
}

// Hunting Page
function hunt() {
  const result = Math.random() > 0.5 ? 'You caught a gazelle!' : 'The hunt was unsuccessful.';
  document.getElementById('huntingResult').textContent = result;
}

// Load Pride on Page Load
if (window.location.pathname.endsWith('pride.html')) {
  loadPride();
}
