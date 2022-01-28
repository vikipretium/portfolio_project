const projects = [{
  id: 'project-1',
  name: 'Tonic',
  featured_image: 'assets/images/project1.svg',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Ruby', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-2',
  name: 'Multi-Post Stories',
  featured_image: 'assets/images/project2.svg',
  technologies: ['HTML', 'CSS', 'javascript'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-3',
  name: 'Facebook 360',
  featured_image: 'assets/images/project3.svg',
  technologies: [
    'HTML',
    'CSS',
    'javascript',
    'Github',
    'Ruby',
    'Bootsrap',
    'Node.js',
  ],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-4',
  name: 'Uber Navigation',
  featured_image: 'assets/images/project4.svg',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
];

const projectButtons = [];
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-button');
const techList = document.getElementById('tech-list');
const modal = document.getElementById('popup-modal');
const openButton = document.querySelector('.bt');
const links = document.querySelectorAll('.mobile-menu li > a');
const modalCloseBtn = document.querySelector('span.close');
const buttons = document.querySelectorAll('button');
const modalTitle = document.querySelector('#modal-project-name');
const modalImage = document.querySelector('img.modal-image');

buttons.forEach((button) => {
  const {
    id,
  } = button;
  const idName = id.split('-')[0]; // project-1
  if (idName === 'project') projectButtons.push(button);
});
const openModal = (id) => {
  modal.style.display = 'block';
  const project = projects.find((project) => project.id === id);
  modalTitle.textContent = project.name;
  modalImage.src = project.featured_image;
  let li = '';
  project.technologies.forEach((tech) => {
    li += `<li class="tags">${tech}</li>`;
  });
  techList.innerHTML = li;
};
projectButtons.forEach((button) => {
  const {
    id,
  } = button;
  button.addEventListener('click', () => openModal(id));
});

function openOverlay() {
  mobileMenu.style.display = 'block';
}

function closeOverlay() {
  mobileMenu.style.display = 'none';
}
openButton.addEventListener('click', openOverlay);
closeButton.addEventListener('click', closeOverlay);
links.forEach((node) => node.addEventListener('click', closeOverlay));
modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// form validation

const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('mail');
const fbMsg = document.getElementById('msg');

// valid and error

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[a-z0-9._%+-]{3,}@[a-z0-9]{3,}(?:\.[a-z]{2,}){1,3}$/.test(email);
}

// input check

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const fbMsgValue = fbMsg.value.trim();
  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    return false;
  }
  // add success class
  setSuccessFor(username);

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be Blank');
    return false;
  }
  if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email invalid');
    return false;
  }
  setSuccessFor(email);
  if (fbMsgValue === '') {
    setErrorFor(fbMsg, 'Message cannot be Blank');
    return false;
  }
  setSuccessFor(fbMsg);
  return true;
}

[username, email].forEach((Element) => Element.addEventListener('keyup', (event) => {
  event.preventDefault();
  checkInputs();
}));

// event listner

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkInputs()) {
    form.submit();
  }
});