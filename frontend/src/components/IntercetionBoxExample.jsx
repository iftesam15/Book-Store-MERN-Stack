import { useEffect, useRef } from "react";

export default function MultiObserverExample() {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.id} is visible`);
            entry.target.style.background = "lightgreen";
          } else {
            entry.target.style.background = "coral";
          }
        });
      },
      { threshold: 0.5 }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ height: "50vh", overflow: "auto" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          id={`box-${n}`}
          ref={(el) => (boxesRef.current[n - 1] = el)}
          style={{
            height: 100,
            margin: 20,

            borderRadius: 8,
            transition: "background 0.3s",
          }}
        >
          Box {n}
        </div>
      ))}
    </div>
  );
}
