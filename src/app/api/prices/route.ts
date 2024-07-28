import { NextRequest, NextResponse } from "next/server";
import fetchPrices from "../fetchPrices";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const prices = await fetchPrices();
    if (prices) {
      return NextResponse.json(prices);
    } else {
      throw new Error("Prices couldn't be fetched");
    }
  } catch (err) {
    console.error(`Error occured while fetching the prices of assets ${err}`);
    return NextResponse.json({ error: err });
  }
}
