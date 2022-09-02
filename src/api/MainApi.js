class MainApi {
  constructor(url) {
    this._url = url;
  }

  register = ({ name, email, password }) => {
    return this._fetchPost('signup', { name, email, password }).then(
      (response) => this._checkResponse(response)
    );
  };

  authorize = ({ email, password }) => {
    return this._fetchPost('signin', { email, password })
      .then((response) => this._checkResponse(response))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  };

  getUserInfo = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((data) => data);
  };

  getUserArticles = (token) => {
    return fetch(`${this._url}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  };

  saveArticle = (token, data, keywords) => {
    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword: keywords,
        title: data.title,
        text: data.description,
        date: data.publishedAt,
        source: data.source.name,
        link: data.url,
        image: data.urlToImage,
      }),
    }).then(this._checkResponse);
  };

  deleteArticle = (token, articleId) => {
    return fetch(`${this._url}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  };

  _fetchPost = (route, props) => {
    return fetch(`${this._url}/${route}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });
  };

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.status);
  }
}

const mainApi = new MainApi(
  'https://api.dimagorodov-news-explorer.students.nomoredomainssbs.ru'
);

export default mainApi;
