import { Play } from "lucide-react";

const VideoIntro = () => {
  return (
    <section id="video" className="py-20 gradient-section-warm">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="section-title">Video Introduction</h2>
        <p className="text-muted-foreground text-center mb-10 text-sm">
          Get to know me better through a short introduction
        </p>

        <div className="neu-card p-3">
          <div className="relative w-full aspect-video rounded-xl neu-inset bg-white/40 flex items-center justify-center overflow-hidden">
            {/* PLACEHOLDER: Replace this div with your video embed */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full gradient-btn-primary flex items-center justify-center">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                Video introduction coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
