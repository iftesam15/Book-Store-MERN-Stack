import { useEffect, useRef, useState } from "react";

export default function InfiniteScrollList() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    // Simulate API call
    const newItems = Array.from({ length: 10 }, (_, i) => items.length + i + 1);
    setTimeout(() => {
      setItems((prev) => [...prev, ...newItems]);
    }, 1000);
  }, [items.length, page]);

  return (
    <div style={{ maxHeight: "50vh", overflowY: "auto", padding: 20 }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: 20,
            margin: "10px 0",
            background: "#f2f2f2",
            borderRadius: 8,
          }}
        >
          Item #{item}
        </div>
      ))}
      <div ref={loaderRef} style={{ height: 40, textAlign: "center" }}>
        Loading...
      </div>
    </div>
  );
}
