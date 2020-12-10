const usersSelect = $_(".users-select");
const userResultAbout = $_(".users-result-about")

const elUserTamplate = $_("#usersOption").content;

const elUsersRolad = $_("#userAboutReolad").content;



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

    $_('.user-id', usersRolad).textContent = user.getUserId;
    $_('.user-data', usersRolad).textContent = user.visitDay;
    $_('.user-visit', usersRolad).textContent = user.visit ? 'OK' : '-';
    $_('.user-score', usersRolad).textContent = user.score;

    if (!user.visit) {
      $_('.user-about', usersRolad).classList.add('error-color');
    }
    else {
      $_('.user-about', usersRolad).classList.add('bg-success');
    }

    userResultAbout.appendChild(usersRolad);
  };
}

renderUsersOption(users);
renderUsersAbout();

usersSelect.addEventListener("change", renderUsersAbout)
