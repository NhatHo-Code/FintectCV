// GSAP Animations
gsap.from(".slide-left", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.3
});

gsap.from(".slide-right", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.3
});

gsap.from(".delay", {
    delay: 0.5
});

gsap.to(".zoom-image", {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".cross::before", {
    scaleX: 1,
    duration: 1,
    ease: "power2.out"
});

gsap.to(".cross::after", {
    scaleY: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
});

// Image hover effects
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".zoom-image");

    image.addEventListener("mouseenter", () => {
        gsap.to(image, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    image.addEventListener("mouseleave", () => {
        gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut"
        });
    });

    // Progress bar and label updates
    const bubbles = document.querySelectorAll('.bubble');
    const currentProgress = document.getElementById('current-progress');
    const goalProgress = document.getElementById('goal-progress'); // Changed from previousProgress to match HTML
    const currentGoalLabel = document.getElementById('current-goal-label');
    const goalLabel = document.getElementById('goal-label');

    // Current progress data
    const progressData = {
        'bubble1': 10, // Coding
        'bubble2': 20, // Gym
        'bubble3': 100, // Viet Anh School
        'bubble4': 30, // Crypto trading
        'bubble5': 20, // Piano
        'bubble6': 100, // Petrusky High School
        'bubble7': 25, // Designing
        'bubble8': 55, // Reading
        'bubble9': 10  // RMIT University
    };

    // Goal progress data
    const previousData = {
        'bubble1': 70, // Coding
        'bubble2': 50, // Gym
        'bubble3': 100, // Viet Anh School
        'bubble4': 10, // Crypto trading
        'bubble5': 10, // Piano
        'bubble6': 100, // Petrusky High School
        'bubble7': 30, // Designing
        'bubble8': 10, // Reading
        'bubble9': 25 // RMIT University
    };

    // Custom title content for each bubble (from your previous request)
    const titleData = {
        'bubble1': { current: 'Mastering Coding', goal: 'Learning HTML, CSS, JS' },
        'bubble2': { current: 'Acquiring desired physique', goal: 'A healthy body' },
        'bubble3': { current: 'School Progress', goal: 'Academic Success' },
        'bubble4': { current: 'Crypto Learning', goal: 'Trading Mastery' },
        'bubble5': { current: 'Learning music theory', goal: 'Concert Ready' },
        'bubble6': { current: 'High School Growth', goal: 'Graduation' },
        'bubble7': { current: 'Learning Photoshop', goal: 'Creative Mastery' },
        'bubble8': { current: 'Finish 3 books', goal: 'Bookworm Goal' },
        'bubble9': { current: 'University Journey', goal: 'Degree Completion' }
    };

    bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            // Get progress and goal data
            const current = progressData[bubble.id] || 0;
            const goal = previousData[bubble.id] || 100;

            // Update progress bars
            currentProgress.innerHTML = `<div style="width: ${current}%"></div>`;
            goalProgress.innerHTML = `<div style="width: ${goal}%"></div>`; // Remaining progress toward goal

            // Update labels with custom titles
            const titles = titleData[bubble.id] || { current: 'Current Progress', goal: 'Goal' };
            currentGoalLabel.textContent = titles.current;
            goalLabel.textContent = titles.goal;
        });
    });
});