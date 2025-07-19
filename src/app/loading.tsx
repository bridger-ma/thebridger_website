"use client";
import { useEffect, useRef, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      transition: "opacity 0.5s",
      opacity: show ? 1 : 0,
    }}>
      <video
        ref={videoRef}
        src="/video/original-6433de79a34f799bf4a634cbbdda7967.mp4"
        autoPlay
        muted
        playsInline
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
} 