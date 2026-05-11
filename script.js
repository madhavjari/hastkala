const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");
const form = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open menu");
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    products.forEach((product) => {
      const shouldShow = category === "all" || product.dataset.category === category;
      product.classList.toggle("hide", !shouldShow);
    });
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const contact = formData.get("contact");
  const message = formData.get("message");
  const whatsappNumber = "918141422171";
  const whatsappMessage = `Hello Hastkala, I want to enquire about saree latkans.

Name: ${name}
Phone/Email: ${contact}
Requirement: ${message}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  formNote.textContent = "Opening WhatsApp with your enquiry message.";
  form.reset();
});
