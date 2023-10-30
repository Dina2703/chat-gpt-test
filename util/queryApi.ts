import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const query = async (prompt: string, model: string) => {
  const res = await openai.chat.completions
    .create({
      model,
      messages: [{"role": "user", "content": prompt }]
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
    })
    .then((res) => res.choices[0].message)
    .catch(
      (err) =>
        `ChatGPT was unalbe to find an answer for that ! (Error: ${err.message})`
    );

  return res;
};

export default query;
