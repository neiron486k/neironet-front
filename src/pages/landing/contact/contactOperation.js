import { sendFeedbackRequest } from "../../../api/feedback";
import { SubmissionError, reset } from 'redux-form'

export const requestToFeedback = values => {
    return async dispatch => {
        try {
            const response = await sendFeedbackRequest(values);
            const message = response.data;
            dispatch(reset('contactForm'));
        } catch (e) {
            const errors = e.response.data.errors;
            throw new SubmissionError(errors);
        }
    }
};