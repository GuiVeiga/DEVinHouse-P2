export const fetchAPI = async (params) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/${params}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST,
        'x-rapidapi-key': process.env.REACT_APP_KEY,
      },
    });
    const mmoGames = await response.json();
    return mmoGames;
  } catch (e) {
    console.error(e.message);
  }
};
