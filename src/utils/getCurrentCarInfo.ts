import { proceedData } from "./proceedData";

interface I_Props {
  model: string;
  year: string;
}

export const getCurrentCarInfo = async ({ model, year }: I_Props) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FETCH_URL}/GetModelsForMakeIdYear/makeId/${model}/modelyear/${year}?format=json`
    );
    return await proceedData(res.body as ReadableStream);
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
