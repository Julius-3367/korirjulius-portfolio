// Skills data
const skills = [
  "RESTful APIs",
  "Node.js",
  "Flask",
  "Django",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "DevOps",
  "TypeScript",
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Data Science",
  "Odoo",
  "WordPress",
]

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden")
  }
}

// Populate skills grid
function populateSkills() {
  const skillsGrid = document.getElementById("skills-grid")
  if (!skillsGrid) return

  skills.forEach((skill) => {
    const skillCard = document.createElement("div")
    skillCard.className = "bg-white rounded-lg shadow-md card-hover cursor-pointer skill-card p-4 text-center"
    skillCard.innerHTML = `
      <div class="skill-text font-semibold text-gray-700 transition-all duration-300">
        ${skill}
      </div>
    `
    skillsGrid.appendChild(skillCard)
  })
}

// Handle contact form submission
function handleContactForm() {
  const form = document.getElementById("contact-form")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    console.log("Form submitted:", data)
    alert("Thank you for your message! I'll get back to you soon.")
    form.reset()
  })
}

// Add scroll effect to navbar
function handleNavbarScroll() {
  const header = document.querySelector("header")
  if (!header) return

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("shadow-lg")
    } else {
      header.classList.remove("shadow-lg")
    }
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Setup mobile menu
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", toggleMobileMenu)
    }

    // Populate skills
    populateSkills()

    // Setup contact form
    handleContactForm()

    // Setup navbar scroll effect
    handleNavbarScroll()

    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll("#mobile-menu button")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const mobileMenu = document.getElementById("mobile-menu")
        if (mobileMenu) {
          mobileMenu.classList.add("hidden")
        }
      })
    })

    setTimeout(() => {
      const skillCards = document.querySelectorAll(".skill-card")
      skillCards.forEach((card, index) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"
        card.style.transition = "all 0.5s ease"

        setTimeout(
          () => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          },
          index * 50 + 100,
        )
      })
    }, 500)
  } catch (error) {
    console.error("Error initializing portfolio:", error)
  }
})

