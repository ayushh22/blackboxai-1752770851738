// Project data
const projects = [
    { id: 1, title: 'The Brij, New Delhi', category: 'hospitality', image: 'placeholder-1.jpg' },
    { id: 2, title: 'Statue of Oneness, Ekatma Dham, Omkareshwar', category: 'institutional', image: 'placeholder-2.jpg' },
    { id: 3, title: 'Thal Sena Bhawan, New Delhi', category: 'institutional', image: 'placeholder-3.jpg' },
    { id: 4, title: 'Ranchi Secretariat, Ranchi', category: 'institutional', image: 'placeholder-4.jpg' },
    { id: 5, title: 'HRRL Township, Barmer', category: 'residential', image: 'placeholder-5.jpg' },
    { id: 6, title: 'Aruna Asaf Ali Hospital, New Delhi', category: 'health-care', image: 'placeholder-6.jpg' },
    { id: 7, title: 'Sanchi University, Salamatpur', category: 'institutional', image: 'placeholder-7.jpg' },
    { id: 8, title: 'Harrow School, Bengaluru', category: 'institutional', image: 'placeholder-8.jpg' },
    { id: 9, title: 'Yashobhoomi, New Delhi', category: 'mixed-use', image: 'placeholder-9.jpg' },
    { id: 10, title: 'East Delhi Hub, New Delhi', category: 'mixed-use', image: 'placeholder-10.jpg' },
    { id: 11, title: 'Vallabh Bhawan Secretariat, Bhopal', category: 'institutional', image: 'placeholder-11.jpg' },
    { id: 12, title: 'Hamidia Hospital, Bhopal', category: 'health-care', image: 'placeholder-12.jpg' },
    { id: 13, title: 'Gautam Buddha University, Greater Noida', category: 'institutional', image: 'placeholder-13.jpg' },
    { id: 14, title: 'Finland Embassy, New Delhi', category: 'foreign-missions', image: 'placeholder-14.jpg' },
    { id: 15, title: 'Gomti Nagar Railway Station Redevelopment', category: 'transportation', image: 'placeholder-15.jpg' },
    { id: 16, title: 'Perto Industrial Facility, Jaipur', category: 'industrial', image: 'placeholder-16.jpg' },
    { id: 17, title: 'Krrish Monde Provence, Gurugram', category: 'residential', image: 'placeholder-17.jpg' },
    { id: 18, title: 'Central University, Srinagar', category: 'institutional', image: 'placeholder-18.jpg' },
    { id: 19, title: 'India Pavilion – World Expo 2020, Dubai', category: 'mixed-use', image: 'placeholder-19.jpg' },
    { id: 20, title: 'Denmark Embassy, New Delhi', category: 'foreign-missions', image: 'placeholder-20.jpg' },
    { id: 21, title: 'DPS International School, Gurugram', category: 'institutional', image: 'placeholder-21.jpg' },
    { id: 22, title: 'Pragati Maidan Redevelopment, New Delhi', category: 'redevelopment', image: 'placeholder-22.jpg' },
    { id: 23, title: 'Aerocity, New Delhi', category: 'mixed-use', image: 'placeholder-23.jpg' },
    { id: 24, title: 'Indian Institute of Management, Bodhgaya', category: 'institutional', image: 'placeholder-24.jpg' },
    { id: 25, title: 'Jawaharlal Nehru University, New Delhi', category: 'institutional', image: 'placeholder-25.jpg' },
    { id: 26, title: 'Ambadeep Tower, New Delhi', category: 'offices', image: 'placeholder-26.jpg' },
    { id: 27, title: 'Multi Modal Transportation Hub, Surat', category: 'transportation', image: 'placeholder-27.jpg' },
    { id: 28, title: 'Pathways World School, Gurugram', category: 'institutional', image: 'placeholder-28.jpg' },
    { id: 29, title: 'Rumtek Monastery, New Delhi', category: 'institutional', image: 'placeholder-29.jpg' },
    { id: 30, title: 'Shiv Nadar University, Greater Noida', category: 'institutional', image: 'placeholder-30.jpg' },
    { id: 31, title: 'Indian Institute of Management, Lucknow', category: 'institutional', image: 'placeholder-31.jpg' },
    { id: 32, title: 'IIIDEM, New Delhi', category: 'institutional', image: 'placeholder-32.jpg' },
    { id: 33, title: 'QRG Hospital, Faridabad', category: 'health-care', image: 'placeholder-33.jpg' },
    { id: 34, title: 'Human Resources Development Centre, Greater Noida', category: 'institutional', image: 'placeholder-34.jpg' },
    { id: 35, title: 'Airport Express Delhi Metro, New Delhi', category: 'transportation', image: 'placeholder-35.jpg' },
    { id: 36, title: 'Havells Corporate Office, Noida', category: 'offices', image: 'placeholder-36.jpg' },
    { id: 37, title: 'Cultural Centre at Chinese Embassy, New Delhi', category: 'foreign-missions', image: 'placeholder-37.jpg' },
    { id: 38, title: 'Bihar Police Academy, Rajgir', category: 'institutional', image: 'placeholder-38.jpg' },
    { id: 39, title: 'Paryatan Bhawan, New Delhi', category: 'institutional', image: 'placeholder-39.jpg' },
    { id: 40, title: 'Central University Rajasthan, Jaipur', category: 'institutional', image: 'placeholder-40.jpg' },
    { id: 41, title: 'JCB, Jaipur', category: 'industrial', image: 'placeholder-41.jpg' },
    { id: 42, title: 'The LaLiT Golf & Spa Resort, Goa', category: 'hospitality', image: 'placeholder-42.jpg' },
    { id: 43, title: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore', category: 'institutional', image: 'placeholder-43.jpg' },
    { id: 44, title: 'JCB, Ballabgarh', category: 'industrial', image: 'placeholder-44.jpg' },
    { id: 45, title: 'JW Marriott Hotel Aerocity, New Delhi', category: 'hospitality', image: 'placeholder-45.jpg' },
    { id: 46, title: 'Vasant Vihar Residence, New Delhi', category: 'residential', image: 'placeholder-46.jpg' },
    { id: 47, title: 'Krrish Provence Estate, Gurugram', category: 'residential', image: 'placeholder-47.jpg' },
    { id: 48, title: 'Air India Colony Redevelopment, New Delhi', category: 'redevelopment', image: 'placeholder-48.jpg' },
    { id: 49, title: 'National Archives of India, New Delhi', category: 'institutional', image: 'placeholder-49.jpg' },
    { id: 50, title: 'Signature Towers, Gurugram', category: 'offices', image: 'placeholder-50.jpg' }
];

// DOM elements
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Render projects
function renderProjects(category = 'all') {
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <a href="#" class="project-card" data-category="${project.category}">
            <div class="project-image">
                <span>Project Image</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
        </a>
    `).join('');
}

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const category = button.dataset.category;
        renderProjects(category);
    });
});

// Initialize
renderProjects();

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
