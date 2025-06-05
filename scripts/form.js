// Product array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Function to populate product options on form.html
function populateProductOptions() {
  const select = document.getElementById("productName");
  if (!select) return;

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;  // id as value
    option.textContent = product.name;  // display name
    select.appendChild(option);
  });
}

// Function to update review count on review.html
function updateReviewCount() {
  const countSpan = document.getElementById("reviewCount");
  if (!countSpan) return;

  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("reviewCount", count);

  countSpan.textContent = count;
}

// On DOM ready
document.addEventListener("DOMContentLoaded", () => {
  populateProductOptions();
  updateReviewCount();
});
