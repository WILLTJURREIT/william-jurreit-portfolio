import { db } from "./firebase.js";

import {
  doc,
  runTransaction
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

function animateCounter(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 80);

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent = current.toLocaleString();
  }, 12);
}

async function updateVisitorCounter() {
  const counter = document.getElementById("visitorCount");

  if (!counter) return;

  const hasVisited = localStorage.getItem("williamPortfolioVisited");

  try {
    const counterRef = doc(db, "stats", "portfolio");

    let finalCount;

    if (!hasVisited) {
      finalCount = await runTransaction(db, async transaction => {
        const counterDoc = await transaction.get(counterRef);
        const currentViews = counterDoc.data().views || 0;
        const updatedViews = currentViews + 1;

        transaction.update(counterRef, {
          views: updatedViews
        });

        return updatedViews;
      });

      localStorage.setItem("williamPortfolioVisited", "true");
    } else {
      const counterDoc = await runTransaction(db, async transaction => {
        const docSnapshot = await transaction.get(counterRef);
        return docSnapshot;
      });

      finalCount = counterDoc.data().views || 0;
    }

    counter.classList.remove("loading-counter");
    animateCounter(counter, finalCount);
  } catch (error) {
    console.error("Visitor counter error:", error);

    counter.classList.remove("loading-counter");
    counter.textContent = "--";
  }
}

document.addEventListener("DOMContentLoaded", updateVisitorCounter);