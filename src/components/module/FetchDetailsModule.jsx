import axios from "axios";

const FetchDetailsModule = (setCurrentPageData, link, id, navigate) => {
  const fetchService = async () => {
    try {
      const dataResponse = await axios.get(link + id);

      const resultResponse = await dataResponse.data;
      if (resultResponse.length === 0) {
        navigate("/*");
      }
      await setCurrentPageData(resultResponse);
      console.log(resultResponse);
    } catch (error) {
      console.error(error);
    }
    console.log("here is fetch");
  };

  fetchService();
};

export default FetchDetailsModule;
