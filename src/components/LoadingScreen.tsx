import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "INITIALIZING AI...",
    "LOADING NEURAL NETWORK...",
    "LOADING AI AGENTS...",
    "INITIALIZING EXPERIENCE...",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // give it a moment at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1; // random jump up to 15
      });
    }, 300);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete, texts.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative bg element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 font-mono">
          NEXUS<span className="text-indigo-500">.AI</span>
        </h1>

        <div className="h-6 overflow-hidden mb-4 relative">
          <AnimatePresence mode="popLayout">
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm tracking-widest text-zinc-400 font-mono text-center"
            >
              {texts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
            layout
          />
        </div>

        <div className="mt-4 font-mono text-xs text-zinc-500">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
