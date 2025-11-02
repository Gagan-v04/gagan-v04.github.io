// /projects.js

/**
 * ----------------------------------------------------------------
 * EXPERIENCE DATA
 * ----------------------------------------------------------------
 * id: A unique identifier
 * title: Your job title
 * company: The company name
 * companyLink: URL to the company's website
 * date: The date range of your employment
 * points: An array of strings, where each string is a bullet point
 * ----------------------------------------------------------------
 */
const experiences = [
    {
        id: 'e1',
        title: 'Robotics & Machine Learning Intern',
        company: 'Sapien Robotics',
        companyLink: 'https://sapienrobotics.in',
        date: 'July 2025 – Present',
        points: [
            'Leading cobot integration for a Schneider Electric automated picking system using a Lexium 12S cobot on an AR 250 AMR.',
            'Using NVIDIA Isaac Sim for simulation, synthetic data generation, and domain randomization to train robust DL models.',
            'Implementing YOLO v11 and ArUco markers for high-accuracy, real-time object detection and precision alignment.'
        ]
    },
    {
        id: 'e2',
        title: 'Drone Manager & Structures Member',
        company: 'Edhitha Unmanned Aerial Systems',
        companyLink: 'https://www.linkedin.com/company/edhitha-uas/',
        date: 'Jan 2023 – Sept 2024',
        points: [
            'Led the design and fabrication of autonomous drones, including a 25-kg heavy-lift quadcopter for search-and-rescue.',
            'Conducted design optimizations and aerodynamic simulations in Fusion 360 and SolidWorks.',
            '<strong>Achievement:</strong> Won 1st Place in Technical Design (out of 69 teams) at SUAS 2024 - Robonation.'
        ]
    }
];

/**
 * ----------------------------------------------------------------
 * PROJECT DATA
 * ----------------------------------------------------------------
 * id: A unique identifier (e.g., 'p1', 'p2')
 * title: The project title
 * description: An HTML string of the project description. Use backticks (`) for multi-line strings.
 * tags: An array of tech tags.
 * githubLink: The URL to the GitHub repo.
 * media: An object describing the visual content.
 * - type: 'image', 'video', or 'none'
 * - src: The path to the media file (e.g., 'assets/my-video.mp4')
 * - alt: (For images) Alt text for accessibility
 * ----------------------------------------------------------------
 */
const allProjects = [
    {
        id: 'p1',
        title: 'Cobot Pick & Place for Schneider Electric',
        description: `
            <p>Leading the integration of a Lexium 12S cobot for an automated bin-picking task. This system uses AprilTags for high-precision positioning and a YOLOv11 classification model for real-time object identification and error handling.</p>
        `,
        tags: ['ROS 2', 'YOLOv11', 'AprilTags', 'Cobot Integration'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/schneider.mp4' }
    },
    {
        id: 'p2',
        title: 'Franka Arm Teleoperation in Isaac Sim',
        description: `
            <p>Developed a teleoperation system to control a Franka Emika Panda arm within NVIDIA Isaac Sim using a Logitech Extreme 3D Pro Joystick. This project bridges physical joystick inputs to simulated robotic control for intuitive manipulation.</p>
        `,
        tags: ['NVIDIA Isaac Sim', 'Python', 'Teleoperation', 'Robotics'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/teleop.mp4' }
    },
    {
        id: 'p3',
        title: 'Flask-OSM-AStar-Router',
        description: `
            <p>A web application demonstrating A* pathfinding on OpenStreetMap (OSM) data for driving routes. This project uses Flask for the backend, Leaflet.js for the interactive map display, and calculates the estimated fastest driving route between two user-selected points, considering road types and speed limits.</p>
        `,
        tags: ['Python', 'Flask', 'NetworkX', 'A* Algorithm', 'pyrosm', 'Leaflet.js'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'image', src: 'assets/astar.png', alt: 'Flask-OSM-AStar-Router' }
    },
    {
        id: 'p4',
        title: 'Keras Alphabet Classifier',
        description: `
            <p>This project implements a Convolutional Neural Network (CNN) for recognizing handwritten English alphabets (A-Z) using the Kaggle A-Z Handwritten Data dataset.</p>
        `,
        tags: ['Python', 'Keras', 'TensorFlow', 'CNN', 'Computer Vision'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'image', src: 'assets/project2.jpg', alt: 'Keras Alphabet Classifier' }
    },
    {
        id: 'p5',
        title: 'OCR & Image Embeddings for Price Prediction',
        description: `
            <p>Developed an end-to-end machine learning pipeline to predict product prices. This project involved advanced feature engineering, text embeddings (SentenceTransformers), image embeddings (CLIP), and OCR (EasyOCR) to build a robust model.</p>
        `,
        tags: ['Python', 'Machine Learning', 'CLIP', 'EasyOCR', 'XGBoost'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'none' }
    },
    {
        id: 'p6',
        title: 'Natural Language Robot Control',
        description: `
            <p>Built a pipeline integrating voice input, AI planning, and robot execution in Gazebo. The system uses an LLM to interpret commands and MongoDB to manage task workflows.</p>
        `,
        tags: ['Python', 'ROS 2', 'LLM', 'Gazebo', 'MongoDB'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'image', src: 'assets/nlp+ros2.jpg', alt: 'Natural Language Robot Control' }
    },
    {
        id: 'p7',
        title: 'Robotic Pick & Place with RL',
        description: `
            <p>Trained a PPO reinforcement learning agent for a pick-and-place task in PyBullet. The agent controls a UR5 robot, using a state-based observation space and a shaped reward function.</p>
        `,
        tags: ['Python', 'Reinforcement Learning', 'PPO', 'PyBullet'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'none' } // No video src provided in original HTML
    },
    {
        id: 'p8',
        title: 'High-Performance S&R UAV',
        description: `
            <p>Engineered and fabricated a 25-kg heavy-lift quadcopter for search-and-rescue, achieving a 1.8 FOS ratio. This project won 1st Place in Technical Design at SUAS 2024.</p>
        `,
        tags: ['SolidWorks', 'Fusion 360', 'UAV Design', 'Simulation'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'image', src: 'assets/drone.JPG', alt: 'High-Performance S&R UAV' }
    },
    {
        id: 'p9',
        title: 'Robotic Action Duration Prediction',
        description: `
            <p>Developed an ML model to predict robotic action duration from operational data. Employed automated feature selection (RFECV) and stacked ensembles to maximize accuracy.</p>
        `,
        tags: ['Machine Learning', 'Python', 'Scikit-learn', 'RFECV'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'image', src: 'assets/project2.jpg', alt: 'Robotic Action Duration Prediction' }
    },
    {
        id: 'p10',
        title: 'Synthetic Data Generation in Isaac Sim',
        description: `
            <p>Utilized NVIDIA Isaac Sim to generate high-fidelity synthetic datasets for training deep learning models. This process involved extensive use of domain randomization (textures, lighting, object placement) and data replication to create robust models that generalize well to real-world scenarios.</p>
        `,
        tags: ['NVIDIA Isaac Sim', 'Synthetic Data', 'Domain Randomization', 'Data Replication'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/data_gen.mp4' }
    },
    {
        id: 'p11',
        title: 'Pick & Place with Complex Meshes in Isaac Sim',
        description: `
            <p>Developed a pick and place pipeline in Isaac Sim for objects with complex, non-convex meshes. This system used a kinematics-based solver for motion planning and grasp execution, focusing on reliable handling of challenging geometries in a simulated environment.</p>
        `,
        tags: ['NVIDIA Isaac Sim', 'Pick & Place', 'Kinematics', 'Motion Planning'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/Pick_place.mp4' }
    },
    {
        id: 'p12',
        title: 'RMPflow Obstacle Avoidance with Franka Arm',
        description: `
            <p>Implemented RMPflow (Robotic Motion Policies) on a Franka Emika Panda arm in Isaac Sim. This project focused on real-time, reactive obstacle avoidance, allowing the robot to dynamically adjust its trajectory to avoid unforeseen objects while moving towards its goal.</p>
        `,
        tags: ['NVIDIA Isaac Sim', 'RMPflow', 'Obstacle Avoidance', 'Franka Emika'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/rmpflow.mp4' }
    },
    {
        id: 'p13',
        title: 'TurtleBot 3 Simulation with ROS 2 Bridge',
        description: `
            <p>Built a simulation environment for the TurtleBot 3 in NVIDIA Isaac Sim, fully integrated with ROS 2. This setup included teleoperation control, publishing camera and Lidar data, and full visualization in RViz2, creating a complete digital twin for algorithm testing.</p>
        `,
        tags: ['NVIDIA Isaac Sim', 'ROS 2', 'TurtleBot3', 'RViz2', 'Lidar'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/turtlebot.mp4' }
    },
    {
        id: 'p14',
        title: 'TurtleBot Waypoint Trajectory Tracker (Gazebo)',
        description: `
            <p>A complete autonomous navigation pipeline in ROS 2 for a TurtleBot in Gazebo. The system takes discrete waypoints and intelligently navigates, respecting the robot's physical limits.</p>
            
            <h4>System Components</h4>
            <ul>
                <li><strong>Path Smoother:</strong> Uses Natural Cubic Splines to transform coarse waypoints into a smooth, continuous geometric path.</li>
                <li><strong>Trajectory Generator:</strong> Creates a time-parameterized trajectory with a Trapezoidal Velocity Profile, ensuring the robot respects velocity, acceleration, and curvature limits (slowing down on turns).</li>
                <li><strong>Trajectory Tracker:</strong> Implements a Pure Pursuit controller to calculate and publish <code>/cmd_vel</code> messages, enabling the robot to follow the generated trajectory accurately.</li>
            </ul>
            <p>The entire system is visualized in RViz, showing the waypoints, the smoothed path, and the robot's real-time tracking.</p>
        `,
        tags: ['ROS 2', 'Gazebo', 'RViz2', 'Pure Pursuit', 'Cubic Spline', 'Navigation'],
        githubLink: 'https://github.com/Gagan-v04',
        media: { type: 'video', src: 'assets/turtlebot2.mp4' }
    }
];


/**
 * ----------------------------------------------------------------
 * RENDER FUNCTIONS
 * ----------------------------------------------------------------
 * These functions build the HTML from the data objects.
 * ----------------------------------------------------------------
 */

/**
 * Generates the HTML for a single project's media.
 * @param {object} media - The media object from a project.
 * @returns {string} The HTML string for the media.
 */
function renderMedia(media) {
    if (media.type === 'video') {
        return `
            <video class="w-full h-full object-cover" controls muted loop playsinline>
                <source src="${media.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (media.type === 'image') {
        return `<img src="${media.src}" alt="${media.alt || 'Project Image'}" class="w-full h-full object-cover">`;
    }
    // Return an empty string if type is 'none' or unhandled.
    // The .project-media CSS class will still create a styled box.
    return '';
}

/**
 * Generates the HTML for a project's tech tags.
 * @param {string[]} tags - An array of tag strings.
 * @returns {string} The HTML string for the tags.
 */
function renderTags(tags) {
    return tags.map(tag => `<span class="tech-tag text-xs font-mono px-3 py-1 rounded-full">${tag}</span>`).join('\n');
}

/**
 * Renders a list of projects into a specified container.
 * @param {string} containerSelector - The CSS selector for the container (e.g., '#featured-projects').
 * @param {object[]} projectList - The array of project objects to render.
 */
function renderProjects(containerSelector, projectList) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`Project container not found: ${containerSelector}`);
        return;
    }

    container.innerHTML = projectList.map(project => `
        <article class="reveal">
            <div class="project-media">
                ${renderMedia(project.media)}
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">${project.title}</h3>
            <div class="text-gray-600 leading-relaxed mb-4 project-description">
                ${project.description}
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
                ${renderTags(project.tags)}
            </div>
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="text-accent font-medium hover:underline">View on GitHub &rarr;</a>
        </article>
    `).join('');
}

/**
 * Renders the experience timeline into a specified container.
 * @param {string} containerSelector - The CSS selector for the timeline container.
 */
function renderExperiences(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`Experience container not found: ${containerSelector}`);
        return;
    }

    container.innerHTML = experiences.map(exp => `
        <div class="timeline-item reveal">
            <div class="timeline-marker"></div>
            <div class="ml-4">
                <h3 class="text-xl font-semibold text-gray-900">${exp.title}</h3>
                <h4 class="text-lg font-medium mb-1">
                    <a href="${exp.companyLink}" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">${exp.company}</a>
                </h4>
                <span class="text-sm font-mono text-gray-500">${exp.date}</span>
                <ul class="mt-4 space-y-3 text-gray-600 leading-relaxed">
                    ${exp.points.map(point => `<li class="flex"><span class="text-accent mr-3 mt-1.5 flex-shrink-0">▹</span>${point}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}
