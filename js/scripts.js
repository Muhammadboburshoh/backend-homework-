const usersSelect = document.querySelector(".users-select");
const userResultAbout = $_(".users-result-about")

const elUserTamplate = document.querySelector("#usersOption").content;

const elUsersRolad = document.querySelector("#userAboutReolad").content;

// console.log(elUsersRolad);

const renderUsersOption = function (users) {
  const usersOptionsFregment = document.createDocumentFragment();

  users.forEach((user) =>{
    const userTamplate = elUserTamplate.cloneNode(true);
  
    $_(".user-option", userTamplate).textContent = user.username;
    $_(".user-option", userTamplate).value = user.id;

    usersOptionsFregment.appendChild(userTamplate)
  })

  usersSelect.appendChild(usersOptionsFregment)
}


const renderUsersAbout = function (evt) {
  userResultAbout.innerHTML = "";


   if (evt && evt.type === 'change') {
    userId = Number(usersSelect.value);
  } else {
    userId = 1;
  }

  const filtered = data.filter(object => object.getUserId === userId);

  for (const user of filtered) {
    const usersRolad = elUsersRolad.cloneNode(true);

    usersRolad.querySelector('.user-id').textContent = user.getUserId;
    usersRolad.querySelector('.user-data').textContent = user.visitDay;
    usersRolad.querySelector('.user-visit').textContent = user.visit ? 'OK' : '-';
    usersRolad.querySelector('.user-score').textContent = user.score;

    if (!user.visit) {
      usersRolad.querySelector('.user-about').classList.add('bg-warning');
    }
    else {
      usersRolad.querySelector('.user-about').classList.add('bg-success');
    }

    userResultAbout.appendChild(usersRolad);
  };
}

renderUsersOption(users);
renderUsersAbout();

usersSelect.addEventListener("change", renderUsersAbout)


//----------------


/* const renderResults = function (evt) {
  resultsWrapper.innerHTML = '';

  let userId = null;

  if (evt && evt.type === 'change') {
    userId = Number(nameSelect.value);
  } else {
    userId = 1;
  }

  const filtered = data.filter(object => object.getUserId === userId);

  for (const user of filtered) {
    const newResult = newLiTemplate.cloneNode(true);

    newResult.querySelector('.js-date').textContent = user.visitDay;
    newResult.querySelector('.js-visit').textContent = user.visit ? 'OK' : '-';
    newResult.querySelector('.js-score').textContent = user.score;

    if (user.visit) {
      newResult.querySelector('.js-result-item').classList.add('bg-success');
    } 

    if (!user.visit) {
      newResult.querySelector('.js-result-item').classList.add('bg-danger');
    }
    resultsWrapper.appendChild(newResult);
  };
};


createOptions(users);

renderResults();
nameSelect.addEventListener('change', renderResults);
*/