export const fetchApiQuestions = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/questions');
    const { results } = await response.json();

    return results;
  } catch (error) {
    return 'error';
  }
};
