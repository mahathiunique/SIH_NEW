// src/data/courses.js
import tailoringImg from "../assets/tailoring.jpg";
import carpentryImg from "../assets/carpentry.jpg";
import automobileImg from "../assets/automobile.jpg";
import masonryImg from "../assets/masonry.jpg";
import computerImg from "../assets/computer.jpg";
import agricultureImg from "../assets/agriculture.jpg";
import hospitalityImg from "../assets/hospitality.jpg";
import plumbingImg from "../assets/plumbing.jpg";
import weldingImg from "../assets/welding.jpg";
import electricalImg from "../assets/electrical.jpg";

const courses = [
  {
    id: "plumbing",
    title: "Plumbing Basics",
    image: plumbingImg,
    progress: 50,
    duration: "6 weeks",
    description: `Plumbing basics cover installation and repair of water supply systems, drainage, and sanitation. Students learn practical plumbing skills including pipe fitting, leak repair, and safe water management.

With rising demand for urban infrastructure, plumbers are essential in residential, commercial, and industrial projects. This course equips learners for sustainable employment in the construction sector.`,
  },
  {
    id: "electrical",
    title: "Basic Electrical Wiring",
    image: electricalImg,
    progress: 70,
    duration: "8 weeks",
    description: `This course introduces the principles of electrical circuits, residential wiring, safety measures, and installation practices. Ideal for students looking to build a career in electrical maintenance.

Training emphasizes both theoretical understanding and hands-on practice, including reading wiring diagrams, basic fault finding and safe installation techniques.`,
  },
  {
    id: "carpentry",
    title: "Carpentry & Woodwork",
    image: carpentryImg,
    progress: 30,
    duration: "10 weeks",
    description: `Carpentry teaches woodworking fundamentals: measurement, cutting, joinery and finishing. Learners practice with hand and power tools to produce furniture and structural items.

The course covers blueprint reading, design basics, and finishing techniques — preparing learners for entry-level carpentry roles or small business projects.`,
  },
  {
    id: "automobile",
    title: "Automobile Servicing",
    image: automobileImg,
    progress: 10,
    duration: "12 weeks",
    description: `Automobile Servicing covers vehicle systems (engine, brakes, transmission, electrical). Students learn diagnostic methods, basic repairs and routine maintenance.

Practical workshops develop skills in inspection, servicing and safety. This prepares learners for garage or dealership roles.`,
  },
  {
    id: "tailoring",
    title: "Tailoring & Garment Making",
    image: tailoringImg,
    progress: 20,
    duration: "8 weeks",
    description: `Tailoring teaches measurement, cutting, stitching and garment finishing. Students use hand and machine techniques to produce apparel and perform alterations.

This course opens opportunities in tailoring shops, garment units and small businesses focused on custom clothing.`,
  },
  {
    id: "masonry",
    title: "Masonry & Construction",
    image: masonryImg,
    progress: 40,
    duration: "9 weeks",
    description: `Masonry covers bricklaying, plastering, tiling and basic construction techniques. Students practice mixing mortar, laying units and finishing surfaces.

The curriculum emphasizes accuracy, safety and durability — useful for work on construction sites and building maintenance.`,
  },
  {
    id: "computer",
    title: "Computer Hardware & Networking",
    image: computerImg,
    progress: 15,
    duration: "10 weeks",
    description: `Computer Hardware & Networking introduces assembly, troubleshooting, and basic networking concepts. Learners build and diagnose PCs, install OS and configure small networks.

This course prepares students for IT support roles and foundational networking tasks.`,
  },
  {
    id: "hospitality",
    title: "Hospitality & Food Service",
    image: hospitalityImg,
    progress: 25,
    duration: "8 weeks",
    description: `Hospitality & Food Service covers food preparation, hygiene, housekeeping and customer service. Trainees gain practical skills for hotels, cafes and catering.

The emphasis is on professionalism, safety and service standards important for hospitality careers.`,
  },
  {
    id: "welding",
    title: "Welding & Fabrication",
    image: weldingImg,
    progress: 35,
    duration: "12 weeks",
    description: `Welding & Fabrication covers arc welding, gas welding and fabrication techniques. Learners practice joining metals, reading fabrication drawings and ensuring weld quality.

Hands-on practice readies students for manufacturing, construction and repair roles.`,
  },
  {
    id: "agriculture",
    title: "Agriculture & Farming Basics",
    image: agricultureImg,
    progress: 60,
    duration: "14 weeks",
    description: `Agriculture & Farming Basics teaches soil prep, crop planning, sustainable practices and pest management. Students learn modern, low-cost farming techniques to boost yields.

The course supports rural livelihoods with practical, climate-smart farming methods.`,
  },
];

export default courses;
