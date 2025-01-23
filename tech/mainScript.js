let slideIndex = 0;

    function slide(direction) {
        const carousel = document.querySelector('.carousel');
        const totalSlides = document.querySelectorAll('.slide-group').length;
    
        // Update the slide index based on direction
        slideIndex += direction;
    
        // Handle circular navigation
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
    
        // Move the carousel to the selected slide
        carousel.style.transform = `translateX(${-slideIndex * 100}%)`;
    }





    document.addEventListener("DOMContentLoaded", () => {
        fetch("flights.json")
          .then((response) => response.json())
          .then((flights) => {
            const resultsDiv = document.getElementById("flight-results");
      
            flights.forEach((flight) => {
              const flightDiv = document.createElement("div");
              flightDiv.className = "flight-card";
              flightDiv.innerHTML = `
                <p><strong>Flight:</strong> ${flight.flightNumber} (${flight.airline})</p>
                <p><strong>From:</strong> ${flight.from} <strong>To:</strong> ${flight.to}</p>
                <p><strong>Departure:</strong> ${flight.departureTime} <strong>Arrival:</strong> ${flight.arrivalTime}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
              `;
              resultsDiv.appendChild(flightDiv);
            });
          })
          .catch((error) => console.error("Error loading flights:", error));
      });
      