import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Target, Globe, Zap, Brain, Lock, Cpu, Cog, Leaf, Rocket, Crosshair, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useState } from "react";

interface Company {
  rank: number;
  name: string;
  region: string;
  score: number;
  context: string;
  isArsenal?: boolean;
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
      { rank: 1, name: "K2 Space", region: "US", score: 1.7, context: "Mega-class satellite bus platform for rapid scaling and complex missions." },
      { rank: 2, name: "Darkhive", region: "US", score: 1.7, context: "Autonomous swarm software; growing DIU contracts for next-gen capabilities." },
      { rank: 3, name: "Simera Sense", region: "EU", score: 1.7, context: "High-res optical payloads for small satellites; supporting Allied ISR." },
      { rank: 4, name: "Xona Space", region: "US", score: 1.5, context: "LEO PNT constellation to provide resilient, commercial GPS-denied navigation." },
      { rank: 5, name: "CesiumAstro", region: "US", score: 1.4, context: "Phased array communications for active defense contracts (SDA)." },
      { rank: 6, name: "Rocket Factory (RFA)", region: "EU", score: 1.2, context: "German launch leader advancing the RFA One for Allied launch needs." },
      { rank: 7, name: "True Anomaly", region: "US", score: 1.2, context: "Space domain awareness vehicles; Jackal vehicle demos (Responsive Space)." },
      { rank: 8, name: "Tomorrow.io", region: "US", score: 1.2, context: "Weather intelligence constellation supporting USAF mission planning." },
      { rank: 9, name: "Laser Light", region: "US", score: 1.2, context: "Optical/Laser communications network for high-speed, secure data transfer." },
      { rank: 10, name: "Turion Space", region: "US", score: 1.2, context: "Space situational awareness and on-orbit servicing; Droid-1 operational." },
    ],
    forge: [
      { rank: 1, name: "Isar Aerospace", region: "EU", score: 3.2, context: "Europe's heavy lift launch hope with significant sovereign funding." },
      { rank: 2, name: "Apex Space", region: "US", score: 2.5, context: "Satellite bus manufacturing for high-volume constellation deployment." },
      { rank: 3, name: "Firefly Aerospace", region: "US", score: 2.5, context: "Responsive space success (Victus Nox); critical path to medium lift." },
      { rank: 4, name: "The Exploration Co", region: "EU", score: 2.5, context: "\"Nyx\" capsule for in-space logistics and cargo return capability." },
      { rank: 5, name: "Space Forge", region: "UK", score: 2.2, context: "Returnable satellite platform for in-space manufacturing/processing." },
      { rank: 6, name: "Varda Space", region: "US", score: 2.0, context: "Successful capsule landing demonstrating crucial re-entry capabilities." },
      { rank: 7, name: "ABL Space Systems", region: "US", score: 1.8, context: "Developing the RS1 mobile launch system for resilient space access." },
      { rank: 8, name: "Stoke Space", region: "US", score: 1.8, context: "Reusable second stage testing for rapid, low-cost launch capability." },
      { rank: 9, name: "Albedo", region: "US", score: 1.7, context: "VLEO satellites for high-resolution optical and thermal imagery." },
      { rank: 10, name: "Iceye", region: "EU", score: 1.6, context: "Largest commercial SAR fleet providing critical all-weather intelligence." },
    ],
    arsenal: [
      { rank: 1, name: "SpaceX", region: "US", score: 5.0, context: "Irreplaceable prime; Starship, Starshield, and Starlink dominance.", isArsenal: true },
      { rank: 2, name: "Blue Origin", region: "US", score: 4.8, context: "Prime contractor for New Glenn and Moon lander programs; major infra player.", isArsenal: true },
      { rank: 3, name: "Sierra Nevada Corp", region: "US", score: 4.5, context: "Prime; high-altitude platforms and Dream Chaser for ISR integration.", isArsenal: true },
      { rank: 4, name: "Sierra Space", region: "US", score: 3.5, context: "Developing the Dream Chaser spaceplane and Orbital Reef commercial station.", isArsenal: true },
      { rank: 5, name: "Axiom Space", region: "US", score: 3.3, context: "Private Space Station developer and provider of NASA next-gen spacesuits.", isArsenal: true },
      { rank: 6, name: "York Space Systems", region: "US", score: 3.1, context: "Major SDA Tranche winner; rapid satellite bus manufacturing (PE-backed).", isArsenal: true },
      { rank: 7, name: "Relativity Space", region: "US", score: 2.7, context: "Focus on Terran R heavy lift; utilizing large-scale 3D printing.", isArsenal: true },
      { rank: 8, name: "Astranis", region: "US", score: 2.7, context: "Micro-GEO satellites providing dedicated, secure military connectivity.", isArsenal: true },
      { rank: 9, name: "Voyager Space", region: "US", score: 2.5, context: "Space infrastructure and defense services around Starlab commercial station.", isArsenal: true },
      { rank: 10, name: "Capella Space", region: "US", score: 0.8, context: "SAR expansion for high-value intelligence collection capabilities.", isArsenal: true },
    ],
  },
  {
    id: "strike",
    title: "02 Strike / Energetics",
    subtitle: "Lethality, Hypersonics",
    icon: <Crosshair className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Castelion", region: "US", score: 2.0, context: "Emerged from stealth with rapid hypersonic testing programs." },
      { rank: 2, name: "ZeroMark", region: "US", score: 1.5, context: "AI-assisted fire control for precision aiming systems ($7M Seed)." },
      { rank: 3, name: "Ares Industries", region: "US", score: 1.5, context: "Early-stage development of anti-ship missile prototypes (YC S24)." },
      { rank: 4, name: "Aventra", region: "US", score: 1.5, context: "Glide kits for converting unguided ammunition into precision munitions." },
      { rank: 5, name: "Allen Control", region: "US", score: 1.2, context: "Testing the \"Bullfrog\" autonomous naval gun system (Seed)." },
      { rank: 6, name: "Aeon Industries", region: "US", score: 1.2, context: "Developing precision strike munitions like the 'Dart'." },
      { rank: 7, name: "Smart Shooter", region: "IL", score: 1.2, context: "SMASH optics fire control system widely fielded for infantry precision." },
      { rank: 8, name: "D-Fend", region: "IL", score: 1.2, context: "Cyber takeover technology for safe, non-kinetic C-UAS defeat." },
      { rank: 9, name: "UVision", region: "IL", score: 1.1, context: "Scaling production of Hero loitering munitions for Allied forces." },
      { rank: 10, name: "Venus Aerospace", region: "US", score: 1.1, context: "Hypersonic engine testing advancing towards flight phase." },
    ],
    forge: [
      { rank: 1, name: "Chaos Industries", region: "US", score: 3.1, context: "Rapid prototyping and manufacturing of coherent distributed networks." },
      { rank: 2, name: "X-Bow Systems", region: "US", score: 2.8, context: "Energetics; advancing 3D printed solid fuel rocket motor testing." },
      { rank: 3, name: "Mach Industries", region: "US", score: 2.3, context: "Hydrogen weapon systems development and next-gen energy." },
      { rank: 4, name: "Terminal Autonomy", region: "UA", score: 2.3, context: "Scaled production of AQ-400 Scythe long-range loitering munitions; combat proven." },
      { rank: 5, name: "SpearUAV", region: "IL", score: 2.1, context: "Loitering munition technology validated for sub-launch capability." },
      { rank: 6, name: "Fortem", region: "US", score: 1.7, context: "Kinetic DroneHunter (Net) C-UAS system deployed in Ukraine." },
      { rank: 7, name: "Firehawk Aerospace", region: "US", score: 1.7, context: "Hybrid rocket engines utilizing 3D printed solid fuel grains." },
      { rank: 8, name: "Robotican", region: "IL", score: 1.7, context: "\"Goshawk\" interceptor gaining traction for counter-UAS missions." },
      { rank: 9, name: "DefendTex", region: "AU", score: 1.5, context: "\"Drone40\" loitering munition deployed; leveraging Metal Storm acquisition." },
      { rank: 10, name: "EpiSci", region: "US", score: 1.5, context: "Tactical autonomy and AI pilot systems for enhanced mission control." },
    ],
    arsenal: [
      { rank: 1, name: "Anduril", region: "US", score: 4.9, context: "Prime; Roadrunner, key Replicator winner; transforming defense procurement.", isArsenal: true },
      { rank: 2, name: "General Atomics", region: "US", score: 4.8, context: "Prime; core platforms (MQ-9B, Gambit) and advanced nuclear tech.", isArsenal: true },
      { rank: 3, name: "BlueHalo", region: "US", score: 4.0, context: "PE-Backed Prime; Directed Energy (DE) and advanced C-UAS leader.", isArsenal: true },
      { rank: 4, name: "Epirus", region: "US", score: 4.0, context: "High Power Microwave (HPM) DE leader; Leonidas system fielded.", isArsenal: true },
      { rank: 5, name: "Ursa Major", region: "US", score: 3.2, context: "Scaling solid rocket motor (SRM) production for missile programs.", isArsenal: true },
      { rank: 6, name: "Boom Supersonic", region: "US", score: 2.8, context: "Advancing XB-1 flight; strategic defense partnership with Northrop Grumman.", isArsenal: true },
      { rank: 7, name: "Hermeus", region: "US", score: 2.5, context: "Hypersonic vehicle development; testing Quarterhorse engine.", isArsenal: true },
      { rank: 8, name: "Destinus", region: "EU", score: 1.0, context: "Hypersonic flight research using hydrogen; supplying drones to Ukraine.", isArsenal: true },
      { rank: 9, name: "Hypersonix", region: "AU", score: 0.9, context: "Scramjet testbeds; DIU contracts for next-gen hypersonics.", isArsenal: true },
      { rank: 10, name: "Specter", region: "US", score: 0.3, context: "Developing low-cost, high-volume interceptor missiles.", isArsenal: true },
    ],
  },
  {
    id: "autonomous",
    title: "03 Autonomous Systems",
    subtitle: "Platforms, Swarms, UUVs",
    icon: <Bot className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Swarmer", region: "UA", score: 1.7, context: "Combat-proven mission planning and swarm management software." },
      { rank: 2, name: "Bavovna AI", region: "UA", score: 1.7, context: "Autonomous navigation software for GPS-denied drone operations." },
      { rank: 3, name: "XTEND", region: "IL", score: 1.5, context: "Human-machine teaming interface for drone operations." },
      { rank: 4, name: "Neros", region: "US", score: 1.5, context: "\"American DJI\" concept focused on mass-producible, affordable drones." },
      { rank: 5, name: "Buntar Aerospace", region: "UA", score: 1.5, context: "Long-range reconnaissance UAS combat-proven in theatre." },
      { rank: 6, name: "Censys Technologies", region: "US", score: 1.3, context: "BVLOS UAS for infrastructure and defense monitoring." },
      { rank: 7, name: "C2 Robotics", region: "AU", score: 1.3, context: "Subsea; developing Speartooth UUV prototypes." },
      { rank: 8, name: "Whisper Aero", region: "US", score: 1.2, context: "Ultra-quiet electric thrusters for surveillance and tactical drones." },
      { rank: 9, name: "Aerodome", region: "US", score: 1.2, context: "Drone as First Responder (DFR); remote operations for public safety/defense." },
      { rank: 10, name: "Blue Water", region: "US", score: 1.2, context: "Early-stage concept for autonomous warships (Seed)." },
    ],
    forge: [
      { rank: 1, name: "Milrem Robotics", region: "EU", score: 3.5, context: "NATO standard Unmanned Ground Vehicle (UGV) platform; now Edge Group majority." },
      { rank: 2, name: "Tekever", region: "EU", score: 2.7, context: "Combat-proven UAS systems with significant Allied defense contracts." },
      { rank: 3, name: "Regent", region: "US", score: 2.3, context: "Developing Seaglider prototypes for autonomous sea transport." },
      { rank: 4, name: "Asylon Robotics", region: "US", score: 1.8, context: "Robotic perimeter defense and drone-in-a-box solutions." },
      { rank: 5, name: "Exyn", region: "US", score: 1.8, context: "GPS-denied mapping and autonomous flight for subterranean operations." },
      { rank: 6, name: "ZeroAvia", region: "US", score: 1.8, context: "Hydrogen-electric aviation engines for future autonomous platforms." },
      { rank: 7, name: "Raphe mPhibr", region: "IN", score: 1.8, context: "UAV manufacturing and indigenous drone swarm development." },
      { rank: 8, name: "Merlin Labs", region: "US", score: 1.7, context: "Autonomous pilot software; working on USAF C-130 integration." },
      { rank: 9, name: "Sea Machines", region: "US", score: 1.7, context: "Autonomous command/control systems for maritime vessels." },
      { rank: 10, name: "Maglev Aero", region: "US", score: 1.6, context: "Developing ultra-quiet propulsion for next-gen air platforms." },
    ],
    arsenal: [
      { rank: 1, name: "Shield AI", region: "US", score: 4.5, context: "Prime; Hivemind autonomy stack for V-BAT Teams and other platforms.", isArsenal: true },
      { rank: 2, name: "Saronic", region: "US", score: 4.0, context: "Maritime leader; 'Cutlass' production for US Navy unmanned surface capability.", isArsenal: true },
      { rank: 3, name: "Skydio", region: "US", score: 3.7, context: "Prime; X10D and Army Short Range Recon program winner.", isArsenal: true },
      { rank: 4, name: "Saildrone", region: "US", score: 2.7, context: "Surveyor production for Navy 5th Fleet and persistent maritime ISR.", isArsenal: true },
      { rank: 5, name: "Zipline", region: "US", score: 2.1, context: "Logistics; P2 Droid; massive commercial scale/dual use.", isArsenal: true },
      { rank: 6, name: "Beta Technologies", region: "US", score: 2.0, context: "Alia aircraft; Agility Prime partner; core EVTOL defense player.", isArsenal: true },
      { rank: 7, name: "Quantum-Systems", region: "EU", score: 1.6, context: "Air; major UAS platform standard for Ukraine and NATO partners.", isArsenal: true },
      { rank: 8, name: "Wisk Aero", region: "US", score: 1.2, context: "Autonomous eVTOL taxi; private subsidiary of Boeing.", isArsenal: true },
      { rank: 9, name: "Iris Automation", region: "US", score: 1.0, context: "Detect-and-avoid systems critical for safe autonomous flight.", isArsenal: true },
      { rank: 10, name: "Volocopter", region: "EU", score: 0.9, context: "Logistics; eVTOL development facing funding challenges.", isArsenal: true },
    ],
  },
  {
    id: "intelligence",
    title: "04 Intelligence, AI & EW",
    subtitle: "The Brain, Sensor Fusion",
    icon: <Brain className="w-6 h-6" />,
    spark: [
      { rank: 1, name: "Orbital Insight", region: "US", score: 1.8, context: "Geospatial analytics; new ownership structure stabilizing offerings." },
      { rank: 2, name: "Blackshark.ai", region: "EU", score: 1.8, context: "Digital Twin of Earth for advanced simulation and training." },
      { rank: 3, name: "Slingshot", region: "US", score: 1.8, context: "Software for space domain awareness and traffic management." },
      { rank: 4, name: "Modern Intel", region: "US", score: 1.7, context: "AI fusing Radar and ELINT data for next-gen sensor fusion." },
      { rank: 5, name: "Osavul", region: "UA", score: 1.7, context: "Information operations and intelligence analysis on disinformation campaigns." },
      { rank: 6, name: "HIMERA", region: "UA", score: 1.7, context: "Tactical comms; EW-resistant radios for frontline deployment." },
      { rank: 7, name: "Weights & Biases", region: "US", score: 1.6, context: "MLOps platform for tracking and managing AI model training." },
      { rank: 8, name: "Synthesia", region: "EU", score: 1.5, context: "Unicorn; AI avatars used for training and information delivery." },
      { rank: 9, name: "Ambient.AI", region: "US", score: 1.5, context: "Physical security computer vision for real-time threat detection." },
      { rank: 10, name: "Snorkel AI", region: "US", score: 1.5, context: "Data labeling and management platform for AI model training." },
    ],
    forge: [
      { rank: 1, name: "Vannevar Labs", region: "US", score: 2.9, context: "\"Decrypt\" NLP platform used in 15+ DoD organizations for intelligence." },
      { rank: 2, name: "Govini", region: "US", score: 2.5, context: "Acquisition data and intelligence providing vital spending insights." },
      { rank: 3, name: "Altana", region: "US", score: 2.2, context: "AI for supply chain mapping and critical component risk analysis." },
      { rank: 4, name: "Rebellion Def", region: "US", score: 2.2, context: "Mission software focused on Recon and stability in government contracts." },
      { rank: 5, name: "Primer.ai", region: "US", score: 2.2, context: "NLP platform for rapid intelligence analysis and synthesis." },
      { rank: 6, name: "Air Space Intelligence", region: "US", score: 2.0, context: "\"Flyways\" platform using AI for flight routing and domain awareness." },
      { rank: 7, name: "Blackbird.AI", region: "US", score: 2.0, context: "Narrative intelligence to defend against sophisticated disinformation campaigns." },
      { rank: 8, name: "Mark43", region: "US", score: 1.9, context: "Public safety software modernizing CAD/RMS systems." },
      { rank: 9, name: "Mapbox", region: "US", score: 1.9, context: "Private; provides foundational geospatial data for defense applications." },
      { rank: 10, name: "Fivecast", region: "AU", score: 1.8, context: "OSINT and dark web intelligence capabilities." },
    ],
    arsenal: [
      { rank: 1, name: "Scale AI", region: "US", score: 4.8, context: "Data prime; key provider of RLHF/labeling for DoD LLM testing (Donovan).", isArsenal: true },
      { rank: 2, name: "Helsing", region: "EU", score: 4.2, context: "European AI Prime; Series C funding; rapidly expanding influence.", isArsenal: true },
      { rank: 3, name: "BlueHalo", region: "US", score: 3.3, context: "Prime; PE-Backed Directed Energy and Space domain leadership.", isArsenal: true },
      { rank: 4, name: "Second Front", region: "US", score: 3.1, context: "\"Game Warden\" accreditation platform expediting defense software deployment.", isArsenal: true },
      { rank: 5, name: "HawkEye 360", region: "US", score: 3.1, context: "RF GEOINT constellation; Tier 1 provider of signals intelligence.", isArsenal: true },
      { rank: 6, name: "Applied Intuition", region: "US", score: 3.0, context: "Vehicle simulation software; $6B valuation; key autonomy enabler.", isArsenal: true },
      { rank: 7, name: "Hailo", region: "IL", score: 2.5, context: "Edge AI hardware; Series C funding; high-performance chips.", isArsenal: true },
      { rank: 8, name: "Dataminr", region: "US", score: 2.0, context: "AI alerting platform with deep penetration across DoD and Enterprise.", isArsenal: true },
      { rank: 9, name: "Chainalysis", region: "US", score: 2.0, context: "Critical blockchain analysis and crypto-crime investigation for intel.", isArsenal: true },
      { rank: 10, name: "VAST Data", region: "US", score: 1.9, context: "High-performance data platform critical for massive AI training clusters.", isArsenal: true },
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
              className={`border-b border-border/50 transition-all hover:bg-gold/5 ${
                idx % 2 === 0 ? 'bg-card' : 'bg-background'
              }`}
            >
              <td className="py-3 pl-4 pr-2 md:px-4 text-muted-foreground">{company.rank}</td>
              <td className={`py-3 px-2 md:px-4 ${company.isArsenal ? 'font-bold text-foreground' : 'text-foreground'}`}>
                {company.name}
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

  const currentVertical = verticals.find((v) => v.id === activeVertical);
  const meta = verticalMeta[activeVertical];

  const getCompanies = () => {
    if (!currentVertical) return [];
    switch (activeStage) {
      case "spark":
        return currentVertical.spark;
      case "forge":
        return currentVertical.forge;
      case "arsenal":
        return currentVertical.arsenal;
      default:
        return currentVertical.spark;
    }
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
            The 300 – Company Navigator
          </div>

          {/* Headline */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-3 mb-4">
            <h2 className="text-xl md:text-2xl font-display tracking-[0.05em] uppercase text-foreground">
              Operational Verticals & Stages
            </h2>
            <p className="text-sm text-muted-foreground">
              Navigate by mission vertical and company maturity (Spark, Forge, Arsenal).
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
                  className={`relative px-4 py-2 text-[0.8rem] uppercase tracking-[0.12em] border transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    activeVertical === tab.id
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
            <div className="flex gap-2">
              {(["spark", "forge", "arsenal"] as const).map((stage) => (
                <button
                  key={stage}
                  onClick={() => setActiveStage(stage)}
                  className={`px-4 py-1.5 text-[0.78rem] tracking-[0.12em] uppercase border transition-all duration-150 cursor-pointer ${
                    activeStage === stage
                      ? "bg-gold border-gold text-primary-foreground dark:text-primary-foreground font-semibold"
                      : "bg-background border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                  }`}
                >
                  {stage.charAt(0).toUpperCase() + stage.slice(1)}
                </button>
              ))}
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

const TopDefenseCompanies2024 = () => {
  return (
    <main className="min-h-screen bg-background">
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
            The Builders
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            Top Defense Companies 2024
          </h1>
          <p className="mt-4 text-2xl text-gold font-semibold italic">
            The 300: An Audit of the Arsenal
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            We stripped away the hype to expose the bedrock of our collective defense with a single, cold mandate: <strong className="text-foreground">Outcomes over Origins.</strong>
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
                Methodology & Rationale
              </h2>
            </div>

            <div className="space-y-8">
              {/* The Imperative */}
              <div className="bg-background border border-border p-6">
                <h3 className="font-display text-xl text-gold mb-3">The Imperative: A Race Against Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are operating on a timeline that is no longer our own. While the Alliance works to re-shore supply chains and regain industrial sovereignty, time is fleeting. Current industry rankings are not audits of power; they are leaderboards of fundraising. This is "Venture Myopia"—a systemic flaw that confuses financial speculation with national security capability.
                </p>
              </div>

              {/* The Invisible Middle */}
              <div className="bg-background border border-border p-6">
                <h3 className="font-display text-xl text-gold mb-3">The Unsung Heroes: The Invisible Middle</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We looked beyond the venture-driven hype to identify the "Invisible Middle"—the overlooked grinders and unheralded "Shadow Primes" who serve as the backbone of the Alliance. From solid rocket motors to secure ball bearings, these are the companies that provide the bedrock of Allied interoperability.
                </p>
              </div>

              {/* The Correction */}
              <div className="bg-background border border-border p-6">
                <h3 className="font-display text-xl text-gold mb-3">The Correction: Five Systemic Failures</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">1.</span>
                    <span><strong className="text-foreground">The Deployment Gap:</strong> We prioritize solutions proving themselves in contested environments over R&D prototypes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">2.</span>
                    <span><strong className="text-foreground">The Fulcrum Blindspot:</strong> We identify the unglamorous manufacturers—the "Shadow Primes" that preserve system constancy.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">3.</span>
                    <span><strong className="text-foreground">The Sustainment Void:</strong> Logistics are life. We elevate the MRO tech that accounts for 70% of lifecycle costs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">4.</span>
                    <span><strong className="text-foreground">Allied Unity:</strong> As the first global ranking, we audit the full Allied Industrial Base across borders.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">5.</span>
                    <span><strong className="text-foreground">Asymmetric Leverage:</strong> We champion solutions cheaper to deploy than to destroy.</span>
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
              8 Mission-Focused Verticals
            </h2>
            <p className="text-muted-foreground">
              We abandoned generic technology categories for outcome-based evaluation. These 300 companies are sovereign assets standing between rhetoric and readiness.
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

export default TopDefenseCompanies2024;