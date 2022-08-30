import './About.css';
import authorImage from '../../images/me.jpg';

const About = () => {
  return (
    <section className='about'>
      <img src={authorImage} className='about__image' alt='author' />

      <div className='about__container'>
        <h2 className='about__title'>About the me</h2>
        <p className='about__paragraph'>
          Hi! I am Dima Gorodov, a full-stack web developer. At the moment I’m
          studying B.Sc. in Software Engineering and looking for a approprtiate
          positions. I'm a very self-motivated person who always take any
          opportunity to learn new things and always strive to achieve my goals.
        </p>

        <p className='about__paragraph'>
          I'm focused on a MERN technology stack, but also have some expirence
          in other programmer languages such as: C#, C++, Java. Also I know
          about the design and architectural patterns.
        </p>
      </div>
    </section>
  );
};

export default About;
