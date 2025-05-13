// Array of objects representing each "about card"
const aboutCards = [
  {
    name: "Nerena Morris",
    degree: "B.Sc, Dip. Herb., Dip. Nat.",
    imgSrc: "./assets/images/about/image1.png",
    desc: "Nerena completed a Bachelor of Science prior to qualifying as a Naturopath and Medical Herbalist almost three decades ago. Over her career she has worked in private practice, as well as held key sales and technical roles with nutraceutical and herbal companies, including six years with Phytomed. She enjoys working with practitioners to assist them in case takes utilising different natural medicine modalities including nutritional supplementation, herbal medicine and homeopathy. Nerena has a passion for natural medicine and enjoys getting her hands dirty in the garden growing medicinal plants fruits and vegetables",
    altText: "person 1",
  },
  {
    name: "Louise Garland",
    degree: "BHSc (Comp Med), Dip Nat, Dip Herb Med, Dip Env Tech",
    imgSrc: "./assets/images/about/image2.jpg",
    desc: "Nerena completed a Bachelor of Science prior to qualifying as a Naturopath and Medical Herbalist almost three decades ago. Over her career she has worked in private practice, as well as held key sales and technical roles with nutraceutical and herbal companies, including six years with Phytomed. She enjoys working with practitioners to assist them in case takes utilising different natural medicine modalities including nutritional supplementation, herbal medicine and homeopathy. Nerena has a passion for natural medicine and enjoys getting her hands dirty in the garden growing medicinal plants fruits and vegetables",
    altText: "person 2",
  },
  {
    name: "Stephanie Watson",
    degree: "BCom, Dip Nat, Dip Herb Med",
    imgSrc: "./assets/images/about/image3.jpg",
    desc: "Nerena completed a Bachelor of Science prior to qualifying as a Naturopath and Medical Herbalist almost three decades ago. Over her career she has worked in private practice, as well as held key sales and technical roles with nutraceutical and herbal companies, including six years with Phytomed. She enjoys working with practitioners to assist them in case takes utilising different natural medicine modalities including nutritional supplementation, herbal medicine and homeopathy. Nerena has a passion for natural medicine and enjoys getting her hands dirty in the garden growing medicinal plants fruits and vegetables",
    altText: "person 3",
  },
  {
    name: "Nerena Morris",
    degree: "B.Sc, Dip. Herb., Dip. Nat.",
    imgSrc: "./assets/images/about/image1.png",
    desc: "Nerena completed a Bachelor of Science prior to qualifying as a Naturopath and Medical Herbalist almost three decades ago. Over her career she has worked in private practice, as well as held key sales and technical roles with nutraceutical and herbal companies, including six years with Phytomed. She enjoys working with practitioners to assist them in case takes utilising different natural medicine modalities including nutritional supplementation, herbal medicine and homeopathy. Nerena has a passion for natural medicine and enjoys getting her hands dirty in the garden growing medicinal plants fruits and vegetables",
    altText: "person 1",
  },
  {
    name: "Louise Garland",
    degree: "BHSc (Comp Med), Dip Nat, Dip Herb Med, Dip Env Tech",
    imgSrc: "./assets/images/about/image2.jpg",
    desc: "Nerena completed a Bachelor of Science prior to qualifying as a Naturopath and Medical Herbalist almost three decades ago. Over her career she has worked in private practice, as well as held key sales and technical roles with nutraceutical and herbal companies, including six years with Phytomed. She enjoys working with practitioners to assist them in case takes utilising different natural medicine modalities including nutritional supplementation, herbal medicine and homeopathy. Nerena has a passion for natural medicine and enjoys getting her hands dirty in the garden growing medicinal plants fruits and vegetables",
    altText: "person 2",
  },
  {
    name: "Stephanie Watson",
    degree: "BCom, Dip Nat, Dip Herb Med",
    imgSrc: "./assets/images/about/image3.jpg",
    desc: "Nerena completed a Bachelor of Science prior to qualifying as a Naturopath and Medical Herbalist almost three decades ago. Over her career she has worked in private practice, as well as held key sales and technical roles with nutraceutical and herbal companies, including six years with Phytomed. She enjoys working with practitioners to assist them in case takes utilising different natural medicine modalities including nutritional supplementation, herbal medicine and homeopathy. Nerena has a passion for natural medicine and enjoys getting her hands dirty in the garden growing medicinal plants fruits and vegetables",
    altText: "person 3",
  },
];

// Select the container element
const container = document.getElementById("about-card-container");

// Loop through the array and create the cards dynamically
aboutCards.forEach((card, index) => {
  const cardElement = document.createElement("div");
  cardElement.className = "about-card";
  cardElement.setAttribute("type", "button");
  cardElement.setAttribute("data-bs-toggle", "modal");
  cardElement.setAttribute("data-bs-target", "#exampleModal");

  // Add card content
  cardElement.innerHTML = `
      <img
        src="${card.imgSrc}"
        class="rounded-24"
        alt="${card.altText}"
      />
      <p class="heading-3 about-name mt-3 m-0">${card.name}</p>
      <p class="content-text m-0">${card.degree}</p>
    `;

  // Add click event to open modal with the corresponding card details
  cardElement.addEventListener("click", () => {
    document.getElementById("modal-img").src = card.imgSrc;
    document.getElementById("modal-name").textContent = card.name;
    document.getElementById("modal-degree").textContent = card.degree;
    document.getElementById("modal-desc").textContent = card?.desc;
  });

  // Append the card to the container
  container.appendChild(cardElement);
});
function setModalImage() {
  const modalImage = document.getElementById("modal-img");
  const contentSection = document.getElementById("content-section");
  const modalBody = document.getElementById("modal-body");
  if (window.innerWidth < 768) {
    contentSection.prepend(modalImage);
    modalBody.removeChild(modalImage);
  } else {
    modalBody.prepend(modalImage);
    contentSection.removeChild(modalImage);
  }
}
window.addEventListener("resize", setModalImage);
setModalImage();
