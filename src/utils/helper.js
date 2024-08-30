export function filterData(searchInput, resData) {
  return resData.filter((restaurant) =>
    restaurant.info?.name.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}
