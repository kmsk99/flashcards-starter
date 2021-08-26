import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuizz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

export const addQuizForTopicId = (payload) => {
  const { id, name, topicId, cardIds } = payload;
  console.log({ id, name, topicId, cardIds });
  return (dispatch) => {
    dispatch(addQuizz({ id, name, topicId, cardIds }));
    dispatch(addQuizzId({ id, topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuizz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
