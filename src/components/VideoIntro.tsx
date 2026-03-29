import { Play } from "lucide-react";

const VideoIntro = () => {
  return (
    <section id="video" className="section-muted py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="section-title">Video Introduction</h2>
        <div className="section-title-underline" />

        <p className="text-muted-foreground text-center mb-10 text-sm -mt-6">
          Get to know me better through a short introduction
        </p>

        <div className="soft-card p-2">
          <div className="relative w-full aspect-video rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            {/* PLACEHOLDER: Replace this div with your video embed */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-0.5" />
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
