import { favStoresInfo, ingredientsInfo } from "../mock-data";

const copyPrices = (from , to) => {
    const result = []
    to.forEach(item => {
        const filtered = from.filter((filteredItem) => filteredItem.name === item.name)
        result.push(filtered[0])
    })
    return result
}
const useAppStore = (state, dispatch) => {
    return {

      getIngredients: () => {
       let totalPrice = 0
       ingredientsInfo.forEach(item => {
           totalPrice += item.price
       })
       dispatch({ type: "ingredients", payload: ingredientsInfo });
       dispatch({ type: "totalPrice", payload: totalPrice });
      },

      updateTotal: ({type, price}) => {
          const { totalPrice } = state
          let updatedPrice
          if(type === 'increase'){
              updatedPrice = totalPrice + price
          }else if(type === 'decrease'){
              updatedPrice = totalPrice - price
          }
        dispatch({type: 'totalPrice', payload: updatedPrice})
      },

      deleteSelectedIngredient: (item) => {
          const {ingredients} = state
          const filteredIngredients = ingredients.filter((val, indx) => val.name !== item.name)
          dispatch({type: 'ingredients', payload: [...filteredIngredients]})
      },

      getFavStores: () => {
        dispatch({ type: "favStores", payload: favStoresInfo });
      },

      getStoreLocations: (storeName) => {
        const {ingredients} = state
         const filteredStore = favStoresInfo.filter(store => store.name === storeName)
         const updatedIngredients = copyPrices(filteredStore[0]?.ingredients, ingredients)
         dispatch({ type: "selectedStoreLocation", payload: filteredStore[0]?.locations });
         dispatch({ type: "ingredients", payload: updatedIngredients });
      },

      setDeliveryHours: (hours) => {
          dispatch({ type: "deliveryHours", payload: hours });
      }

    };
  };

  export default useAppStore;
