async function petFormHandler(event) {
  event.preventDefault();

  const pet_name = document.querySelector('#pet_name').value
  const pet_age = document.querySelector('#pet_age').value
  const genderButtons = document.querySelectorAll('input[name="pet_sex"]')
  const typeButtons = document.querySelectorAll('input[name="pet_type"]')

  let pet_sex;
  for (const radioButton of genderButtons) {
    if (radioButton.checked) {
      pet_sex = radioButton.value;
      break;
    }
  }

  let pet_type;
  for (const radioButton of typeButtons) {
    if (radioButton.checked) {
      pet_type = radioButton.value;
      break;
    }
  }

  if (pet_name && pet_age && pet_sex && pet_type) {
    const response = await fetch('/api/pets', {
      method: 'post',
      body: JSON.stringify({
        pet_name,
        pet_age,
        pet_sex,
        pet_type
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
      console.log(response)
      document.location.replace('/pets')
    } else {
      alert(response.statusText)
    }
  }
}

document.querySelector('.new-pet-form').addEventListener('submit', petFormHandler)