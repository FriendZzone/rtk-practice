export const getUrlParameterJson = (): string => {
  const search = window.location.search.substring(1);
  if (search !== '') {
    const urlParams = JSON.parse(
      `{"${search.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
      (key, value) => {
        return key === '' ? value : decodeURIComponent(value);
      }
    );
    return JSON.stringify(urlParams);
  }
  return '';
};
