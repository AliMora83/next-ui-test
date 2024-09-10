"use client";

import { Card, CardBody, Button } from "@nextui-org/react";
import { PauseCircleIcon } from "../public/PauseCircleIcon";
import { PlayCircleIcon } from "../public/PlayCircleIcon";
import { NextIcon } from "../public/NextIcon";
import { PreviousIcon } from "../public/PreviousIcon";
import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@nextui-org/slider";
import { tracks, Track } from "../src/app/trackData";

export default function MusicCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack: Track = tracks[currentTrackIndex];

  const handleToggle = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = currentTrack.audioSrc;
      audio.load();
      if (isPlaying) audio.play();
    }
  }, [currentTrackIndex, currentTrack.audioSrc, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
      };

      const setAudioTime = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("loadedmetadata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);

      return () => {
        audio.removeEventListener("loadedmetadata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      };
    }
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Card className="w-1/2 mx-auto" shadow="sm">
      
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-5 md:gap-20 items-center justify-center">
          <div className="flex flex-col w-full col-span-6 md:col-span-1 p-10 space-y-20">
            <div className="flex justify-between items-center">
              <div className="">
                <h4
                  className="font-semibold text-foreground/90"
                  id="track_name"
                >
                  {currentTrack.name}
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Slider
                aria-label="Audio progress"
                classNames={{
                  track: "bg-default-500/50",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                value={currentTime}
                maxValue={duration || 100}
                step={0.1}
                onChange={(value) => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = value as number;
                  }
                }}
                size="sm"
              />
              <div className="flex justify-between" id="track_progress">
                <p className="text-small">{formatTime(currentTime)}</p>
                <p className="text-small text-foreground/50">
                  {formatTime(duration)}
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={handlePrevious}
              >
                <PreviousIcon width={100} height={100} size={15} />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={handleToggle}
              >
                {isPlaying ? (
                  <PauseCircleIcon width={100} height={100} size={34} />
                ) : (
                  <PlayCircleIcon width={100} height={100} size={34} />
                )}
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={handleNext}
              >
                <NextIcon width={100} height={100} size={15} />
              </Button>
            </div>
          </div>
        </div>
        <audio id="track_audio" ref={audioRef} src={currentTrack.audioSrc} />
      </CardBody>
    </Card>
  );
}
