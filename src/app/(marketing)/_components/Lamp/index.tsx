import { LampContainer } from "@/components/ui/lampui";
import { Highlight } from "@/components/ui/hero-highlight"; // Ensure this path is correct
import { SparklesCore } from "@/components/ui/sparkles";

const Lamp = () => {
  return (
    <LampContainer>
       <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      <div className="flex flex-col items-center justify-center relative w-full text-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:leading-snug font-extrabold mt-8">
        AI-Powered Care <br />  <Highlight className="text-black dark:text-white">
        Redefining Health🙌🏻
        </Highlight>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-md mx-auto font-bold">
        Experience the future of healthcare with NEXAURA.AI⚡️ unleashing groundbreaking AI to diagnose faster, treat smarter, and keep you healthier than ever before
        </p>
      </div>
    </LampContainer>
  );
};

export default Lamp;
