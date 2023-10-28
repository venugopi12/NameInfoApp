import axios from 'axios';

const API_URLS = {
  age: 'https://api.agify.io?name=meelad',
  gender: 'https://api.genderize.io?name=luc',
  nationality: 'https://api.nationalize.io?name=nathaniel',
};

export const fetchData = async (name, infoType) => {
  const apiUrl = API_URLS[infoType];

  if (!apiUrl) {
    throw new Error('Invalid infoType specified');
  }

  try {
    const response = await axios.get(apiUrl, {
      params: { name },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
