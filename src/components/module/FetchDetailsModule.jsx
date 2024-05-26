import axios from "axios";

const FetchDetailsModule = (
  pageNewData,
  setCurrentPageData,
  setContextData,
  link,
  id,
  navigate
) => {
  if (pageNewData !== null) {
    const getResult = (newArr, newID) => {
      const result = newArr.filter((obj) => obj.id === newID);
      setCurrentPageData(result);
      console.log("here is filter");
    };
    getResult(pageNewData, Number(id));
  } else {
    const fetchService = async () => {
      try {
        const dataResponse = await axios.get(link);

        const resultResponse = await dataResponse.data.filter(
          (obj) => obj.id === +id
        );
        if (resultResponse.length === 0) {
          navigate("/*");
        }
        await setCurrentPageData(resultResponse);
        setContextData(dataResponse.data.reverse());
      } catch (error) {
        console.error(error);
      }
      console.log("here is fetch");
    };

    fetchService();
  }
};

export default FetchDetailsModule;
