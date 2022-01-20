async function newPetHandler(event) {
  event.preventDefault();

  const pet_name = document.querySelector('#pet-name').value;
  const pet_age = document.querySelector('#pet-age').value;
  const pet_sex = document.querySelector('#pet-sex').value;
  const pet_type = document.querySelector('#pet_type').value;

  const response = await fetch(`/api/pets`, {
    method: 'POST',
    body: JSON.stringify({
      pet_name,
      pet_age,
      pet_sex,
      pet_type
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.new-pet-form').addEventListener('submit', newPetHandler);
