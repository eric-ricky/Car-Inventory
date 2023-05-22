// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { carsData } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  error?: {
    message: string;
  };
  data?: {
    count: number;
    cars: {
      id: string;
      url: string;
      make: string;
      model: string;
      year: number;
      price: number;
    }[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.status(400).json({
      error: { message: `Incorrect method ${req.method}` },
      success: false,
    });
    return;
  }

  try {
    const data = {
      count: carsData.length,
      cars: carsData,
    };

    res.status(200).json({ data, success: true });
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Something went wrong!",
      },
      success: false,
    });
  }
}
