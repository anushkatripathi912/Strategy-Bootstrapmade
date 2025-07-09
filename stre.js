
// get in touch form




  function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required.");
      return false; // Prevent form submission
    }

    return true; // Allow form to submit
  }






//Testimonials



const testimonials = [
  {
    title: "Labore nostrum eos impedit",
    message: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor.
    
    Itaque et explicabo vero occaecati est quam rerum sed. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga.`,
    name: "Matt Brandon",
    role: "Freelancer",
    image: "imagessss/img/person/person-m-7.webp"
  },
  {
    title: "Impedit dolor facilis nulla",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.
    
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
    name: "Jena Karlis",
    role: "Product Manager",
    image: "imagessss/img/person/person-f-10.webp"
  },

   {
    title: "Sint occaecati cupiditate",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.
    Itaque et explicabo vero occaecati est quam rerum sed. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga.
    `,
    name: "Sara Thompson",
    role: "Product Manager",
    image: "imagessss/img/person/person-m-9.webp"
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








// Portfolio


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







//FAQ



document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});









// reviews



  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const cardsContainer = document.getElementById("testimonialCards");

  const scrollAmount = 350; // Adjust based on your card width

  leftBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  rightBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });







