const a1 = document.querySelector(".cta-1");
const a2 = document.querySelector(".cta-2");
const a3 = document.querySelector(".cta-3");
const jawaban1 = document.querySelector(".jawaban-1");
const jawaban2 = document.querySelector(".jawaban-2");
const jawaban3 = document.querySelector(".jawaban-3");
const jawaban4 = document.querySelector(".jawaban-4");
const jawaban5 = document.querySelector(".jawaban-5");
const pertanyaan = document.querySelector(".pertanyaan");

a1.addEventListener("click", () => {
  pertanyaan.style.fontSize = "1rem";
  a1.style.backgroundColor = "#880e4d";
  a2.style.backgroundColor = "#666";
  a3.style.backgroundColor = "#666";
  jawaban1.style.fontSize = "1rem";
  jawaban2.style.fontSize = "1rem";
  jawaban3.style.fontSize = "1rem";
  jawaban4.style.fontSize = "1rem";
  jawaban5.style.fontSize = "1rem";
});

a2.addEventListener("click", () => {
  pertanyaan.style.fontSize = "1.2rem";
  a2.style.backgroundColor = "#880e4d";
  a1.style.backgroundColor = "#666";
  a3.style.backgroundColor = "#666";
  jawaban1.style.fontSize = "1.2rem";
  jawaban2.style.fontSize = "1.2rem";
  jawaban3.style.fontSize = "1.2rem";
  jawaban4.style.fontSize = "1.2rem";
  jawaban5.style.fontSize = "1.2rem";
});

a3.addEventListener("click", () => {
  pertanyaan.style.fontSize = "1.4rem";
  a3.style.backgroundColor = "#880e4d";
  a2.style.backgroundColor = "#666";
  a1.style.backgroundColor = "#666";
  jawaban1.style.fontSize = "1.4rem";
  jawaban2.style.fontSize = "1.4rem";
  jawaban3.style.fontSize = "1.4rem";
  jawaban4.style.fontSize = "1.4rem";
  jawaban5.style.fontSize = "1.4rem";
});
