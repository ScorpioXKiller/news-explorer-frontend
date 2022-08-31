class NewsApi {
  constructor(url) {
    this._url = url;
  }

  findNewsByKeywords(keywords) {
    return this._defaultFetch(
      `${this._url}/everything?q=${keywords}&from=${this._getNewDate(
        7
      )}&to=${new Date().getDate()}&sortBy=publishedAt&language=en&pageSize=100&apiKey=c4ed22d7a0544139b59f411ab96c63a0`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  _getNewDate(dateOffset) {
    let date = new Date();
    let newDate = date.getDate() - dateOffset;
    date.setDate(newDate);
    return date;
  }

  _defaultFetch = (url, settings) =>
    fetch(url, settings).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
}

const newsApi = new NewsApi('https://nomoreparties.co/news/v2');

export default newsApi;
