// Optional: Responsive toggle for menu
// const menuBtn = document.querySelector('.nav__toggle');
// const navMenu = document.querySelector('.nav__menu');

// if (menuBtn && navMenu) {
//   menuBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
//   });
// }



// document.querySelector('.hero__cta').addEventListener('click', () => {
//   alert('Navigating to services...');
// });



const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});



// Vanilla JS – Add interactivity if needed later.
// Placeholder for future animations or event listeners.
console.log("About section loaded");




// REVIEWS





// const testimonials = [
//   {
//     stars: 4.5,
//     text: "Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.",
//     name: "Olivia Chen",
//     role: "Development Strategist",
//     image: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     stars: 5,
//     text: "Their strategic vision and unwavering commitment to results provided exceptional value. Our operational efficiency has significantly improved.",
//     name: "Eleanor Vance",
//     role: "Operations Manager",
//     image: "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     stars: 4,
//     text: "Working with this team was a game-changer. Their expertise helped us break into new markets with confidence.",
//     name: "Michael Trent",
//     role: "Product Owner",
//     image: "https://randomuser.me/api/portraits/men/51.jpg"
//   }
// ];

// let currentIndex = 0;
// const wrapper = document.getElementById("testimonialWrapper");

// function renderTestimonials() {
//   wrapper.innerHTML = '';
//   const visible = [testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]];

//   visible.forEach((t) => {
//     const div = document.createElement('div');
//     div.className = 'testimonial';
//     div.innerHTML = `
//       <div class="stars">${'★'.repeat(Math.floor(t.stars))}${t.stars % 1 ? '½' : ''}</div>
//       <p>"${t.text}"</p>
//       <div class="user">
//         <img src="${t.image}" alt="${t.name}" />
//         <div class="info">
//           <strong>${t.name}</strong><br />
//           <small>${t.role}</small>
//         </div>
//       </div>
//     `;
//     wrapper.appendChild(div);
//   });
// }

// document.getElementById("prevBtn").addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//   renderTestimonials();
// });

// document.getElementById("nextBtn").addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % testimonials.length;
//   renderTestimonials();
// });

// renderTestimonials();





// part4



const services = [
  {
    icon:' <i class="fa-solid fa-palette"></i>',
    title: "Creative branding",
    description: "Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Poin consectetur feugiat diam."
  },
  {
    icon: '<i class="fa-regular fa-gem"></i>',
    title: "Design systems",
    description: "Praesent euismod varius tellus. Donec vehicula diam vel metus convalis. Aliquam erat volutpat."
  },
  {
    icon: '<i class="fa-solid fa-bullhorn"></i>',
    title: "Marketing strategies",
    description: "Fusce tincidunt ligula ut purus consequat, ac pellentesque nulla eleifend."
  },
  {
    icon: '<i class="fa-solid fa-terminal"></i>',
    title: "Digital platforms",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et accumsan cursus."
  },
  {
    icon: '<i class="fa-solid fa-chart-simple"></i>',
    title: "Growth acceleration",
    description: "Aenean vel augue vel nisl bibendum posuere. Praesent laoreet lorem."
  },
  {
    icon:'<i class="fa-solid fa-video"></i>' ,
    title: "Media solutions",
    description: "Maecenas elementum est quis facilisis. Vestibulum accumsan magna."
  }
];

// const container = document.getElementById("servicesContainer");

// services.forEach(service => {
//   const card = document.createElement("div");
//   card.className = "service-card";
//   card.innerHTML = `
//     <div class="icon">${service.icon}</div>
//     <h4>${service.title}</h4>
//     <p>${service.description}</p>
//   `;
//   container.appendChild(card);
// });






const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});


















/////////////////////////







document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("servicesContainer");

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="icon">${service.icon}</div>
      <h4>${service.title}</h4>
      <p>${service.description}</p>
    `;
    container.appendChild(card);
  });
});




















// part5


const steps = [
  {
    number: "STEP 01",
    title: "Initial Consultation",
    description:
      "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
    icon: "fa-lightbulb", // Font Awesome
    align: "left",
  },
  {
    number: "STEP 02",
    title: "Planning & Strategy",
    description:
      "Developing comprehensive strategies and detailed project plans based on the initial consultation. We create actionable roadmaps with clear milestones and deliverables.",
    icon: "fa-gear",
    align: "right",
  },
  {
    number: "STEP 03",
    title: "Development Phase",
    description:
      "Executing the planned strategies with precision and agility. Our team implements solutions while maintaining constant communication and progress updates.",
    icon: "fa-chart-bar",
    align: "left",
  },
  {
    number: "STEP 04",
    title: "Launch & Support",
    description:
      "Ensuring smooth deployment and providing ongoing support for implemented solutions. We monitor performance and make necessary adjustments for optimal results.",
    icon: "fa-check-circle",
    align: "right",
  },
];

const container = document.getElementById("stepsContainer");

steps.forEach((step) => {
  const stepEl = document.createElement("div");
  stepEl.className = `step-box ${step.align}`;

  stepEl.innerHTML = `
    <div class="icon-circle">
      <i class="fas ${step.icon}"></i>
    </div>
    <div class="step-content">
      <h4 class="step-number">${step.number}</h4>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-description">${step.description}</p>
    </div>
  `;

  container.appendChild(stepEl);
});






// TESTIMONIALS




const testimonials = [
  {
    title: "Labore nostrum eos impedit",
    message: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor.
    
    Itaque et explicabo vero occaecati est quam rerum sed. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga.`,
    name: "Matt Brandon",
    role: "Freelancer",
    image: "images/user1.jpg"
  },
  {
    title: "Sint occaecati cupiditate",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.
    
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
    name: "Sara Thompson",
    role: "Product Manager",
    image: "images/user2.jpg"
  }
];

let current = 0;

const titleEl = document.getElementById("testimonialTitle");
const messageEl = document.getElementById("testimonialMessage");
const nameEl = document.getElementById("testimonialName");
const roleEl = document.getElementById("testimonialRole");
const imageEl = document.getElementById("testimonialImage");

function updateTestimonial(index) {
  const t = testimonials[index];
  titleEl.textContent = t.title;
  messageEl.innerHTML = t.message.replace(/\n/g, "<br>");
  nameEl.textContent = t.name;
  roleEl.textContent = t.role;
  imageEl.src = t.image;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  updateTestimonial(current);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(current);
});

// Initial load
updateTestimonial(current);













// other part




// Optional interaction logic
document.querySelectorAll('.social-icons i').forEach(icon => {
  icon.addEventListener('click', (e) => {
    const platform = e.target.className.split('fa-')[1];
    alert(`You clicked on ${platform}`);
    // You could redirect:
    // window.open(`https://facebook.com/username`, '_blank');
  });
});







// portfolio








const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove "active" class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});










// CHECK OUR TEAM





const team = [
  {
    name: "Walter White",
    role: "Chief Executive Officer",
    bio: "Aliquam iure quaerat voluptatem praesentium possimus...",
    img: "images/user1.jpg"
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    bio: "Labore ipsum sit consequatur exercitationem rerum...",
    img: "images/user2.jpg"
  },
  // Add more...
];

const teamGrid = document.querySelector(".team-grid");

team.forEach(member => {
  const card = document.createElement("div");
  card.className = "team-card";
  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}" class="team-img">
    <div class="team-content">
      <h3>${member.name}</h3>
      <p class="role">${member.role}</p>
      <p class="bio">${member.bio}</p>
      <div class="social-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-envelope"></i></a>
      </div>
    </div>
  `;
  teamGrid.appendChild(card);
});







// FAQ



const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Collapse all other items
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle this one
    item.classList.toggle("active");
  });
});



// CONNECT





// GET IN TOUCH






// FOOTER






//Dropdown


// document.querySelectorAll('.nav__item > a').forEach(link => {
//   link.addEventListener('click', e => {
//     const dropdown = link.nextElementSibling;
//     if (dropdown && dropdown.classList.contains('dropdown-menu')) {
//       e.preventDefault();
//       dropdown.classList.toggle('show');
//     }
//   });
// });

