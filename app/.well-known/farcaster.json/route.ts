import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
    accountAssociation: {
    "header": "eyJmaWQiOjkwODY3OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweEU1Y2JEMjVCNmUwMGJjQTAxMDI2MjhjMTZiMTMyNUM5MzY4NEE1NjcifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYWJhc2UtbWluaS1hcHAtMi52ZXJjZWwuYXBwIn0",
    "signature": "utO5nl6f81C/yAgeNqv5eY7xCV/innF4h2nbOUKZYbgalOSvaxH/rtskNB9MwMA/JMul2c0Stp04GGAd+MBm6xs="
  },
    frame: {
      version: "1",
      name: "Trankil Farcaster MiniApp",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["Base", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
