"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(
      "https://www.youtube.com/embed/Olf13SdRwKs?autoplay=1&controls=0&showinfo=0&autohide=1"
    );
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Auto-play when component mounts
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          // Auto-play was prevented
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
    }

    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Play prevented:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full bg-[#8B5A2B]/10 hover:bg-[#8B5A2B]/20 text-[#8B5A2B]"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full bg-[#8B5A2B]/10 hover:bg-[#8B5A2B]/20 text-[#8B5A2B]"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
