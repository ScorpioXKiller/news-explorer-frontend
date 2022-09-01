import './About.css';
import authorImage from '../../images/me.jpg';

const About = () => {
  return (
    <section className='about'>
      <img src={authorImage} className='about__image' alt='author' />

      <div className='about__container'>
        <h2 className='about__title'>About me</h2>
        <p className='about__paragraph'>
          Hi! I am Dima Gorodov, a full-stack web developer. At the moment I’m
          studying B.Sc. in Software Engineering and also looking for
          appropriate positions. I'm a very self-motivated person who always
          take any opportunity to learn new things and I always strive to
          achieve my goals.
        </p>

        <p className='about__paragraph'>
          I'm focused on a MERN technology stack, but also have some experience
          in other programmer languages such as: C#, C++, Java. Also I have
          knowledge in design patterns, architectural patterns and OOP.
        </p>
      </div>
    </section>
  );
};

export default About;
