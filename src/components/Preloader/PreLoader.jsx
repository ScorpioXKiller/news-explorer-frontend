import './PreLoader.css';

const PreLoader = () => {
  return (
    <section className='preloader'>
      <i className='preloader__circle-item'></i>
      <span className='preloader__text'>Searching for news...</span>
    </section>
  );
};

export default PreLoader;
