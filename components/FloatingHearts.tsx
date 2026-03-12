"use client";

import { Heart } from "lucide-react";
import { useMemo } from "react";

interface FloatingHeart {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  rotateEnd: number;
  scaleMin: number;
  scaleMax: number;
  variant: number;
}

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const generateHeart = (id: number): FloatingHeart => ({
  id,
  size: randomBetween(12, 30),
  top: randomBetween(5, 90),
  left: randomBetween(5, 95),
  opacity: randomBetween(0.06, 0.14),
  duration: randomBetween(16, 30),
  delay: randomBetween(0, 4),
  driftX: randomBetween(-250, 250),
  driftY: randomBetween(-250, 250),
  rotateEnd: randomBetween(-120, 120),
  scaleMin: randomBetween(0.85, 0.95),
  scaleMax: randomBetween(1.05, 1.15),
  variant: Math.floor(Math.random() * 4),
});

const HEART_COUNT = 14;

const buildKeyframes = (h: FloatingHeart): string => {
  const { driftX: dx, driftY: dy, rotateEnd: rot, scaleMin: smin, scaleMax: smax } = h;

  const paths: Record<number, string> = {
    0: `
      0% { transform: translate(0px,0px) rotate(0deg) scale(${smin}); }
      15% { transform: translate(${dx * 0.3}px,${dy * -0.2}px) rotate(${rot * 0.15}deg) scale(${smax}); }
      35% { transform: translate(${dx * -0.4}px,${dy * 0.5}px) rotate(${rot * 0.4}deg) scale(${smin}); }
      55% { transform: translate(${dx * 0.7}px,${dy * -0.6}px) rotate(${rot * 0.6}deg) scale(${smax}); }
      75% { transform: translate(${dx * -0.2}px,${dy * 0.8}px) rotate(${rot * 0.8}deg) scale(${smin}); }
      100% { transform: translate(0px,0px) rotate(0deg) scale(${smin}); }`,
    1: `
      0% { transform: translate(0px,0px) rotate(0deg) scale(${smax}); }
      20% { transform: translate(${dx * -0.5}px,${dy * 0.4}px) rotate(${rot * 0.2}deg) scale(${smin}); }
      40% { transform: translate(${dx * 0.6}px,${dy * 0.7}px) rotate(${rot * 0.45}deg) scale(${smax}); }
      60% { transform: translate(${dx * -0.3}px,${dy * -0.5}px) rotate(${rot * 0.65}deg) scale(${smin}); }
      80% { transform: translate(${dx * 0.4}px,${dy * -0.3}px) rotate(${rot * 0.85}deg) scale(${smax}); }
      100% { transform: translate(0px,0px) rotate(0deg) scale(${smax}); }`,
    2: `
      0% { transform: translate(0px,0px) rotate(0deg) scale(${smin}); }
      25% { transform: translate(${dx * 0.5}px,${dy * 0.3}px) rotate(${rot * 0.25}deg) scale(${smax}); }
      50% { transform: translate(${dx * -0.6}px,${dy * -0.7}px) rotate(${rot * 0.5}deg) scale(${smin}); }
      75% { transform: translate(${dx * 0.3}px,${dy * 0.6}px) rotate(${rot * 0.75}deg) scale(${smax}); }
      100% { transform: translate(0px,0px) rotate(0deg) scale(${smin}); }`,
    3: `
      0% { transform: translate(0px,0px) rotate(0deg) scale(${smax}); }
      18% { transform: translate(${dx * -0.4}px,${dy * -0.6}px) rotate(${rot * 0.2}deg) scale(${smin}); }
      42% { transform: translate(${dx * 0.8}px,${dy * 0.3}px) rotate(${rot * 0.45}deg) scale(${smax}); }
      68% { transform: translate(${dx * -0.5}px,${dy * 0.7}px) rotate(${rot * 0.7}deg) scale(${smin}); }
      100% { transform: translate(0px,0px) rotate(0deg) scale(${smax}); }`,
  };

  return `@keyframes bh${h.id} { ${paths[h.variant] || paths[0]} }`;
};

const FloatingHearts = () => {
  const hearts = useMemo(
    () => Array.from({ length: HEART_COUNT }, (_, i) => generateHeart(i)),
    []
  );

  const css = useMemo(() => hearts.map(buildKeyframes).join("\n"), [hearts]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {hearts.map((h) => (
          <Heart
            key={h.id}
            className="absolute text-orange-500"
            fill="currentColor"
            style={{
              width: h.size,
              height: h.size,
              top: `${h.top}%`,
              left: `${h.left}%`,
              opacity: h.opacity,
              animation: `bh${h.id} ${h.duration}s ${h.delay}s linear infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingHearts;
