const gameId = 'mgM8C5AAh0b4s4yNJ32o';

export default async function fn(user, score) {
  try {
    const sendScore = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });
    await sendScore.json();
  } catch (error) {
    throw new Error(error);
  }
}