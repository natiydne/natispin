document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360 + 720); // Spin at least 2 full turns
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Calculate the selected segment after the spin
    const segments = document.querySelectorAll('.segment');
    const segmentAngle = 360 / segments.length;
    const selectedSegmentIndex = Math.floor((randomDegree % 360) / segmentAngle);
    
    // Show the result after the spin
    setTimeout(() => {
        const result = segments[selectedSegmentIndex].innerText;
        document.getElementById('resultMessage').innerText = `You won: ${result}`;
    }, 4000); // Wait for the spin animation to finish
});
