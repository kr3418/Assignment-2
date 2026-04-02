const infoBox = document.getElementById('infoBox');

document.getElementById('line1').addEventListener('click', function() {
  infoBox.innerHTML = "The line I've used since childhood! Goes along Broadway and connects the central parts of Manhattan";
});

document.getElementById('line2').addEventListener('click', function() {
  infoBox.innerHTML = "As a frequent Astoria visitor, the N train never fails. Connects Manhattan with Queens and Brooklyn";
});

document.getElementById('line3').addEventListener('click', function() {
  infoBox.innerHTML = "Considered as the MTAs fastest train due to its reliability. Manhattan to Brooklyn in seconds!";
});

function showFavorite() {
  const input = document.getElementById('favoriteInput').value;
  if (input.trim() === "") {
    alert("Please enter a subway line!");
  } else {
    infoBox.innerHTML = "Nice choice! " + input + " is a great line ";
  }
}
