"use server";

export const getModels = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FETCH_URL}/GetMakesForVehicleType/car`
    );
    return res.body;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
