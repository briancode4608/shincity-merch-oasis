
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ExternalLink } from "lucide-react";

// Sample music releases
const releases = [
  {
    id: "1",
    title: "Neon Dreams",
    artist: "ShinCity",
    releaseDate: "2023-10-15",
    coverImage: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=800",
    type: "Album",
    tracks: [
      { title: "Midnight Run", duration: "3:42" },
      { title: "Electric Pulse", duration: "4:15" },
      { title: "Neon Streets", duration: "3:58" },
      { title: "Digital Love", duration: "5:03" },
      { title: "Future Beats", duration: "4:27" },
    ],
  },
  {
    id: "2",
    title: "Urban Echo",
    artist: "ShinCity x DJ Pulse",
    releaseDate: "2023-06-22",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    type: "EP",
    tracks: [
      { title: "City Lights", duration: "3:35" },
      { title: "Echo Chamber", duration: "4:50" },
      { title: "Concrete Jungle", duration: "3:21" },
    ],
  },
  {
    id: "3",
    title: "Lost Signal",
    artist: "ShinCity",
    releaseDate: "2022-11-30",
    coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800",
    type: "Single",
    tracks: [
      { title: "Lost Signal", duration: "4:12" },
      { title: "Lost Signal (Remix)", duration: "5:20" },
    ],
  }
];

export function MusicReleaseList() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const togglePlay = (releaseId: string, trackTitle: string) => {
    const trackId = `${releaseId}-${trackTitle}`;
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  return (
    <div className="space-y-16">
      {releases.map((release) => (
        <div key={release.id} className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="aspect-square bg-shin-gray/10 overflow-hidden">
              <img 
                src={release.coverImage} 
                alt={release.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="mb-6">
              <div className="text-xs uppercase font-medium text-shin-accent mb-2">
                {release.type} • {new Date(release.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-1">{release.title}</h3>
              <div className="text-shin-gray">{release.artist}</div>
            </div>
            
            <div className="space-y-2 mb-6">
              {release.tracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-shin-gray/10">
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-8 h-8 mr-4 text-shin-black hover:bg-shin-gray/10"
                      onClick={() => togglePlay(release.id, track.title)}
                    >
                      {playingTrack === `${release.id}-${track.title}` ? (
                        <Pause size={16} />
                      ) : (
                        <Play size={16} />
                      )}
                    </Button>
                    <div>
                      <span className="font-medium">{track.title}</span>
                    </div>
                  </div>
                  <div className="text-shin-gray text-sm">
                    {track.duration}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-shin-black text-shin-black hover:bg-shin-black hover:text-shin-white rounded-none"
              >
                Listen on Spotify
                <ExternalLink size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-shin-black text-shin-black hover:bg-shin-black hover:text-shin-white rounded-none"
              >
                Apple Music
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
