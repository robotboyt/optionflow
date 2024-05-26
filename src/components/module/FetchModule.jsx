import axios from "axios";

const FetchModule = async (setPageData, setContextData, link) => {
  try {
    const dataResponse = await axios.get(link);
    const data = dataResponse.data;
    setPageData(data);
    if (setContextData) {
      setContextData(data);
    }
    console.log("requeest");
  } catch (error) {
    console.error(error);
  }
};

export default FetchModule;
