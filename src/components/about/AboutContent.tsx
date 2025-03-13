
import { Separator } from "@/components/ui/separator";

export function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">OUR STORY</h2>
        <p className="text-lg text-shin-gray mb-6">
          Founded in 2018, ShinCity began as a collective of musicians, designers, and audio engineers with a shared vision: 
          to create a brand that embodies the fusion of innovative sound and cutting-edge style.
        </p>
        <p className="text-lg text-shin-gray mb-6">
          What started as limited-run merchandise for underground music events quickly evolved into a global movement. 
          Today, ShinCity stands at the intersection of music culture and premium design, offering exclusive products 
          that reflect our commitment to quality and artistic expression.
        </p>
        <p className="text-lg text-shin-gray">
          Each ShinCity release – whether it's a piece of clothing, an audio device, or a musical production – is created with meticulous 
          attention to detail and a forward-thinking approach that pushes boundaries and challenges conventions.
        </p>
      </div>
      
      <Separator className="my-16" />
      
      <div className="mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">OUR MISSION</h2>
        <p className="text-lg text-shin-gray">
          ShinCity exists to empower creative expression through sound and style. We believe in the transformative power of music 
          and its ability to connect people across cultures and backgrounds. Our mission is to create products and experiences that 
          inspire our community to embrace individuality, push creative boundaries, and move confidently into the future.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h3 className="font-display font-bold text-xl mb-4">INNOVATION</h3>
          <p className="text-shin-gray">
            We continuously explore new technologies, materials, and production techniques to create products that stand at the 
            forefront of audio and design innovation.
          </p>
        </div>
        
        <div>
          <h3 className="font-display font-bold text-xl mb-4">QUALITY</h3>
          <p className="text-shin-gray">
            Each ShinCity product undergoes rigorous testing and quality control to ensure it meets our exacting standards. 
            We never compromise on materials, construction, or performance.
          </p>
        </div>
        
        <div>
          <h3 className="font-display font-bold text-xl mb-4">SUSTAINABILITY</h3>
          <p className="text-shin-gray">
            We're committed to reducing our environmental impact by using sustainable materials, ethical manufacturing practices, 
            and minimizing waste in our production processes.
          </p>
        </div>
        
        <div>
          <h3 className="font-display font-bold text-xl mb-4">COMMUNITY</h3>
          <p className="text-shin-gray">
            ShinCity is built on a foundation of collaboration and community. We actively support emerging artists, musicians, 
            and designers who share our vision and values.
          </p>
        </div>
      </div>
    </div>
  );
}
