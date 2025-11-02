// --- EXPERIENCE DATA ---
// Add your professional experience here
const allExperience = [
    {
        title: "Robotics & Machine Learning Intern",
        company: "Sapien Robotics",
        url: "https://sapienrobotics.in",
        range: "July 2025 – Present",
        bullets: [
            "Leading cobot integration for a Schneider Electric automated picking system using a Lexium 12S cobot on an AR 250 AMR.",
            "Using NVIDIA Isaac Sim for simulation, synthetic data generation, and domain randomization to train robust DL models.",
            "Implementing YOLO v11 and ArUco markers for high-accuracy, real-time object detection and precision alignment."
        ]
    },
    {
        title: "Drone Manager & Structures Member",
        company: "Edhitha Unmanned Aerial Systems",
        url: "https://www.linkedin.com/company/edhitha-uas/",
        range: "Jan 2023 – Sept 2024",
        bullets: [
            "Led the design and fabrication of autonomous drones, including a 25-kg heavy-lift quadcopter for search-and-rescue.",
            "Conducted design optimizations and aerodynamic simulations in Fusion 360 and SolidWorks.",
            "**Achievement:** Won 1st Place in Technical Design (out of 69 teams) at SUAS 2024 - Robonation."
        ]
    }
];

// --- PROJECT DATA ---
// Add all your projects here.
//
// mediaType can be 'image', 'video', or 'none'
// mediaSrc is the path to your file (e.g., 'assets/project.mp4' or 'assets/project.jpg')
// poster is an optional image to show before a video plays
// github is the link to the repository
//
const allProjects = [
    {
        id: 'schneider-cobot',
        title: 'Cobot Pick & Place for Schneider Electric',
        description: '<p>Leading the integration of a Lexium 12S cobot for an automated bin-picking task. This system uses AprilTags for high-precision positioning and a YOLOv11 classification model for real-time object identification and error handling.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/schneider.mp4',
        poster: '',
        tags: ['ROS 2', 'YOLOv11', 'AprilTags', 'Cobot Integration'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'franka-teleop',
        title: 'Franka Arm Teleoperation in Isaac Sim',
        description: '<p>Developed a teleoperation system to control a Franka Emika Panda arm within NVIDIA Isaac Sim using a Logitech Extreme 3D Pro Joystick. This project bridges physical joystick inputs to simulated robotic control for intuitive manipulation.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/teleop.mp4',
        poster: '',
        tags: ['NVIDIA Isaac Sim', 'Python', 'Teleoperation', 'Robotics'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'osm-router',
        title: 'Flask-OSM-AStar-Router',
        description: `
            <p>A web application demonstrating A* pathfinding on OpenStreetMap (OSM) data for driving routes. This project uses Flask for the backend, Leaflet.js for the interactive map display, and calculates the estimated fastest driving route between two user-selected points, considering road types and speed limits.</p>
        ,
        mediaType: 'image',
        mediaSrc: 'assets/astar.png',
        poster: '',
        tags: ['Python', 'Flask', 'NetworkX', 'A* Algorithm', 'pyrosm', 'Leaflet.js'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'keras-classifier',
        title: 'Keras Alphabet Classifier',
        description: 
            '<p>This project implements a Convolutional Neural Network (CNN) for recognizing handwritten English alphabets (A-Z) using the Kaggle A-Z Handwritten Data dataset.</p>
            <h4>Features</h4>
            <ul>
                <li>Data preprocessing and normalization of 28x28 grayscale images.</li>
                <li>CNN architecture with convolutional, batch normalization, max pooling, dropout, and dense layers.</li>
                <li>Training with categorical cross-entropy loss and Adam optimizer.</li>
                <li>Model evaluation with accuracy metrics and visualization of training progress.</li>`,
        mediaType: 'none',
        poster: '',
        tags: ['Python', 'Keras', 'TensorFlow', 'CNN', 'Computer Vision'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'ocr-embeddings',
        title: 'OCR & Image Embeddings for Price Prediction',
        description: '<p>Developed an end-to-end machine learning pipeline to predict product prices. This project involved advanced feature engineering, text embeddings (SentenceTransformers), image embeddings (CLIP), and OCR (EasyOCR) to build a robust model.</p>',
        mediaType: 'none', 
        mediaSrc: '',
        poster: '',
        tags: ['Python', 'Machine Learning', 'CLIP', 'EasyOCR', 'XGBoost'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'nlp-control',
        title: 'Natural Language Robot Control',
        description: '<p>Built a pipeline integrating voice input, AI planning, and robot execution in Gazebo. The system uses an LLM to interpret commands and MongoDB to manage task workflows.</p>',
        mediaType: 'image',
        mediaSrc: 'assets/nlp+ros2.png',
        poster: '',
        tags: ['Python', 'ROS 2', 'LLM', 'Gazebo', 'MongoDB'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'rl-pick-place',
        title: 'Robotic Pick & Place with RL',
        description: '<p>Trained a PPO reinforcement learning agent for a pick-and-place task in PyBullet. The agent controls a UR5 robot, using a state-based observation space and a shaped reward function.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/Pick_place.mp4',
        poster: '',
        tags: ['Python', 'Reinforcement Learning', 'PPO', 'PyBullet'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'sar-uav',
        title: 'High-Performance S&R UAV',
        description: '<p>Engineered and fabricated a 25-kg heavy-lift quadcopter for search-and-rescue, achieving a 1.8 FOS ratio. This project won 1st Place in Technical Design at SUAS 2024.</p>',
        mediaType: 'image',
        mediaSrc: 'assets/drone.JPG',
        poster: '',
        tags: ['SolidWorks', 'Fusion 360', 'UAV Design', 'Simulation'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'action-prediction',
        title: 'Robotic Action Duration Prediction',
        description: '<p>Developed an ML model to predict robotic action duration from operational data. Employed automated feature selection (RFECV) and stacked ensembles to maximize accuracy.</p>',
        mediaType: 'none',
        poster: '',
        tags: ['Machine Learning', 'Python', 'Scikit-learn', 'RFECV'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'synthetic-data',
        title: 'Synthetic Data Generation in Isaac Sim',
        description: '<p>Utilized NVIDIA Isaac Sim to generate high-fidelity synthetic datasets for training deep learning models. This process involved extensive use of domain randomization (textures, lighting, object placement) and data replication to create robust models that generalize well to real-world scenarios.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/data_gen.mp4',
        poster: '',
        tags: ['NVIDIA Isaac Sim', 'Synthetic Data', 'Domain Randomization', 'Data Replication'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'complex-pick-place',
        title: 'Pick & Place with Complex Meshes in Isaac Sim',
        description: '<p>Developed a pick and place pipeline in Isaac Sim for objects with complex, non-convex meshes. This system used a kinematics-based solver for motion planning and grasp execution, focusing on reliable handling of challenging geometries in a simulated environment.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/Pick_place.mp4', // Re-using this video as a placeholder
        poster: '',
        tags: ['NVIDIA Isaac Sim', 'Pick & Place', 'Kinematics', 'Motion Planning'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'rmpflow',
        title: 'RMPflow Obstacle Avoidance with Franka Arm',
        description: '<p>Implemented RMPflow (Robotic Motion Policies) on a Franka Emika Panda arm in Isaac Sim. This project focused on real-time, reactive obstacle avoidance, allowing the robot to dynamically adjust its trajectory to avoid unforeseen objects while moving towards its goal.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/rmpflow.mp4',
        poster: '',
        tags: ['NVIDIA Isaac Sim', 'RMPflow', 'Obstacle Avoidance', 'Franka Emika'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'turtlebot-isaac',
        title: 'TurtleBot 3 Simulation with ROS 2 Bridge',
        description: '<p>Built a simulation environment for the TurtleBot 3 in NVIDIA Isaac Sim, fully integrated with ROS 2. This setup included teleoperation control, publishing camera and Lidar data, and full visualization in RViz2, creating a complete digital twin for algorithm testing.</p>',
        mediaType: 'video',
        mediaSrc: 'assets/turtlebot.mp4',
        poster: '',
        tags: ['NVIDIA Isaac Sim', 'ROS 2', 'TurtleBot3', 'RViz2', 'Lidar'],
        github: 'https://github.com/Gagan-v04'
    },
    {
        id: 'turtlebot-gazebo',
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
        mediaType: 'video',
        mediaSrc: 'assets/turtlebot2.mp4',
        poster: '',
        tags: ['ROS 2', 'Gazebo', 'RViz2', 'Pure Pursuit', 'Cubic Spline', 'Navigation'],
        github: 'https://github.com/Gagan-v04'
    }
];
