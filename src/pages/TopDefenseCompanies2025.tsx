import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Target, Globe, Zap, Brain, Lock, Cpu, Cog, Leaf, Rocket, Crosshair, Bot, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useState } from "react";
import { EditableText } from "@/components/cms/EditableText";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Company {
  rank: number;
  name: string;
  region: string;
  score: number;
  context: string;
  isArsenal?: boolean;
  isNextUnicorn?: boolean;
}

interface VerticalData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  spark: Company[];
  forge: Company[];
  arsenal: Company[];
}

const verticals: VerticalData[] = [
  {
    id: "space",
    title: "01 Space",
    subtitle: "Orbit, Launch, Communications, ISR",
    icon: <Rocket className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Latitude Space", region: "FRA", score: 4.3, context: "Sovereign Launch. Developing the Zephyr rocket to secure French and European access to orbit via micro-launchers.", isNextUnicorn: true },
      { rank: 2, name: "Northwood Space", region: "USA", score: 4.3, context: "Ground Networks. Mass-manufacturing antenna terminals to alleviate the bottleneck in space communications for large constellations." },
      { rank: 3, name: "Long Wall", region: "USA", score: 4.3, context: "Rapid Launch. Manufacturing deployable launch vehicles and infrastructure for responsive defense missions in contested environments." },
      { rank: 4, name: "Apex Space", region: "USA", score: 4.2, context: "Satellite Bus. Mass-producing standardized satellite buses to accelerate payload deployment timelines for government customers." },
      { rank: 5, name: "Muon Space", region: "USA", score: 4.2, context: "Climate Constellation. Deploying a constellation of sensors for granular climate and environmental monitoring for global security." },
      { rank: 6, name: "Vast Space", region: "USA", score: 4.2, context: "Artificial Gravity. Developing commercial space stations with artificial gravity to support long-duration human habitation in orbit." },
      { rank: 7, name: "All.Space", region: "GBR", score: 4.2, context: "Multi-Orbit Comms. Building terminals capable of connecting to LEO, MEO, and GEO simultaneously for seamless connectivity." },
      { rank: 8, name: "Pixxel", region: "IND", score: 4.2, context: "Hyperspectral Imaging. Constellation providing high-resolution hyperspectral data for agriculture, mining, and tactical defense intelligence." },
      { rank: 9, name: "Turion Space", region: "USA", score: 4.1, context: "Space Logistics. Developing spacecraft for orbital debris removal and domain awareness to protect critical space assets." },
      { rank: 10, name: "CesiumAstro", region: "USA", score: 4.1, context: "Active Phased Arrays. Software-defined communication payloads for airborne and spaceborne platforms to ensure resilient communications." },
      { rank: 11, name: "Space Forge", region: "GBR", score: 4.1, context: "In-Space Manufacturing. Returnable satellites leveraging microgravity for advanced semiconductor production and pharmaceutical innovation." },
      { rank: 12, name: "Varda Space", region: "USA", score: 4.1, context: "Orbital Factory. Manufacturing specialized materials in microgravity with re-entry capsules for rapid Earth-side material return." },
      { rank: 13, name: "AstroForge", region: "USA", score: 4.1, context: "Asteroid Mining. Developing deep-space missions to refine and return platinum-group metals from asteroids for Earth's industry." },
      { rank: 14, name: "Privateer", region: "USA", score: 4.0, context: "Space Debris. Mapping orbital objects and debris to ensure flight safety and sustainability in crowded orbits." },
      { rank: 15, name: "Gilmour Space", region: "AUS", score: 4.0, context: "Hybrid Propulsion. Developing hybrid rocket technology for sovereign Australian launch capabilities and regional orbital access." },
      { rank: 16, name: "SkyFi", region: "USA", score: 4.0, context: "Earth Observation. Democratizing access to satellite imagery through an on-demand mobile platform for commercial and defense users." },
      { rank: 17, name: "Lodestar Space", region: "GBR", score: 4.0, context: "Dexterous Robotics. Robotic arms and vision systems for in-orbit servicing, assembly, and maintenance of satellites." },
      { rank: 18, name: "Inversion Space", region: "USA", score: 4.0, context: "Space Cargo. Developing re-entry capsules for rapid delivery of cargo from orbit to Earth for time-critical logistics." },
    ],
    forge: [
      { rank: 1, name: "Isar Aerospace", region: "DEU", score: 4.6, context: "European Launch. Leading the race for a sovereign heavy-lift launch vehicle to ensure EU strategic orbital access." },
      { rank: 2, name: "Albedo Space", region: "USA", score: 4.6, context: "VLEO Imaging. Flying satellites in very low earth orbit for aerial-grade resolution imagery for defense intelligence." },
      { rank: 3, name: "LeoLabs", region: "USA", score: 4.6, context: "Space Radar. Global network of phased-array radars tracking debris and emerging threats in low Earth orbit." },
      { rank: 4, name: "Stoke Space", region: "USA", score: 4.5, context: "Reusable Rocket. Developing a fully reusable second stage for rapid launch cadence and lower orbital costs." },
      { rank: 5, name: "Blue Origin", region: "USA", score: 4.5, context: "Heavy Infrastructure. Developing the New Glenn heavy-lift rocket and Blue Moon lander to establish a permanent supply chain." },
      { rank: 6, name: "Ursa Space", region: "USA", score: 4.5, context: "SAR Analytics. Virtual constellation aggregating SAR data from multiple providers for global intelligence and monitoring." },
      { rank: 7, name: "Exploration Co", region: "DEU", score: 4.5, context: "Modular Cargo. Developing the Nyx capsule for scalable cargo and crew transport to international space stations." },
      { rank: 8, name: "Lanteris", region: "USA", score: 4.4, context: "Satellite Prime. Manufacturing high-throughput GEO and LEO satellites for commercial and sovereign defense clients." },
      { rank: 9, name: "Slingshot Aero", region: "USA", score: 4.4, context: "Space Simulation. Digital twin platform for orbital warfare training and comprehensive space situational awareness for defense." },
      { rank: 10, name: "Loft Orbital", region: "USA", score: 4.4, context: "Infrastructure Service. Flying customer payloads on standardized buses to simplify space access and reduce hardware overhead." },
    ],
    arsenal: [
      { rank: 1, name: "SpaceX", region: "USA", score: 5.0, context: "Category King. Dominating global launch and communications with Starlink and Starship as the backbone of Western spacepower.", isArsenal: true },
      { rank: 2, name: "Iceye", region: "FIN", score: 4.9, context: "SAR Dominance. Largest constellation of radar satellites providing persistent monitoring regardless of weather or light conditions.", isArsenal: true },
      { rank: 3, name: "Sierra Nevada", region: "USA", score: 4.8, context: "Defense Prime. Building the Dream Chaser spaceplane and specialized ISR aircraft for multi-domain defense operations.", isArsenal: true },
      { rank: 4, name: "Hawkeye 360", region: "USA", score: 4.8, context: "RF Intelligence. Mapping radio frequency emissions from space to track dark ships and locate hidden electronic threats.", isArsenal: true },
      { rank: 5, name: "Axiom Space", region: "USA", score: 4.7, context: "Commercial Station. Building the successor to the ISS to maintain a permanent Western presence in orbit.", isArsenal: true },
      { rank: 6, name: "York Space Sys", region: "USA", score: 4.7, context: "Rapid Production. Mass-manufacturing satellite buses for the Space Development Agency and rapid-response tactical missions.", isArsenal: true },
      { rank: 7, name: "K2 Space", region: "USA", score: 4.7, context: "Monster Bus. Building massive satellite buses to maximize payload capacity on the next generation of heavy launchers.", isArsenal: true },
      { rank: 8, name: "Astranis", region: "USA", score: 4.7, context: "Micro-GEO. Dedicated internet satellites providing telecommunications sovereignty to nations at a fraction of traditional GEO costs.", isArsenal: true },
      { rank: 9, name: "Impulse Space", region: "USA", score: 4.7, context: "Orbital Tug. Last-mile delivery vehicles moving payloads to precise orbits after launch for maximum mission flexibility.", isArsenal: true },
      { rank: 10, name: "True Anomaly", region: "USA", score: 4.7, context: "Space Warfighting. Building Jackal autonomous orbital vehicles for pursuit and inspection missions in contested space domains.", isArsenal: true },
    ],
  },
  {
    id: "strike",
    title: "02 Strike / Energetics",
    subtitle: "Lethality, Hypersonics, Missiles",
    icon: <Crosshair className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "C-Astral", region: "SVN", score: 4.3, context: "Tactical ISR. Fixed-wing small UAS providing long-endurance reconnaissance and target acquisition for frontline ground units." },
      { rank: 2, name: "Mach Industries", region: "USA", score: 4.3, context: "Hydrogen Forge. Using hydrogen combustion for manufacturing and kinetic defense applications to create low-cost lethality." },
      { rank: 3, name: "Beehive Ind.", region: "USA", score: 4.3, context: "Jet Engines. Additive manufacturing of small turbine engines for low-cost drones and expendable missile systems." },
      { rank: 4, name: "Smart Shooter", region: "ISR", score: 4.3, context: "Fire Control. Smart optics turning standard infantry rifles into precision anti-drone kinetic interceptors for soldiers." },
      { rank: 5, name: "Fortem Tech", region: "USA", score: 4.2, context: "Drone Hunter. Radar-guided interceptor drones that capture threats with nets to minimize collateral damage." },
      { rank: 6, name: "Hypersonix", region: "AUS", score: 4.2, context: "Scramjet Test. Manufacturing reusable hypersonic test beds utilizing green hydrogen fuel for high-speed flight research." },
      { rank: 7, name: "Rocket Factory", region: "DEU", score: 4.2, context: "Precision Launch. Developing low-cost launchers that can double as rapid kinetic delivery systems for strategic strikes." },
      { rank: 8, name: "Firestorm Labs", region: "USA", score: 4.2, context: "Modular UAS. 3D-printing airframes in the field for rapid, low-cost drone deployment and tactical swarming." },
      { rank: 9, name: "Neros Tech", region: "USA", score: 4.1, context: "Heavy Lift. Building autonomous heavy-lift drones for battlefield logistics and kinetic payload delivery in contested zones." },
      { rank: 10, name: "Ares Industries", region: "USA", score: 4.1, context: "Cruise Missiles. Developing low-cost, mass-producible anti-ship cruise missiles to restore Western naval dominance." },
      { rank: 11, name: "Destinus", region: "CHE", score: 4.1, context: "Hypersonic Flight. Developing hydrogen-powered hypersonic aircraft for dual-use transport and rapid strike capabilities." },
      { rank: 12, name: "DefendTex", region: "AUS", score: 4.1, context: "Drone Grenade. Manufacturing the Drone40, a loitering munition launched from standard 40mm grenade launchers." },
      { rank: 13, name: "Frankenburg", region: "EST", score: 4.1, context: "Mass Missile. Developing affordable, mass-producible air defense missiles specifically for the security of Eastern European borders." },
      { rank: 14, name: "Darkhive", region: "USA", score: 4.0, context: "Swarm Software. Building open architecture software for autonomous drone swarms to operate in dense tactical environments." },
      { rank: 15, name: "Edge Autonomy", region: "USA", score: 4.0, context: "Global ISR. Manufacturing high-performance, long-endurance unmanned systems for intelligence, surveillance, and strike." },
      { rank: 16, name: "SwissDrones", region: "CHE", score: 4.0, context: "Heavy Lift. Developing twin-rotor unmanned helicopters for long-range, high-payload delivery missions in rugged terrain." },
      { rank: 17, name: "Skyeton", region: "UKR", score: 3.9, context: "Aerial Recon. Producing the Raybird-3 system for long-range persistent surveillance and fire correction." },
    ],
    forge: [
      { rank: 1, name: "Terminal Auto", region: "UKR", score: 4.6, context: "Mass Loitering. Producing cost-effective, long-range loitering munitions at scale for active conflict and deep strikes." },
      { rank: 2, name: "Tata Adv Sys", region: "IND", score: 4.6, context: "Strategic Partner. Manufacturing aerospace structures and integrated defense systems for major global aerospace primes." },
      { rank: 3, name: "Fire Point", region: "UKR", score: 4.5, context: "Strike Drone. Developing long-range strike UAVs and cruise missiles for deep tactical strikes in modern warfare." },
      { rank: 4, name: "Stark Defence", region: "DEU", score: 4.5, context: "European Loitering. Specializing in unmanned systems and loitering munitions for NATO forces in continental defense." },
      { rank: 5, name: "Terma A/S", region: "DNK", score: 4.5, context: "Electronic Defense. Providing self-protection systems and advanced radar for aircraft and naval vessels for strike survival." },
      { rank: 6, name: "SYPAQ", region: "AUS", score: 4.5, context: "Cardboard Drone. Manufacturing the Corvo, a low-cost, expendable logistics and surveillance drone for high-attrition environments." },
      { rank: 7, name: "NIOA", region: "AUS", score: 4.4, context: "Munitions Prime. Largest Australian supplier of weapons and munitions to the Australian Defence Force and allies." },
      { rank: 8, name: "Stratolaunch", region: "USA", score: 4.4, context: "Hypersonic Test. World's largest aircraft air-launch platform providing high-speed flight environments for hypersonic testing." },
      { rank: 9, name: "Allen Control", region: "USA", score: 4.4, context: "Kinetic Intercept. Building autonomous robotic gun systems to shoot down fast-moving drone threats with extreme precision." },
      { rank: 10, name: "Venus Aero", region: "USA", score: 4.4, context: "Detonation Engine. Developing rotating detonation rocket engines for high-speed hypersonic flight and global reach." },
    ],
    arsenal: [
      { rank: 1, name: "Shield AI", region: "USA", score: 5.0, context: "AI Pilot. Hivemind software enabling drones to operate autonomously in GPS-denied and highly contested environments.", isArsenal: true },
      { rank: 2, name: "Anduril", region: "USA", score: 5.0, context: "Defense Unicorn. Building Lattice OS and a suite of autonomous defense hardware rapidly for multi-domain awareness.", isArsenal: true },
      { rank: 3, name: "KNDS", region: "FRA", score: 4.9, context: "Land Giant. European leader in main battle tanks and armored vehicle systems for continental land defense.", isArsenal: true },
      { rank: 4, name: "CSG", region: "CZE", score: 4.8, context: "Ammo Base. Major producer of large-caliber ammunition and ground systems for NATO and allied partners.", isArsenal: true },
      { rank: 5, name: "Diehl Defence", region: "DEU", score: 4.8, context: "Air Defense. Manufacturer of the IRIS-T air defense system protecting critical infrastructure from aerial threats.", isArsenal: true },
      { rank: 6, name: "Castelion", region: "USA", score: 4.7, context: "Hypersonic Weapon. Agile development of long-range hypersonic strike weapons to counter peer adversary missile systems.", isArsenal: true },
      { rank: 7, name: "Ursa Major", region: "USA", score: 4.7, context: "Merchant Engines. Manufacturing rocket engines for missiles, space launch, and hypersonics for the Western alliance.", isArsenal: true },
      { rank: 8, name: "X-Bow", region: "USA", score: 4.7, context: "Solid Motors. 3D-printing solid rocket motors to modernize the missile industrial base and tactical logistics.", isArsenal: true },
      { rank: 9, name: "UVision", region: "ISR", score: 4.7, context: "Hero Series. Pioneer of loitering munition systems offering precision strike capabilities with multiple platform variants.", isArsenal: true },
      { rank: 10, name: "John Cockerill", region: "BEL", score: 4.7, context: "Turret Systems. Global leader in light tank turrets and firing systems for ground vehicles and installations.", isArsenal: true },
    ],
  },
  {
    id: "autonomous",
    title: "03 Autonomous Systems",
    subtitle: "Platforms, Swarms, UUVs",
    icon: <Bot className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "HavocAI", region: "USA", score: 4.3, context: "Maritime Swarm. Software enabling low-cost uncrewed surface vessels to operate as a coordinated, autonomous swarm." },
      { rank: 2, name: "Astro Mechanica", region: "USA", score: 4.3, context: "Adaptive Engine. Developing turbo-electric adaptive engines for high-performance efficient flight across subsonic and supersonic regimes." },
      { rank: 3, name: "Scout AI", region: "USA", score: 4.2, context: "Space Awareness. Developing systems for orbital domain awareness and satellite inspection to protect sovereign space-based infrastructure." },
      { rank: 4, name: "Swarmbiotics", region: "USA", score: 4.2, context: "Robotic Teaming. Creating swarms of small robots for logistics and mine clearing operations in austere land environments." },
      { rank: 5, name: "Overland AI", region: "USA", score: 4.2, context: "Off-Road Autonomy. Software enabling ground vehicles to traverse complex off-road terrain autonomously at high speeds." },
      { rank: 6, name: "Arondite", region: "USA", score: 4.2, context: "Autonomous Weapons. Integrating autonomy into legacy weapon systems for force multiplication and reduced operator cognitive load." },
      { rank: 7, name: "Origin Robotics", region: "LVA", score: 4.1, context: "Precision Drop. Developing drone-delivered precision guided munitions systems for tactical use on the Eastern European frontlines." },
      { rank: 8, name: "Orca AI", region: "ISR", score: 4.1, context: "Maritime Vision. AI-based navigation and collision avoidance systems for commercial and naval vessels in congested littoral waters." },
      { rank: 9, name: "Asylon", region: "USA", score: 4.1, context: "Drone in Box. Automated perimeter security using robotic dogs and drones with integrated charging bases." },
      { rank: 10, name: "Heven Drones", region: "ISR", score: 4.1, context: "Hydrogen Flight. Heavy-lift hydrogen-powered drones for long-endurance logistics and mission support in remote regions." },
      { rank: 11, name: "VATN Systems", region: "USA", score: 4.1, context: "Subsea Swarm. Low-cost autonomous underwater vehicles for networked subsea defense and persistent maritime domain awareness." },
      { rank: 12, name: "Norda Dynamics", region: "EST", score: 4.0, context: "UGV Software. Autonomy stack designed specifically for off-road ground vehicles operating in high-obstruction terrain." },
      { rank: 13, name: "Sea Machines", region: "USA", score: 4.0, context: "Vessel Autonomy. Retrofitting workboats and patrol craft with autonomous command and control systems for maritime security." },
      { rank: 14, name: "Electra Aero", region: "USA", score: 4.0, context: "eSTOL Aircraft. Hybrid-electric short takeoff and landing aircraft for runway-independent logistics and persistent troop transport." },
      { rank: 15, name: "Metal Shark", region: "USA", score: 4.0, context: "Fast Boats. Designing and building high-speed aluminum vessels for military, law enforcement, and autonomous USV integration." },
      { rank: 16, name: "ACUA Ocean", region: "GBR", score: 4.0, context: "Hydrogen USV. Long-endurance hydrogen-powered uncrewed surface vessels for persistent ocean monitoring and infrastructure security." },
      { rank: 17, name: "DeltaQuad", region: "NLD", score: 3.9, context: "VTOL Surveillance. Long-range VTOL fixed-wing drones for high-resolution mapping and reconnaissance missions in contested sectors." },
      { rank: 18, name: "Kraken Tech", region: "GBR", score: 3.9, context: "Littoral Combat. Building high-performance, autonomous-capable vessels for maritime security and high-speed littoral interception." },
    ],
    forge: [
      { rank: 1, name: "Auterion", region: "USA", score: 4.6, context: "Drone OS. Open-source standard operating system for diverse enterprise and defense drone fleets across air and land." },
      { rank: 2, name: "Quantum Systems", region: "DEU", score: 4.6, context: "Vector VTOL. Advanced eVTOL drones used widely for tactical reconnaissance and precision targeting in contested environments." },
      { rank: 3, name: "Elroy Air", region: "USA", score: 4.5, context: "Cargo VTOL. The Chaparral autonomous aircraft designed for middle-mile logistics and automated supply chain delivery." },
      { rank: 4, name: "DZYNE Tech", region: "USA", score: 4.5, context: "Long Endurance. Designing and manufacturing long-endurance unmanned aerial systems for persistent defense and national security missions." },
      { rank: 5, name: "Blue Water Auto", region: "USA", score: 4.5, context: "Maritime Ops. Developing advanced software and hardware systems for autonomous maritime logistics and coastal defense operations." },
      { rank: 6, name: "Wingcopter", region: "DEU", score: 4.5, context: "Delivery Drone. High-performance tilt-rotor drones for rapid medical, humanitarian, and logistical delivery over long distances." },
      { rank: 7, name: "Raphe mPhibr", region: "IND", score: 4.4, context: "Indigenous UAV. Developing a full range of unmanned aerial systems for the Indian armed forces." },
      { rank: 8, name: "Merlin Labs", region: "USA", score: 4.4, context: "Cockpit Autonomy. Converting existing crewed aircraft platforms like the C-130 into fully autonomous heavy-lift logistics platforms." },
      { rank: 9, name: "Intra Defense", region: "SAU", score: 4.4, context: "Saudi UAS. Developing indigenous UAV capabilities and mission systems for the Kingdom of Saudi Arabia's security." },
      { rank: 10, name: "Arx Robotics", region: "DEU", score: 4.4, context: "Ground Autonomy. Scaling modular unmanned ground vehicle platforms for NATO land forces to perform logistics and patrol." },
    ],
    arsenal: [
      { rank: 1, name: "General Atomics", region: "USA", score: 5.0, context: "Predator Maker. The incumbent prime for medium-altitude, long-endurance combat drones and global intelligence and reconnaissance.", isArsenal: true },
      { rank: 2, name: "Baykar Tech", region: "TUR", score: 5.0, context: "TB2 Famous. Manufacturer of the combat-proven Bayraktar TB2 tactical drone and the advanced Akinci long-endurance platform.", isArsenal: true },
      { rank: 3, name: "Zipline", region: "USA", score: 4.9, context: "Logistics King. World's largest autonomous delivery network, now adapting its technology for critical defense logistics.", isArsenal: true },
      { rank: 4, name: "Saronic", region: "USA", score: 4.8, context: "Autonomous Navy. Building scalable, software-defined autonomous surface vessels for naval force multiplication and maritime dominance.", isArsenal: true },
      { rank: 5, name: "Echodyne", region: "USA", score: 4.8, context: "Compact Radar. Metamaterial radars providing high-performance, low-SWaP sensing for drones, ground vehicles, and persistent security.", isArsenal: true },
      { rank: 6, name: "Skydio", region: "USA", score: 4.8, context: "Vision Autonomy. Drones that navigate using visual SLAM and AI, critical for operating in GPS-denied contested areas.", isArsenal: true },
      { rank: 7, name: "Tekever", region: "PRT", score: 4.7, context: "Maritime ISR. Providing long-endurance unmanned aerial systems for patrolling European waters and securing maritime routes.", isArsenal: true },
      { rank: 8, name: "Applied Intuition", region: "USA", score: 4.7, context: "Autonomy Sim. Software platform for testing, validating, and certifying autonomous vehicle stacks for defense and commercial use.", isArsenal: true },
      { rank: 9, name: "Saildrone", region: "USA", score: 4.7, context: "Ocean Data. Wind-powered uncrewed surface vessels collecting vital ocean data for climate science and national security.", isArsenal: true },
      { rank: 10, name: "REGENT", region: "USA", score: 4.6, context: "Sea Glider. Electric wing-in-ground effect vehicles for high-speed maritime logistics and low-altitude troop transport.", isArsenal: true },
    ],
  },
  {
    id: "intelligence",
    title: "04 Intelligence, AI & EW",
    subtitle: "The Brain, Sensors, Spectrum",
    icon: <Brain className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Primer AI", region: "USA", score: 4.3, context: "NLP Intel. Natural language processing software designed to analyze vast quantities of unstructured text for real-time intelligence." },
      { rank: 2, name: "Rebellion Defense", region: "USA", score: 4.3, context: "Mission Software. Developing AI software for analyzing video, cyber, and sensor data to detect threats at mission speed." },
      { rank: 3, name: "Blackbird.AI", region: "USA", score: 4.3, context: "Narrative Intel. AI platform tracking disinformation and narrative manipulation campaigns to protect public and national security." },
      { rank: 4, name: "CX2", region: "USA", score: 4.2, context: "Stealth AI. Developing next-generation AI tools and algorithms for highly classified defense and intelligence community applications." },
      { rank: 5, name: "Second Front", region: "USA", score: 4.2, context: "Gov Cloud. Accelerating software accreditation and deployment onto classified networks for modern software-defined warfighting." },
      { rank: 6, name: "Rivet AR", region: "USA", score: 4.2, context: "Tactical AR. Augmented reality interfaces for soldier situational awareness, synthetic training, and battlefield data visualization." },
      { rank: 7, name: "Dropzone AI", region: "USA", score: 4.2, context: "Security Agent. AI analysts that automate the investigation of cyber security alerts for rapid threat hunting." },
      { rank: 8, name: "Enveil", region: "USA", score: 4.1, context: "Encrypted Search. Privacy-enhancing technology allowing search and analysis of encrypted data without ever decrypting information." },
      { rank: 9, name: "Aalyria", region: "USA", score: 4.1, context: "Laser Mesh. Atmospheric laser communications software orchestrating complex, high-bandwidth networks across ground, air, and space." },
      { rank: 10, name: "Ayar Labs", region: "USA", score: 4.1, context: "Optical I/O. Chip-to-chip optical connectivity for high-performance AI compute clusters, reducing latency and power." },
      { rank: 11, name: "Faculty AI", region: "GBR", score: 4.1, context: "Applied AI. Implementing AI systems for government decision-making, resource allocation, and advanced operational planning." },
      { rank: 12, name: "MyDefence", region: "DNK", score: 4.1, context: "Wearable EW. RF sensors and jammers worn by soldiers to detect and counter hostile drones." },
      { rank: 13, name: "Comand AI", region: "FRA", score: 4.0, context: "Battlefield OS. AI-enabled command and control software designed for the speed and complexity of military operations." },
      { rank: 14, name: "Kela", region: "ISR", score: 4.0, context: "Cyber Intel. Dark web threat intelligence platform monitoring criminal ecosystems for emerging threats to security." },
      { rank: 15, name: "Prisma Photonics", region: "ISR", score: 4.0, context: "Fiber Sensing. Using existing fiber optic cables as distributed sensors for high-fidelity infrastructure monitoring." },
      { rank: 16, name: "Rowden Tech", region: "GBR", score: 4.0, context: "Edge Data. Digitalizing tactical networks for better data sharing and situational awareness at the forward edge." },
      { rank: 17, name: "Project Q", region: "GBR", score: 4.0, context: "Quantum Secure. Developing quantum-resilient communications and encryption for long-term defense and national security requirements." },
      { rank: 18, name: "Latent AI", region: "USA", score: 3.5, context: "Edge ML. Optimization tools for deploying machine learning models to power-constrained edge devices and tactical sensors." },
    ],
    forge: [
      { rank: 1, name: "Mistral AI", region: "FRA", score: 4.6, context: "European LLM. Open-weight foundation models offering a sovereign AI alternative for secure government and defense use." },
      { rank: 2, name: "Harmattan AI", region: "USA", score: 4.6, context: "Defense AI. Specialized AI agents for defense planning, wargaming simulations, and complex decision support." },
      { rank: 3, name: "Onebrief", region: "USA", score: 4.6, context: "Agile Planning. Modernizing military staff workflows and operation planning software for rapid command and control synchronization." },
      { rank: 4, name: "Exiger", region: "USA", score: 4.5, context: "Supply Chain. AI platform for supply chain risk management, compliance, and mapping of critical defense industrial bases." },
      { rank: 5, name: "Chaos Industries", region: "USA", score: 4.5, context: "Rapid Engineering. Developing advanced sensor and effector systems for defense with a focus on rapid prototyping." },
      { rank: 6, name: "Armada", region: "USA", score: 4.5, context: "Edge Computing. Full-stack edge computing platform designed to operate in remote, austere, and disconnected battlefield environments." },
      { rank: 7, name: "Adarga", region: "GBR", score: 4.5, context: "Info Analysis. AI platform extracting actionable insights from vast amounts of unstructured data for intelligence analysts." },
      { rank: 8, name: "Avathon", region: "USA", score: 4.4, context: "Industrial AI. Providing AI solutions for monitoring, maintaining, and optimizing critical industrial and defense manufacturing assets." },
      { rank: 9, name: "Hidden Level", region: "USA", score: 4.4, context: "Low Altitude. Distributed sensor network for high-fidelity tracking of low-altitude air traffic and emerging drone threats." },
      { rank: 10, name: "Hebbia", region: "USA", score: 4.4, context: "Neural Search. AI-powered search engine capable of answering complex, multi-layered questions from massive datasets." },
    ],
    arsenal: [
      { rank: 1, name: "Anthropic", region: "USA", score: 5.0, context: "Safety AI. Building steerable, interpretable, and safe AI systems for high-stakes missions and critical applications.", isArsenal: true },
      { rank: 2, name: "Scale AI", region: "USA", score: 5.0, context: "Data Engine. The essential data labeling and management infrastructure required for training and validating defense AI models.", isArsenal: true },
      { rank: 3, name: "Helsing", region: "DEU", score: 4.9, context: "AI Defence. Software-defined defense systems integrating AI into sensors and effectors for real-time battlefield decision advantage.", isArsenal: true },
      { rank: 4, name: "Vantor", region: "USA", score: 4.8, context: "Stealth Tech. Advanced software and sensor fusion capabilities for national security missions requiring high-resolution global awareness.", isArsenal: true },
      { rank: 5, name: "Altana AI", region: "USA", score: 4.8, context: "Trade Map. Creating a dynamic, AI-powered map of the global supply chain to identify risks and vulnerabilities.", isArsenal: true },
      { rank: 6, name: "Epirus", region: "USA", score: 4.8, context: "HPM Defense. High-power microwave systems designed to electronically disable drone swarms and protect critical infrastructure.", isArsenal: true },
      { rank: 7, name: "Picogrid", region: "USA", score: 4.7, context: "Sensor Open. Unified platform connecting disparate sensors for base defense and autonomous operational coordination.", isArsenal: true },
      { rank: 8, name: "Peraton", region: "USA", score: 4.7, context: "Mission Integration. Major private integrator of space, intelligence, and cyber solutions for the U.S. government.", isArsenal: true },
      { rank: 9, name: "Govini", region: "USA", score: 4.7, context: "Acquisition Data. Data-driven decision science platform for modernizing defense acquisition and supply chain resilience.", isArsenal: true },
      { rank: 10, name: "Vannevar Labs", region: "USA", score: 4.7, context: "Decrypt Tools. Software for intelligence analysis and translation in forward-deployed environments to support tactical operations.", isArsenal: true },
    ],
  },
  {
    id: "cyber",
    title: "05 Cybersecurity",
    subtitle: "The Shield, OT/ICS Defense",
    icon: <Lock className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Horizon3.ai", region: "US", score: 2.0, context: "Autonomous pentesting platform for continuous security validation." },
      { rank: 2, name: "Chainguard", region: "US", score: 2.0, context: "Supply chain security; developing the Wolfi OS for minimal attack surface." },
      { rank: 3, name: "Nozomi Networks", region: "US", score: 1.8, context: "OT/ICS visibility and security platform." },
      { rank: 4, name: "Xage", region: "US", score: 1.7, context: "Zero Trust for Grid and OT environments." },
      { rank: 5, name: "Noma Security", region: "IL", score: 1.7, context: "Stealth/Seed; focused on securing AI data pipelines." },
      { rank: 6, name: "Bastille", region: "US", score: 1.5, context: "RF sensing for SCIF security and wireless threat detection." },
      { rank: 7, name: "SOC Prime", region: "US", score: 1.3, context: "\"Detection as Code\" platform widely used for threat detection." },
      { rank: 8, name: "Blast Security", region: "IL", score: 1.2, context: "Early-stage cloud defense and security platform (Seed)." },
      { rank: 9, name: "1Password", region: "CA", score: 1.2, context: "Enterprise password management with high security standards." },
      { rank: 10, name: "Eclypsium", region: "US", score: 1.2, context: "Hardware and firmware visibility for supply chain defense." },
    ],
    forge: [
      { rank: 1, name: "Netskope", region: "US", score: 2.7, context: "SASE leader; strong presence in cloud security for government." },
      { rank: 2, name: "Shift5", region: "US", score: 2.7, context: "OT security for rail and aerospace mission systems." },
      { rank: 3, name: "Illumio", region: "US", score: 2.5, context: "Zero Trust segmentation for critical network protection." },
      { rank: 4, name: "XBOW", region: "US", score: 2.5, context: "AI offensive security for automated penetration testing." },
      { rank: 5, name: "Pentera", region: "IL", score: 2.3, context: "Automated pentesting and security validation (Unicorn)." },
      { rank: 6, name: "Cybereason", region: "IL", score: 2.3, context: "Endpoint Detection and Response (EDR) platform; restructuring." },
      { rank: 7, name: "Corelight", region: "US", score: 2.3, context: "Network Detection and Response (NDR) leveraging open-source Zeek." },
      { rank: 8, name: "Gatewatcher", region: "EU", score: 2.3, context: "Sovereign NDR growth supporting European cyber defense." },
      { rank: 9, name: "HiddenLayer", region: "US", score: 2.2, context: "MLDR leader focused on AI Model Security (Series A)." },
      { rank: 10, name: "Axonius", region: "US", score: 2.1, context: "Cyber Asset Management platform; crucial for large-scale inventory." },
    ],
    arsenal: [
      { rank: 1, name: "Dragos", region: "US", score: 3.5, context: "OT/ICS Defense prime; strong DOE and critical infrastructure partnership.", isArsenal: true },
      { rank: 2, name: "Claroty", region: "US", score: 3.3, context: "Cyber-physical systems protection for industrial control.", isArsenal: true },
      { rank: 3, name: "Wiz", region: "IL/US", score: 3.2, context: "$12B valuation; leading Cloud Native Application Protection Platform (CNAPP).", isArsenal: true },
      { rank: 4, name: "Armis", region: "IL", score: 3.0, context: "Asset Intelligence for OT/IoT security.", isArsenal: true },
      { rank: 5, name: "Tanium", region: "US", score: 2.8, context: "Converged Endpoint Management; deep usage across the DoD enterprise.", isArsenal: true },
      { rank: 6, name: "Cato Networks", region: "IL", score: 2.5, context: "SASE leader; $3B valuation, pre-IPO.", isArsenal: true },
      { rank: 7, name: "Arctic Wolf", region: "US", score: 2.5, context: "Security Operations (SOC) platform with a concierge service model.", isArsenal: true },
      { rank: 8, name: "Island", region: "US", score: 2.1, context: "Enterprise Browser for enhanced security and governance.", isArsenal: true },
      { rank: 9, name: "Coalition", region: "US", score: 1.4, context: "$5B valuation; major player in cyber insurance and risk mitigation.", isArsenal: true },
      { rank: 10, name: "Snyk", region: "UK", score: 1.3, context: "Developer security (DevSec) platform focused on code vulnerabilities.", isArsenal: true },
    ],
  },
  {
    id: "quantum",
    title: "06 Quantum, Compute & PNT",
    subtitle: "The Future, Semiconductors",
    icon: <Cpu className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "SiMa.ai", region: "US", score: 1.8, context: "Embedded edge ML system-on-chip for real-time applications." },
      { rank: 2, name: "Quantum Source", region: "IL", score: 1.7, context: "Photonic quantum computing with major Series A funding." },
      { rank: 3, name: "Oxford Ionics", region: "EU", score: 1.7, context: "Ion trap quantum computing; achieving record qubit fidelity." },
      { rank: 4, name: "Mythic", region: "US", score: 1.6, context: "Analog AI compute for highly efficient edge inference." },
      { rank: 5, name: "Graphcore", region: "UK", score: 1.6, context: "IPU hardware for AI compute (private acquisition by Softbank noted)." },
      { rank: 6, name: "Xanadu", region: "CA", score: 1.5, context: "Photonic quantum computing platform (Series C)." },
      { rank: 7, name: "Qrypt", region: "US", score: 1.3, context: "Quantum-secure encryption preventing 'harvest now, decrypt later' attacks." },
      { rank: 8, name: "Etched", region: "US", score: 1.3, context: "Transformer ASIC development for large model inference (Series A)." },
      { rank: 9, name: "Terra Quantum", region: "EU", score: 1.2, context: "Quantum algorithms and software development." },
      { rank: 10, name: "Aliro Quantum", region: "US", score: 1.2, context: "Quantum networking and infrastructure platform." },
    ],
    forge: [
      { rank: 1, name: "Atom Computing", region: "US", score: 3.2, context: "Neutral atom quantum computing; DARPA contract; targeting 1000+ qubits." },
      { rank: 2, name: "d-Matrix", region: "US", score: 2.9, context: "In-memory compute for AI; solving data movement bottlenecks." },
      { rank: 3, name: "Pasqal", region: "EU", score: 2.5, context: "Neutral atom quantum computing; strong European backing." },
      { rank: 4, name: "IQM", region: "EU", score: 2.5, context: "Quantum hardware sales focused on superconducting systems." },
      { rank: 5, name: "Enfabrica", region: "US", score: 2.5, context: "AI Networking chips for high-performance clusters." },
      { rank: 6, name: "Infleqtion", region: "US", score: 2.3, context: "PNT and atomic clock sensors for GPS-denied navigation." },
      { rank: 7, name: "Black Semiconductor", region: "EU", score: 2.2, context: "Graphene-based semiconductors for high-speed computing." },
      { rank: 8, name: "QuEra", region: "US", score: 2.1, context: "Neutral atom quantum computing; strong Series A with government interest." },
      { rank: 9, name: "Tenstorrent", region: "US", score: 1.8, context: "RISC-V AI chips; focused on competitive acceleration." },
      { rank: 10, name: "Armada", region: "US", score: 1.8, context: "Edge computing for defense; Starlink integration for connectivity." },
    ],
    arsenal: [
      { rank: 1, name: "PsiQuantum", region: "US", score: 4.2, context: "Photonic fault-tolerant quantum computing; major Australia deal.", isArsenal: true },
      { rank: 2, name: "Cerebras", region: "US", score: 3.5, context: "Wafer-scale engine; massive AI training clusters.", isArsenal: true },
      { rank: 3, name: "Groq", region: "US", score: 3.5, context: "LPU for Inference; achieving massive token speed and low latency.", isArsenal: true },
      { rank: 4, name: "SandboxAQ", region: "US", score: 3.3, context: "GPS-denied navigation flight tests and PNT solutions.", isArsenal: true },
      { rank: 5, name: "CoreWeave", region: "US", score: 3.2, context: "GPU Cloud for AI; rapid expansion of critical compute infrastructure.", isArsenal: true },
      { rank: 6, name: "Lightmatter", region: "US", score: 3.1, context: "Photonic computing hardware for high-speed data movement.", isArsenal: true },
      { rank: 7, name: "Lambda", region: "US", score: 2.7, context: "GPU Cloud provider; essential infrastructure for AI workloads.", isArsenal: true },
      { rank: 8, name: "SambaNova", region: "US", score: 2.7, context: "Full stack AI hardware and software platform.", isArsenal: true },
      { rank: 9, name: "Quantinuum", region: "US", score: 2.0, context: "Spinout; $5B valuation; leading integrated quantum solutions.", isArsenal: true },
      { rank: 10, name: "SiFive", region: "US", score: 1.8, context: "Leader in RISC-V architecture for next-gen semiconductor design.", isArsenal: true },
    ],
  },
  {
    id: "manufacturing",
    title: "07 Manufacturing & Robotics",
    subtitle: "The Maker, 3D Printing",
    icon: <Cog className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Xaba", region: "CA", score: 1.8, context: "Manufacturing AI for controlling and optimizing aerospace part production." },
      { rank: 2, name: "Sift", region: "US", score: 1.5, context: "Hardware telemetry stack for industrial data analysis (Series A)." },
      { rank: 3, name: "Freeform", region: "US", score: 1.5, context: "Stealth/Seed; metal printing engines using advanced 3D printing." },
      { rank: 4, name: "PickNik", region: "US", score: 1.5, context: "Robotics arms software; involved in Space Force robotics." },
      { rank: 5, name: "Machina Labs", region: "US", score: 1.5, context: "Robotics; AI-driven metal forming for complex geometries." },
      { rank: 6, name: "Fortify", region: "US", score: 1.5, context: "3D printing of advanced composites for high-performance parts." },
      { rank: 7, name: "1X", region: "EU", score: 1.2, context: "Series B; developing Androids with human-like capabilities." },
      { rank: 8, name: "BionicHIVE", region: "IL", score: 1.2, context: "Warehouse automation with the \"Squid\" climbing robot." },
      { rank: 9, name: "Robust.AI", region: "US", score: 1.1, context: "Mobile; collaborative robots focusing on human-robot interaction." },
      { rank: 10, name: "Apptronik", region: "US", score: 1.1, context: "\"Apollo\" humanoid robot launched for commercial and dual-use tasks." },
    ],
    forge: [
      { rank: 1, name: "Agility Robotics", region: "US", score: 2.7, context: "\"Digit\" bipedal humanoid robot; running major industry pilots." },
      { rank: 2, name: "Gecko Robotics", region: "US", score: 2.3, context: "Wall-climbing robots for infrastructure inspection (Series C)." },
      { rank: 3, name: "Re:Build Mfg", region: "US", score: 2.3, context: "Industrial manufacturing group focused on rebuilding the US industrial base." },
      { rank: 4, name: "ARX Robotics", region: "EU", score: 1.9, context: "Modular, mass-producible ground bots for logistics and support." },
      { rank: 5, name: "Anybotics", region: "EU", score: 1.8, context: "\"ANYmal\" quadruped robot for industrial inspection." },
      { rank: 6, name: "Stratom", region: "US", score: 1.7, context: "Autonomous refueling and logistics systems for military use." },
      { rank: 7, name: "Outrider", region: "US", score: 1.6, context: "Autonomous yard operations for logistics and distribution centers." },
      { rank: 8, name: "Kodiak", region: "US", score: 1.6, context: "Autonomous trucking for Army ground transport pilots." },
      { rank: 9, name: "UVeye", region: "IL", score: 1.5, context: "Automated vehicle inspection systems for security and quality control." },
      { rank: 10, name: "Carbon", region: "US", score: 1.2, context: "Digital Light Synthesis (DLS) for polymer mass production." },
    ],
    arsenal: [
      { rank: 1, name: "Hadrian", region: "US", score: 3.3, context: "Automated precision factory for high-mix, low-volume space/defense parts.", isArsenal: true },
      { rank: 2, name: "VulcanForms", region: "US", score: 3.1, context: "Industrial laser fusion (3D printing) for large, critical engine/grid parts.", isArsenal: true },
      { rank: 3, name: "Icon", region: "US", score: 2.7, context: "\"Vulcan\" printer used for building military barracks and critical structures.", isArsenal: true },
      { rank: 4, name: "Figure", region: "US", score: 2.5, context: "Humanoid robot with major OpenAI development partnership.", isArsenal: true },
      { rank: 5, name: "Divergent", region: "US", score: 2.5, context: "DAPS system; factory focused on lightweight, optimized vehicle structures.", isArsenal: true },
      { rank: 6, name: "Locus Robotics", region: "US", score: 2.1, context: "Unicorn; large-scale warehouse automation for logistics.", isArsenal: true },
      { rank: 7, name: "Exotec", region: "EU", score: 2.1, context: "Unicorn; 3D warehouse robotics for high-density storage and retrieval.", isArsenal: true },
      { rank: 8, name: "Formlabs", region: "US", score: 1.9, context: "Distributed 3D printing for medical, dental, and rapid prototyping.", isArsenal: true },
      { rank: 9, name: "Seurat Technologies", region: "US", score: 1.8, context: "Area Printing for high-volume, low-cost metal additive manufacturing.", isArsenal: true },
      { rank: 10, name: "Covariant", region: "US", score: 0.7, context: "AI for advanced robotic picking in complex logistics environments.", isArsenal: true },
    ],
  },
  {
    id: "resources",
    title: "08 Strategic Resources",
    subtitle: "Resilience, Power, Bio-Industrial",
    icon: <Leaf className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Aalo Atomics", region: "US", score: 2.2, context: "Developing advanced micro-nuclear reactors (Seed)." },
      { rank: 2, name: "Base Power", region: "US", score: 2.0, context: "Distributed battery storage for grid resilience and power stability." },
      { rank: 3, name: "Radiant", region: "US", score: 2.0, context: "Portable nuclear micro-reactors; 'Kaleidos' designed as a diesel-killer." },
      { rank: 4, name: "Sakuu", region: "US", score: 1.8, context: "3D printed solid state batteries for lightweight, high-density power." },
      { rank: 5, name: "Phoenix Tailings", region: "US", score: 1.8, context: "Rare earth refining from mining tailings; advancing domestic supply." },
      { rank: 6, name: "LanzaJet", region: "US", score: 1.5, context: "Sustainable Aviation Fuel (SAF) production technology." },
      { rank: 7, name: "Upeppo", region: "IL", score: 1.5, context: "Bio-inspired geolocation and navigation systems (Seed)." },
      { rank: 8, name: "Checkerspot", region: "US", score: 1.4, context: "Algae materials for advanced composites and industrial products." },
      { rank: 9, name: "Amphista", region: "EU", score: 1.2, context: "Protein degradation pharmaceuticals (Series B)." },
      { rank: 10, name: "Electric Hydrogen", region: "US", score: 1.2, context: "Electrolyzers for large-scale, clean hydrogen production." },
    ],
    forge: [
      { rank: 1, name: "BioMADE", region: "US", score: 3.5, context: "DoD Institute driving the US bio-industrial ecosystem and resilience." },
      { rank: 2, name: "Nth Cycle", region: "US", score: 3.0, context: "Electro-extraction of critical minerals for domestic refining." },
      { rank: 3, name: "Lyten", region: "US", score: 2.7, context: "3D Graphene; developing advanced Li-Sulfur battery chemistry." },
      { rank: 4, name: "Niron Magnetics", region: "US", score: 2.5, context: "Clean Earth Magnets; rare-earth-free permanent magnets." },
      { rank: 5, name: "Antheia", region: "US", score: 2.5, context: "Bio-manufacturing for essential medicines and pharmaceuticals." },
      { rank: 6, name: "DNA Script", region: "EU", score: 2.5, context: "Enzymatic DNA synthesis (printer) for rapid biological response." },
      { rank: 7, name: "Ascend Elements", region: "US", score: 2.5, context: "Battery recycling and engineered cathode materials for independence." },
      { rank: 8, name: "Lilac Solutions", region: "US", score: 2.5, context: "Lithium extraction technology to unlock US lithium reserves." },
      { rank: 9, name: "Antares", region: "US", score: 2.2, context: "Micro-nuclear reactors designed for forward operating base \"pico-grids.\"" },
      { rank: 10, name: "Antora Energy", region: "US", score: 2.0, context: "Thermal battery storage for industrial heat and grid applications." },
    ],
    arsenal: [
      { rank: 1, name: "KoBold Metals", region: "US", score: 4.0, context: "AI exploration for critical minerals; major copper find in Zambia.", isArsenal: true },
      { rank: 2, name: "Commonwealth Fusion", region: "US", score: 3.8, context: "SPARC magnet success; leading path to commercial fusion energy.", isArsenal: true },
      { rank: 3, name: "X-energy", region: "US", score: 3.5, context: "Advanced Nuclear; developing the Xe-100 high-temperature reactor.", isArsenal: true },
      { rank: 4, name: "Helion", region: "US", score: 3.5, context: "Fusion energy; key Microsoft PPA; Polaris facility construction.", isArsenal: true },
      { rank: 5, name: "Redwood Materials", region: "US", score: 3.5, context: "Battery recycling; developing cathode/anode manufacturing in the US.", isArsenal: true },
      { rank: 6, name: "TerraPower", region: "US", score: 3.5, context: "Natrium reactor development; core player in advanced nuclear.", isArsenal: true },
      { rank: 7, name: "Sila Nano", region: "US", score: 3.5, context: "Silicon anode battery material leader; Series F funding.", isArsenal: true },
      { rank: 8, name: "Solugen", region: "US", score: 2.7, context: "Bio; chemi-enzymatic manufacturing of defense chemicals.", isArsenal: true },
      { rank: 9, name: "Group14", region: "US", score: 2.5, context: "Silicon battery materials (Series C); major domestic battery player.", isArsenal: true },
      { rank: 10, name: "Twelve", region: "US", score: 1.2, context: "E-Jet fuel synthesis from CO2 for sustainable fuel supply.", isArsenal: true },
    ],
  },
];

const CompanyTable = ({ companies, stage }: { companies: Company[]; stage: string }) => (
  <div className="bg-card border border-border overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[600px]">
        <thead className="bg-muted">
          <tr>
            <th className="py-3 pl-4 pr-2 md:px-4 text-left text-xs font-semibold tracking-widest uppercase text-muted-foreground w-14">Rank</th>
            <th className="py-3 px-2 md:px-4 text-left text-xs font-semibold tracking-widest uppercase text-muted-foreground">Company</th>
            <th className="py-3 px-2 md:px-4 text-left text-xs font-semibold tracking-widest uppercase text-muted-foreground">Region</th>
            <th className="py-3 px-2 md:px-4 text-left text-xs font-semibold tracking-widest uppercase text-muted-foreground">Score</th>
            <th className="py-3 pl-2 pr-4 md:px-4 text-left text-xs font-semibold tracking-widest uppercase text-muted-foreground">Context</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, idx) => (
            <tr
              key={`${stage}-${company.rank}-${company.name}`}
              className={`border-b border-border/50 transition-all hover:bg-gold/5 ${idx % 2 === 0 ? 'bg-card' : 'bg-background'
                }`}
            >
              <td className="py-3 pl-4 pr-2 md:px-4 text-muted-foreground">{company.rank}</td>
              <td className={`py-3 px-2 md:px-4 ${company.isArsenal ? 'font-bold text-foreground' : 'text-foreground'}`}>
                <div className="flex flex-col gap-1.5">
                  <span>{company.name}</span>
                  {company.isNextUnicorn && (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 text-gold cursor-help">
                            <Star className="w-3.5 h-3.5" fill="currentColor" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p className="text-xs font-semibold">Next Unicorn</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </td>
              <td className="py-3 px-2 md:px-4">
                <span className="inline-flex items-center justify-center min-w-[2rem] px-2 py-0.5 text-[0.7rem] font-semibold tracking-wider uppercase border border-border bg-card text-foreground">
                  {company.region}
                </span>
              </td>
              <td className="py-3 px-2 md:px-4">
                <span className="inline-flex items-center px-2.5 py-0.5 text-[0.7rem] font-bold bg-gold text-primary-foreground dark:text-primary-foreground">
                  {company.score.toFixed(1)}
                </span>
              </td>
              <td className="py-3 pl-2 pr-4 md:px-4 text-muted-foreground text-sm">{company.context}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const verticalTabData = [
  { id: "space", index: "01", label: "Space" },
  { id: "strike", index: "02", label: "Strike / Energetics" },
  { id: "autonomous", index: "03", label: "Autonomous Systems" },
  { id: "intelligence", index: "04", label: "Intelligence & EW" },
  { id: "cyber", index: "05", label: "Cybersecurity" },
  { id: "quantum", index: "06", label: "Quantum & Compute" },
  { id: "manufacturing", index: "07", label: "Manufacturing & Robotics" },
  { id: "resources", index: "08", label: "Strategic Resources" },
];

const verticalMeta: Record<string, { title: string; subtitle: string }> = {
  space: { title: "Space – The High Ground", subtitle: "Orbit, Launch, Communications, ISR." },
  strike: { title: "Strike, Hypersonics & Energetics", subtitle: "Lethality." },
  autonomous: { title: "Autonomous Systems", subtitle: "Platforms, Swarms, UUVs." },
  intelligence: { title: "Intelligence, AI & EW", subtitle: "The Brain, Sensor Fusion." },
  cyber: { title: "Cybersecurity", subtitle: "The Shield, OT/ICS Defense." },
  quantum: { title: "Quantum, Compute & PNT", subtitle: "The Future, Semiconductors." },
  manufacturing: { title: "Manufacturing & Robotics", subtitle: "The Maker, 3D Printing." },
  resources: { title: "Strategic Resources", subtitle: "Resilience, Power, Bio-Industrial." },
};

const CompanyDashboard = ({ verticals }: { verticals: VerticalData[] }) => {
  const [activeVertical, setActiveVertical] = useState("space");
  const [activeStage, setActiveStage] = useState("spark");
  const [showNextUnicorns, setShowNextUnicorns] = useState(true);

  const currentVertical = verticals.find((v) => v.id === activeVertical);
  const meta = verticalMeta[activeVertical];

  const getCompanies = () => {
    if (!currentVertical) return [];
    let list: Company[] = [];
    switch (activeStage) {
      case "spark":
        list = currentVertical.spark; break;
      case "forge":
        list = currentVertical.forge; break;
      case "arsenal":
        list = currentVertical.arsenal; break;
      default:
        list = currentVertical.spark;
    }

    if (!showNextUnicorns) {
      list = list.filter(c => !c.isNextUnicorn);
    }

    return list;
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Dashboard Shell */}
      <div className="relative border border-border p-4 md:p-8 overflow-hidden bg-card">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background: "radial-gradient(circle at top right, hsl(var(--gold) / 0.1), transparent 60%)",
          }}
        />

        <div className="relative z-10">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1 text-[0.72rem] tracking-[0.17em] uppercase bg-background border border-border text-foreground mb-4">
            <span className="w-1.5 h-1.5 bg-gold" />
            <EditableText name="topDefense2025.navigator.label" defaultContent="The 300 – Company Navigator" />
          </div>

          {/* Headline */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-3 mb-4">
            <h2 className="text-xl md:text-2xl font-display tracking-[0.05em] uppercase text-foreground">
              <EditableText name="topDefense2025.navigator.title" defaultContent="Operational Verticals & Stages" />
            </h2>
            <p className="text-sm text-muted-foreground">
              <EditableText name="topDefense2025.navigator.subtitle" defaultContent="Navigate by mission vertical and company maturity (Spark, Forge, Arsenal)." />
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-5 opacity-90"
            style={{
              background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold) / 0.3), transparent)",
            }}
          />

          {/* Vertical Tabs - Horizontal scroll on mobile */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-5 scrollbar-hide">
            <div className="flex md:flex-wrap gap-2 pb-2 md:pb-0">
              {verticalTabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveVertical(tab.id);
                    setActiveStage("spark");
                  }}
                  className={`relative px-4 py-2 text-[0.8rem] uppercase tracking-[0.12em] border transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center gap-2 ${activeVertical === tab.id
                    ? "bg-gold/20 border-gold text-foreground"
                    : "bg-background border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                    }`}
                >
                  <span className="text-[0.75rem] opacity-70">{tab.index}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vertical Meta & Stage Tabs */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-4">
            <div>
              <div className="text-[0.92rem] tracking-[0.16em] uppercase text-muted-foreground">
                {meta.title}
              </div>
              <div className="text-sm text-foreground">{meta.subtitle}</div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setShowNextUnicorns(!showNextUnicorns)}
                className={`flex items-center gap-2 px-3 py-1.5 text-[0.78rem] tracking-[0.12em] uppercase border transition-all duration-150 cursor-pointer ${showNextUnicorns
                  ? "bg-gold/10 border-gold/50 text-gold font-semibold"
                  : "bg-background border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                  }`}
                title="Toggle Next Unicorns"
              >
                <Star className="w-3.5 h-3.5" />
                Next Unicorns
              </button>
              <div className="flex gap-2">
                {(["spark", "forge", "arsenal"] as const).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setActiveStage(stage)}
                    className={`px-4 py-1.5 text-[0.78rem] tracking-[0.12em] uppercase border transition-all duration-150 cursor-pointer ${activeStage === stage
                      ? "bg-gold border-gold text-primary-foreground dark:text-primary-foreground font-semibold"
                      : "bg-background border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                      }`}
                  >
                    {stage.charAt(0).toUpperCase() + stage.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mt-3">
            <CompanyTable companies={getCompanies()} stage={activeStage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TopDefenseCompanies2025 = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Top Defense Companies 2025"
        description="We stripped away the hype to expose the bedrock of our collective defense with a single, cold mandate: Outcomes over Origins."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <span className="text-gold font-semibold uppercase tracking-widest text-sm">
            <EditableText name="topDefense2025.hero.label" defaultContent="The Builders" />
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            <EditableText name="topDefense2025.hero.title" defaultContent="Top Defense Companies 2025" />
          </h1>
          <p className="mt-4 text-2xl text-gold font-semibold italic">
            <EditableText name="topDefense2025.hero.subtitle" defaultContent="The 300: An Audit of the Arsenal" />
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            <EditableText name="topDefense2025.hero.description" defaultContent="We stripped away the hype to expose the bedrock of our collective defense with a single, cold mandate:" /> <strong className="text-foreground"><EditableText name="topDefense2025.hero.strong" defaultContent="Outcomes over Origins." /></strong>
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-10 h-10 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                <EditableText name="topDefense2025.methodology.title" defaultContent="Methodology & Rationale" />
              </h2>
            </div>

            <div className="space-y-8">
              {/* The Imperative */}
              <div className="bg-background border border-border p-6">
                <h3 className="font-display text-xl text-gold mb-3"><EditableText name="topDefense2025.imperative.title" defaultContent="The Imperative: A Race Against Time" /></h3>
                <p className="text-muted-foreground leading-relaxed">
                  <EditableText name="topDefense2025.imperative.text" multiline defaultContent='We are operating on a timeline that is no longer our own. While the Alliance works to re-shore supply chains and regain industrial sovereignty, time is fleeting. Current industry rankings are not audits of power; they are leaderboards of fundraising. This is "Venture Myopia"—a systemic flaw that confuses financial speculation with national security capability.' />
                </p>
              </div>

              {/* The Invisible Middle */}
              <div className="bg-background border border-border p-6">
                <h3 className="font-display text-xl text-gold mb-3"><EditableText name="topDefense2025.middle.title" defaultContent="The Unsung Heroes: The Invisible Middle" /></h3>
                <p className="text-muted-foreground leading-relaxed">
                  <EditableText name="topDefense2025.middle.text" multiline defaultContent='We looked beyond the venture-driven hype to identify the "Invisible Middle"—the overlooked grinders and unheralded "Shadow Primes" who serve as the backbone of the Alliance. From solid rocket motors to secure ball bearings, these are the companies that provide the bedrock of Allied interoperability.' />
                </p>
              </div>

              {/* The Correction */}
              <div className="bg-background border border-border p-6">
                <h3 className="font-display text-xl text-gold mb-3"><EditableText name="topDefense2025.correction.title" defaultContent="The Correction: Five Systemic Failures" /></h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">1.</span>
                    <span><strong className="text-foreground"><EditableText name="topDefense2025.point1.title" defaultContent="The Deployment Gap:" /></strong> <EditableText name="topDefense2025.point1.text" defaultContent="We prioritize solutions proving themselves in contested environments over R&D prototypes." /></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">2.</span>
                    <span><strong className="text-foreground"><EditableText name="topDefense2025.point2.title" defaultContent="The Fulcrum Blindspot:" /></strong> <EditableText name="topDefense2025.point2.text" multiline defaultContent='We identify the unglamorous manufacturers—the "Shadow Primes" that preserve system constancy.' /></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">3.</span>
                    <span><strong className="text-foreground"><EditableText name="topDefense2025.point3.title" defaultContent="The Sustainment Void:" /></strong> <EditableText name="topDefense2025.point3.text" defaultContent="Logistics are life. We elevate the MRO tech that accounts for 70% of lifecycle costs." /></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">4.</span>
                    <span><strong className="text-foreground"><EditableText name="topDefense2025.point4.title" defaultContent="Allied Unity:" /></strong> <EditableText name="topDefense2025.point4.text" defaultContent="As the first global ranking, we audit the full Allied Industrial Base across borders." /></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">5.</span>
                    <span><strong className="text-foreground"><EditableText name="topDefense2025.point5.title" defaultContent="Asymmetric Leverage:" /></strong> <EditableText name="topDefense2025.point5.text" defaultContent="We champion solutions cheaper to deploy than to destroy." /></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
              <EditableText name="topDefense2025.framework.title" defaultContent="8 Mission-Focused Verticals" />
            </h2>
            <p className="text-muted-foreground">
              <EditableText name="topDefense2025.framework.description" multiline defaultContent="We abandoned generic technology categories for outcome-based evaluation. These 300 companies are sovereign assets standing between rhetoric and readiness." />
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {verticals.map((vertical) => (
              <div key={vertical.id} className="bg-card border border-border p-4 text-center hover:border-gold/50 transition-colors">
                <div className="text-gold mb-2 flex justify-center">{vertical.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{vertical.title.split(' ').slice(1).join(' ')}</h3>
              </div>
            ))}
          </div>

          {/* Stage Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">Spark:</strong> Early Stage</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">Forge:</strong> Growth Stage</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-red-500" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">Arsenal:</strong> Established/Prime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Navigator - Dashboard Style */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6">
          <CompanyDashboard verticals={verticals} />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default TopDefenseCompanies2025;