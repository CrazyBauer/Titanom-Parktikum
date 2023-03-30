const prompt = "My dog ate my";
const model = "davinci";
const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/completions";
const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

const requestBody = {
  prompt: prompt,
  model: model,
  n: 1,
};

fetch(apiUrl, {
  method: "POST",
  headers: header,
  body: JSON.stringify(requestBody),
})
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data.choices[0].text);
  })
  .catch((error) => console.log(error));
