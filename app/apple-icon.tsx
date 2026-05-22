import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "linear-gradient(180deg, #065f46 0%, #0f172a 100%)",
          borderRadius: 36,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            background: "#064e3b",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderBottom: "56px solid #34d399",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "88px solid #10b981",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "30px solid transparent",
              borderRight: "30px solid transparent",
              borderBottom: "64px solid #34d399",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
