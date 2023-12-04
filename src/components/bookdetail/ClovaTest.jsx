import axios from "axios";

const ClovaSentiment = async (content) => {
    try {
        const url = "http://localhost:8080/sentiment";
        const response = await axios.get(url, { params: { content: content } });
        const responseData = response.data;
        console.log(responseData);

        // return responseReview;
    } catch (error) {
        console.log(error);
    }
}

export default ClovaSentiment;