import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Globe, Database, Server } from 'lucide-react';

const TECH_STACK = [
  {
    id: 1,
    name: "AI & Neural Networks",
    icon: Cpu,
    description: "Leveraging TensorFlow and PyTorch for predictive modeling, generative AI agents, and natural language understanding.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Spatial Computing",
    icon: Globe,
    description: "Building immersive metaverse experiences using Unity, Unreal Engine 5, and WebGL for next-gen interaction.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Decentralized Protocols",
    icon: Database,
    description: "Smart contract development on Ethereum and Polygon ensuring transparent, immutable, and secure transactional layers.",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: 4,
    name: "Cloud Architecture",
    icon: Server,
    description: "Serverless scalable infrastructure powered by AWS Lambda and edge computing solutions for global low-latency access.",
    color: "from-orange-500 to-red-500"
  }
];

export const Technology: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="technology" className="py-24 bg-[#030303] relative overflow-hidden scroll-mt-20">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#01C853] opacity-5 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Powered by <span className="neon-text">Innovation</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Our stack is built on the bleeding edge of technology, ensuring speed, security, and scalability for every solution we deploy.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TECH_STACK.map((tech, index) => (
                    <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-[#01C853]/50 transition-all duration-300 overflow-hidden"
                    >
                         <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
                         
                         <div className="flex items-start gap-6">
                             <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#01C853]/50 transition-colors">
                                 <tech.icon size={32} className="text-gray-300 group-hover:text-[#01C853] transition-colors" />
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                     {tech.name}
                                 </h3>
                                 <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                     {tech.description}
                                 </p>
                             </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
