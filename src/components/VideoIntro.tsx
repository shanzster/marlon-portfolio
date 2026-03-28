import { Play } from "lucide-react";

const VideoIntro = () => {
  return (
    <section id="video" className="py-20 gradient-warm">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-3">
          Video Introduction
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-sm">
          Get to know me better through a short introduction
        </p>

        <div className="neu-card p-3">
          <div className="relative w-full aspect-video rounded-xl bg-muted neu-inset flex items-center justify-center overflow-hidden">
            {/* PLACEHOLDER: Replace this div with your video embed */}
            {/* Example: <iframe src="your-video-url" className="w-full h-full rounded-xl" allowFullScreen /> */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="w-7 h-7 text-primary ml-1" />
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
