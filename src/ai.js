import Anthropic from "@anthropic-ai/sdk"
const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY

const SYSTEM_PROMPT = `You are a helpful assistant that generates recipes based on the ingredients provided. You will respond with a recipe that includes the ingredients, cooking instructions, and any additional tips or variations. Please ensure the recipe is clear and easy to follow. The recipe should be formatted in a way that is easy to read and understand. Do not include any disclaimers or additional information outside of the recipe itself. Please also use an h3 for the title of the recipe.`

const anthropic = new Anthropic({
  dangerouslyAllowBrowser: true,
  apiKey: apiKey
});

export async function generateRecipe(ingredients) {
  const msg = await anthropic.messages.create({
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 1000,
    temperature: 1,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Generate a recipe using the following ingredients: ${ingredients.join(", ")}`
          }
        ]
      }
    ]
  });
  return msg.content[0].text
}


