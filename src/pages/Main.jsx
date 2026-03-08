import React, { useEffect, useRef, useState } from 'react';
import FounderCard from '../components/Foundercard';
import SolutionCard from '../components/Solutioncard';
import LoomLinkNavLogo from '../components/Navlogo';
import ServicePillar from '../components/Servicepillar';
import SettingsTaskbar from '../components/Taskbar';
import Bridge from '../components/sections/Bridge';
import Footer from '../components/sections/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Cpu, ShieldCheck, Code2, LineChart, ArrowRight, Lightbulb, Workflow, Database, LayoutDashboard, Search, Microchip, Globe, Fingerprint, Terminal, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   SUB-COMPONENTS
================================ */




const ConcernsToInference = ({ isLight }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".mapping-card", {
            y: 50, 
            opacity: 0, 
            stagger: 0.3,
            scrollTrigger: { trigger: containerRef.current, start: "top 60%" }
        });
    }, { scope: containerRef });

    const MAPPINGS = [
        { 
            concern: "Technicians bypass structured ERP fields under time pressure, resulting in 'dirty data' that corrupts predictive maintenance models.", 
            inference: "Zero-Friction SAP Compliance: Our Semantic Analyst automatically translates unstructured field notes into verified, standard SAP failure codes in real-time.", 
            tag: "ERP_INTEGRITY" 
        },
        { 
            concern: "Deployed robotics collect massive amounts of sensor data, but lack the operational context to differentiate genuine anomalies from normal process variations.", 
            inference: "Contextual Sensor Fusion: We build the intelligence layer that fuses multi-modal robotic data with historical asset context, eliminating false positives.", 
            tag: "CONTEXTUAL_FUSION" 
        },
        { 
            concern: "You want to leverage advanced LLMs, but IT and OT security regulations strictly prohibit critical infrastructure data from leaving the facility.", 
            inference: "Sovereign Architecture: 100% Air-Gapped execution. Your AI models and your data live securely on your private hardware.", 
            tag: "AIR_GAPPED_SECURITY" 
        }
    ];

    return (
        <section ref={containerRef} className={`py-40 px-6 relative z-30 transition-colors ${isLight ? 'bg-white' : 'bg-[#02040a]'}`}>
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-24">
                    <h2 className={`text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 ${isLight ? 'text-black' : 'text-white'}`}>
                        From Chaos to <span className="text-blue-600">Clarity</span>
                    </h2>
                    <p className={`text-xl italic opacity-50 ${isLight ? 'text-black' : 'text-white'}`}>Stop chasing your data. Start leading with it.</p>
                </div>
                <div className="space-y-12">
                    {MAPPINGS.map((item, idx) => (
                        <div key={idx} className="mapping-card group relative grid md:grid-cols-11 gap-4 items-center">
                            {/* Frustration Card */}
                            <div className={`md:col-span-5 p-10 rounded-3xl border transition-all text-left ${isLight ? 'bg-black/[0.03] border-black/5' : 'bg-white/5 border-white/5 opacity-60 group-hover:opacity-100'}`}>
                                <span className="font-mono text-[9px] tracking-widest uppercase block mb-4 text-red-500/60 font-bold">THE_FRUSTRATION // 0{idx + 1}</span>
                                <p className={`text-xl md:text-2xl font-light italic leading-relaxed ${isLight ? 'text-black/80' : 'text-white/80'}`}>"{item.concern}"</p>
                            </div>

                            {/* Transition Arrow */}
                            <div className="md:col-span-1 flex justify-center py-6 md:py-0">
                                <ArrowRight size={28} className="text-blue-600 animate-pulse md:rotate-0 rotate-90" />
                            </div>

                            {/* Solution Card */}
                            <div className={`md:col-span-5 p-10 rounded-3xl border-2 border-blue-600 transition-all text-left ${isLight ? 'bg-white shadow-xl' : 'bg-[#050505] shadow-[0_0_50px_rgba(59,130,246,0.15)]'}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-blue-500 font-black">{item.tag}</span>
                                    <ShieldCheck size={18} className="text-blue-500" />
                                </div>
                                <p className="text-xl md:text-2xl font-black italic leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 uppercase">
                                    {item.inference}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




/* ===============================
   MAIN AGENCY ARCHITECTURE
================================ */

export default function LoomLinkAgency() {
    const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const mainRef = useRef(null);
    const horizontalRef = useRef(null);
    const bgTextRef = useRef(null);
    const navRef = useRef(null);
    const heroRef = useRef(null);
    const lifecycleRef = useRef(null);
    const footerRef = useRef(null);
    const footerLogoTextRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);



    useGSAP(() => {
        // 1. FIXED HEADER ENTRANCE ANIMATION
        const headerTl = gsap.timeline({ defaults: { ease: "expo.out" } });
        headerTl.from(".hero-line", { y: 150, skewY: 10, stagger: 0.2, duration: 2, opacity: 0 })
            .from(".hero-sub", { y: 30, opacity: 0, duration: 1.5 }, "-=1.2");

        // 2. SCROLL-BASED NAVBAR
        const showAnim = gsap.from(navRef.current, {
            yPercent: -100, paused: true, duration: 0.3, ease: "power2.out"
        }).progress(1);

        ScrollTrigger.create({
            start: "top top", end: "max",
            onUpdate: (self) => { self.direction === -1 ? showAnim.play() : showAnim.reverse(); }
        });

        // 3. Parallax BG Text
        gsap.to(bgTextRef.current, {
            xPercent: -40,
            scrollTrigger: { trigger: mainRef.current, start: "top top", end: "bottom bottom", scrub: 2 }
        });

        // 4. Horizontal Solution Scroller
        const panels = gsap.utils.toArray(".solution-card");
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: { trigger: horizontalRef.current, pin: true, scrub: 1.5, end: () => `+=${horizontalRef.current.offsetWidth}` }
        });

        // 5. FOOTER NEURAL REVEAL
        gsap.from(footerLogoTextRef.current, {
            letterSpacing: "0.8em", opacity: 0, filter: "blur(15px)", duration: 2.5, ease: "power4.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 90%" }
        });

        gsap.from(".lifecycle-step", {
            y: 100, opacity: 0, stagger: 0.3,
            scrollTrigger: { trigger: lifecycleRef.current, start: "top 70%" }
        });

        gsap.to(".engine-glow", { scale: 1.4, opacity: 0.4, repeat: -1, yoyo: true, duration: 3 });

    }, { scope: mainRef });




    return (
        <div ref={mainRef} className={`transition-colors duration-1000 font-sans overflow-x-hidden antialiased ${isLight ? 'bg-[#F5F5F7] text-[#1D1D1F]' : 'bg-[#02040a] text-slate-100'}`}>

            <SettingsTaskbar isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} isLight={isLight} setIsLight={setIsLight} />

            <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
                <div ref={bgTextRef} className={`text-[35vw] ms-200  font-black italic tracking-tighter opacity-[0.10] whitespace-nowrap will-change-transform`}>
                    LOOM-LINK
                </div>
            </div>

            {/* NAVBAR */}
            <nav ref={navRef} className={`fixed top-0 w-full z-[500] flex items-center justify-between px-12 h-20 backdrop-blur-2xl border-b transition-all ${isLight ? 'bg-white/80 border-black/5 shadow-sm' : 'bg-black/60 border-white/5'}`}>

                {/* LEFT SECTION: BRANDING (Logo + Text wrapped in flex) */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="flex items-center justify-center">
                        {/* Logo component receiving theme state */}
                        <LoomLinkNavLogo isLight={isLight} />
                    </div>
                    <span className={`text-xl font-black uppercase italic tracking-tighter transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
                        Loom-<span className="text-blue-600">Link</span>
                    </span>
                </div>

                {/* RIGHT SECTION: ACTIONS */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSettingsOpen(true)}
                        className={`p-2.5 rounded-lg border transition-all active:scale-90 ${isLight
                            ? 'bg-black/5 border-black/5 text-black hover:bg-black/10'
                            : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        <Settings size={16} className={isSettingsOpen ? 'animate-spin' : ''} />
                    </button>
                </div>
            </nav>

            {/* HEADER (AIM) SECTION */}
            <section id="aim" ref={heroRef} className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
                <div className="overflow-hidden mb-6">
                    <div className="hero-line text-indigo-500 font-mono text-sm tracking-[0.6em] uppercase">Private Decision Infrastructure</div>
                </div>
                <div className="overflow-hidden">
                    <h1 className="hero-line text-[12vw] md:text-[9rem] font-black tracking-tighter leading-[0.8] uppercase italic">Sovereign <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Intelligence</span></h1>
                </div>
                <p className="hero-sub max-w-3xl mx-auto mt-12 text-xl md:text-3xl font-light italic opacity-60 leading-relaxed">"We architect custom AI environments that master your specific business logic, engineered for absolute data autonomy."</p>
            </section>



            <ConcernsToInference isLight={isLight} />

            <div id="solutions" ref={horizontalRef} className={`flex flex-nowrap overflow-hidden border-y transition-colors relative z-10 ${isLight ? 'bg-white/30 border-black/5' : 'bg-black/30 border-white/5'}`}>
                <SolutionCard isLight={isLight} num="01" title="Core - Intel" desc="Autonomous agents that parse massive document silos into actionable operational strategy." tag="Neural_Processing" icon={<Database size={300} strokeWidth={0.3} />} />
                <SolutionCard isLight={isLight} num="02" title="Logic Weaver" desc="Custom AI layers that synthesize deep database clusters into human-centric executive narratives." tag="Synthesis_Engine" icon={<LineChart size={300} strokeWidth={0.3} />} />
                <SolutionCard isLight={isLight} num="03" title="Private Nodes" desc="Enterprise models trained on private data sets, deployed with zero external connectivity." tag="Secure_Isolation" icon={<Microchip size={300} strokeWidth={0.3} />} />
            </div>



            <section id="security" className={`relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l transition-colors duration-1000 ${isLight ? 'border-black/5' : 'border-white/5'}`}>
                <ServicePillar isLight={isLight} icon={<ShieldCheck size={40} />} title="The Safety Lock" desc="Our AI is engineered to report and advise, never to alter. Every major move requires your final approval, ensuring your records remain untouched and safe." command="HUMAN_VERIFICATION_REQUIRED" />
                <ServicePillar isLight={isLight} icon={<Workflow size={40} />} title="Neural Mapping" desc="We decode your unique business workflow before architecting a single intelligence module tailored to your operational logic." command="SYSTEM_MAPPING_LIVE" />
                <ServicePillar isLight={isLight} icon={<Fingerprint size={40} />} title="Air-Gapped Ops" desc="Deployments reside on your private infrastructure. Your business intelligence never leaks to public LLMs or external servers." command="NODE_ISOLATION_SET" />
                <ServicePillar isLight={isLight} icon={<Terminal size={40} />} title="Logic Engines" desc="Advanced reasoning systems designed to handle the complex edge cases and business rules unique to your specific industry." command="INFERENCE_ENGINE_READY" />
            </section>

            <section id="process" ref={lifecycleRef} className="py-40 px-6 relative z-10 bg-indigo-600/5 text-center">
                <div className="max-w-7xl mx-auto space-y-32">
                    <div className="space-y-6"><h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">The Intelligence Cycle.</h2><p className="text-xl opacity-40 italic max-w-2xl mx-auto">From discovery to deployment, we build the bridge between your enterprise data and sovereign AI.</p></div>
                    <div className="grid md:grid-cols-4 gap-12 relative text-left">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-blue-600/20 hidden md:block" />
                        {[
                            { icon: <Search />, title: "01. Logic Audit", body: "We map your operational areas to identify critical intelligence gaps." },
                            { icon: <Lightbulb />, title: "02. Synthesis", body: "Architecting the neural pathways between raw inputs and high-level strategy." },
                            { icon: <Code2 />, title: "03. Assembly", body: "Engineering a custom interface designed for intuitive, real-time AI interaction." },
                            { icon: <Globe />, title: "04. Deployment", body: "On-premise integration ensuring full ownership of the logic." }
                        ].map((step, i) => (
                            <div key={i} className="lifecycle-step relative z-10 space-y-8 bg-black/40 p-10 border border-white/5 rounded-[2rem] backdrop-blur-xl">
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white">{step.icon}</div>
                                <h4 className="text-2xl font-bold italic">{step.title}</h4><p className="opacity-50 text-sm leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE BRIDGE SECTION */}
            <Bridge isLight={isLight} />


            {/* CO-founders */}
            <section id="leadership" className={`py-22 relative z-10 border-t transition-colors duration-700 overflow-hidden ${isLight ? 'bg-[#F5F5F7] border-black/5' : 'bg-[#020204] border-white/5'}`}>

                {/* ADVANCED MESH GRADIENT BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Deep Core Glow */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[160px] rounded-full opacity-20 
            ${isLight ? 'bg-blue-400' : 'bg-blue-900'}`} />

                    {/* Floating Accent 1 */}
                    <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blur-[120px] rounded-full animate-mesh-slow 
            ${isLight ? 'bg-blue-200/40' : 'bg-blue-600/10'}`} />

                    {/* Floating Accent 2 */}
                    <div className={`absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] blur-[120px] rounded-full animate-mesh-slow-reverse
            ${isLight ? 'bg-indigo-200/40' : 'bg-indigo-600/10'}`} />
                </div>

                <div className="max-w-[1600px] mx-auto px-10 relative z-10">

                    {/* HEADER ASSEMBLY */}
                    <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-12 bg-blue-600" />
                                <span className={`font-mono text-[10px] tracking-[0.6em] uppercase font-black ${isLight ? 'text-blue-700' : 'text-blue-500'}`}>
                                    LoomLink_Founding_Team
                                </span>
                            </div>
                            <h2 className={`text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none ${isLight ? 'text-black' : 'text-white'}`}>
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-500 animate-gradient-x">Architects.</span>
                            </h2>
                        </div>

                    </div>

                    {/* FOUNDER STAGE */}
                    <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-8">
                        <FounderCard
                            name="Hrithik_Pramod"
                            role="Co-Founder & AI Systems Architect"
                            icon={<Cpu size={24} />}
                            color="blue"
                            isLight={isLight}
                            bio="Hrithik is the technical visionary behind LoomLink, bridging high-scale distributed systems with cutting-edge AI. He specializes in transforming complex data landscapes into autonomous systems through robust backend engineering."
                            tags={["Neural_Systems", "Backend_Scale"]}
                        />

                        <FounderCard
                            name="Akhilesh"
                            role="Co-Founder & Product Manager"
                            icon={<ShieldCheck size={24} />}
                            color="orange"
                            isLight={isLight}
                            bio="With over eight years of experience engineering robust cloud infrastructure, Akhilesh leads the product vision. His expertise in Kubernetes and local LLM orchestration ensures Loom Link delivers hallucination-free, SAP-compliant intelligence."
                            tags={["Cloud_Infra", "Kubernetes", "Edge-AI"]}
                        />

                        <FounderCard
                            name="Ridwith_A"
                            role="Co-Founder & Full-Stack Architect"
                            icon={<LayoutDashboard size={24} />}
                            color="teal"
                            isLight={isLight}
                            bio="Ridwith is the architect of the human-machine interface, bridging complex systems architecture with sharp operational strategy. He specializes in high-fidelity Prompt Engineering and user-centric logic, ensuring that complex data streams are translated into secure, actionable clarity for operational teams."
                            tags={["HMI_Architect", "Prompt_Eng", "Operational_Clarity"]}
                        />
                    </div>
                </div>


            </section>

            <Footer />

        </div>
    );
}