import axios from "axios";

export function sanitizeWord(kata: string): string {
  return kata.replace(/[^a-zA-Z0-9 ]/g, "");
}

export const getRandomQuotes = async (limit: number = 1) => {
  const quote_url = `https://api.quotable.io/quotes/random?limit=${limit}`;
  let result;

  try {
    const res = await axios.get(quote_url);

    result = res.data[0];
    //console.log("Berhasil");
    //   console.log(result)
  } catch (error) {
    ///result = [`Data GAGAL di ambil`]
    console.error(error);
    throw new Error("Failed");
  }

  return result;
};

export const getMyName = () => {
  return "Pala Kao Botak";
};
