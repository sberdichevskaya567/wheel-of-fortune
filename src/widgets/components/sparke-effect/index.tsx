import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Sparkle from "@/shared/components/sparkle";
import type { ISparklesEffectProps } from "@/shared/interface/sparkle-effect";

const SparklesEffect = ({ trigger, originRef }: ISparklesEffectProps) => {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    if (!trigger || !originRef.current) return;

    const rect = originRef.current?.getBoundingClientRect();

    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: originX,
      y: originY,
    }));

    setParticles(newParticles);

    const timeout = setTimeout(() => {
      setParticles([]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [trigger, originRef]);

  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {particles.map((p) => (
        <Sparkle key={p.id} originX={p.x} originY={p.y} />
      ))}
    </div>,
    document.body,
  );
};

export default SparklesEffect;
