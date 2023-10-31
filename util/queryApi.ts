import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const query = async (prompt: string) => {
  const res = await openai.completions
    .create({
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      max_tokens: 256,
    })
    .then((res) => res.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unalbe to find an answer for that ! (Error: ${err.message})`
    );

  return res;
};

export default query;
