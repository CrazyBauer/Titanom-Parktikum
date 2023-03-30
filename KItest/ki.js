const text = "My dog ate my";
const model = "davinci";
const apiKey = "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";
const url = "https://api.openai.com/v1/completions";
const header = {
  "Content-Type": "application/jason",
  Authorization: `Bearer ${apiKey}`,
};

const requestBody = {
  text,
  model,
  n: 1,
};
