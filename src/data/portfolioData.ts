import {
  Code,
  Database,
  Server,
  Terminal,
  Cpu,
  Bot,
  Mail,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";

export const rotatingTexts = [
  "Brewing AI elixirs with TensorFlow and PyTorch—sometimes it's wizardry, sometimes it's mad science, occasionally it even obeys.",
  "Summoning neural networks like Dumbledore conjures Fawkes, with TensorFlow wands and PyTorch potions at my command.",
  "Cooking up AI models in the lab—Breaking Bad style—but instead of blue meth, it's pure deep learning magic.",
  "Casting spells in Python, chanting TensorFlow, and invoking PyTorch—because even Gandalf would approve of well-trained models.",
  "AI whisperer: teaching GPUs to levitate data, making neural nets obey like Hogwarts first-years in detention.",
];

export const skills = [
  { name: "C", icon: Code },
  { name: "C++", icon: Code },
  { name: "Python", icon: Code },
  { name: "GoLang", icon: Code },
  { name: "Linux & LDD", icon: Terminal },
  { name: "Embedded AI", icon: Bot },
  { name: "ESP32/Arduino", icon: Cpu },
  { name: "FastAPI/Flask", icon: Server },
  { name: "MySQL/MongoDB", icon: Database },
];

export const projects = [
  {
    title: "Hybrid Traffic Violation Detection",
    description:
      "Traffic Light & Zebra Crossing Detection with Violation Monitoring using YOLO V8. Quantized TFLite Model Pipeline for Embedded ML",
    tech: [
      "YOLO v8/PyTorch",
      "OpenCV/NumPy/Matplotlib",
      "Python, Flask",
      "JSON(API comms)",
      "OpenCV/NumPy/Matplotlib",
      "TensorFlow Lite",
      "CNN",
      "Quantization",
    ],
    github:
      "https://github.com/Somnathjha007/Traffic-Violation-Detector-YOLOv8",
    demo: null,
  },
  {
    title: "Edge to Cloud Image Pipeline",
    description:
      "Implemented edge device image capture with cloud-based Flask server. Integrated with FlaskAPI endpoint for scalable data collection",
    tech: [
      "ESP32-S3",
      "Embedded C",
      "Flask",
      "Python",
      "REST API",
      "cURL",
      "Git/Github",
    ],
    github:
      "https://github.com/Somnathjha007/Edge-to-Cloud-Image-Pipeline",
    demo: null,
  },
  {
    title: "Upcoming",
    description:
      "Under Devlopment -> Wizards are working , spells are being casted",
    tech: ["Magic", "pixy dust", "Prof Snape", "Holy Water"],
    github: "#",
    demo: null,
  },
];

export const education = [
  {
    degree: "B.Tech",
    description: "Electronics and Communication Engineering",
  },
  {
    degree: "Higher Secondary",
    description: "Non-Medical",
  },
];

export const certificates = [
  {
    title: "LINUX for Cloud",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-263a3ce9-5cdd-467c-a960-95bf52e237e0/",
  },
  {
    title: "Git and Github Essentials",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-f48b7341-ed77-45ea-9258-4de66d32b90d/",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: "somnath.jha.official@gmail.com",
    icon: Mail,
    link: "mailto:somnath.jha.official@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    label: "LinkedIn",
    value: "/in/somnath-jhaa",
    icon: Linkedin,
    link: "https://linkedin.com/in/somnath-jhaa",
    description: "Professional network",
  },
  {
    label: "GitHub",
    value: "@somnathjha007",
    icon: Github,
    link: "https://github.com/somnathjha007",
    description: "Check out my code",
  },
  {
    label: "Location",
    value: "Pune, India",
    icon: MapPin,
    link: null,
    description: "Open to opportunities",
  },
];