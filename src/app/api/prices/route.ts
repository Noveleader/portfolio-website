import { NextRequest, NextResponse } from "next/server";
import fetchPrices from "../fetchPrices";

export const revalidate = 0; // ensure no caching at all

export async function GET(req: NextRequest) {
  try {
    const prices = await fetchPrices();
    if (prices) {
      return NextResponse.json(prices, {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      });
    } else {
      throw new Error("Prices couldn't be fetched");
    }
  } catch (err) {
    console.error(`Error occurred while fetching the prices of assets: ${err}`);
    return NextResponse.json(
      { error: "Failed to fetch prices" },
      { status: 500 }
    );
  }
}