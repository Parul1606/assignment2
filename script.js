let count = 0;

const countElement = document.getElementById("count");
const errorElement = document.getElementById("error");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const clearBtn = document.getElementById("clear");

function updateUI() {
  countElement.textContent = count;

  // Show error only if count == 0
  if (count === 0) {
    errorElement.style.display = "block";
  } else {
    errorElement.style.display = "none";
  }

  // Show Clear button only if count > 1
  if (count > 1) {
    clearBtn.style.display = "inline-block";
  } else {
    clearBtn.style.display = "none";
  }
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateUI();
});
 
// Decrement
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateUI();
});

// Clear
clearBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});

// Initialize UI on load
updateUI();
