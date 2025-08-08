import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard: React.FC = () => {
  const location = useLocation();
  // Get name from navigation state
  const name = location.state?.name || "User";
  let avatar = null;
  if (name === "Achuth S Pai") { avatar = "./pic4.png"; }
  else if (name === "Jopaul Jose") { avatar = "./pic1.png"; }
  else if (name === "Vasudev Varma") { avatar = "./pic2.png"; }
  else if (name === "Vishnu Prasad G") { avatar = "./pic3.png"; }
  else if (name === "Johan Biju Paul") { avatar = "./pic5.png"; }

  return (
    <div style={{ minHeight: "100vh", background: "#f0f3ff", fontFamily: "'Poppins', sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1rem 0.5rem 1rem" }}>
        <div style={{ fontWeight: 700, fontSize: "2rem" }}>Aura dashboard 🚣🏾‍♂️</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {avatar ? (
            <>
              <img src={avatar} alt={name} style={{ width: 40, borderRadius: "50%", marginBottom: 4 }} />
              <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
            </>
          ) : (
            <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
          )}
        </div>
      </div>
      {/* Main content box */}
    <div style={{ margin: 20, border: "2px solid #000", background: "#fff", borderRadius: 8, minHeight: 550, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <>
      {(() => {
        const IMG_SIZE = 42;
        const BAR_HEIGHT = 34;
        const PADDING = 3;
        const bars = React.useMemo(
          () =>
            [
              "./pic1.png",
              "./pic2.png",
              "./pic3.png",
              "./pic4.png",
              "./pic5.png"
            ].map(img => ({ img, value: Math.round(30 + Math.random() * 70) })),
          []
        );

        return (
          <div style={{ width: "100%", padding: "1.2rem 1.4rem" }}>
            {bars.map(({ img, value }, i) => {
              const leftForImg = `calc(${value}% - ${IMG_SIZE / 2}px)`;
              return (
                <div key={i} style={{ marginBottom: 18, position: "relative" }}>
                  <div
                    style={{
                      position: "relative",
                      height: BAR_HEIGHT,
                      borderRadius: 20,
                      background: "transparent",
                      overflow: "visible",
                      padding: PADDING
                    }}
                  >
                    {/* Track */}
                    <div
                      style={{
                        position: "absolute",
                        inset: PADDING,
                        borderRadius: 14,
                        background: "#ebeff4"
                      }}
                    />
                    {/* Fill (neutral tone, no color coding, no numbers) */}
                    <div
                      style={{
                        position: "absolute",
                        left: PADDING,
                        top: PADDING,
                        bottom: PADDING,
                        width: value + "%",
                        maxWidth: `calc(100% - ${IMG_SIZE / 2 + 4}px)`,
                        borderRadius: 14,
                        background: "#c3ccd6"
                      }}
                    />
                    {/* Plain avatar at bar end */}
                    <img
                      src={img}
                      alt=""
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: leftForImg,
                        transform: "translateY(-50%)",
                        width: IMG_SIZE,
                        height: IMG_SIZE,
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })()}
    </>
    </div>
    </div>
  );
};

export default Dashboard;
