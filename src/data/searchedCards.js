import image_04 from '../images/image_04.jpg';
import image_07 from '../images/image_07.jpg';
import image_08 from '../images/image_08.jpg';

export const searchedCards = [
  {
    _id: Math.random() * 1000,
    image: image_08,
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    article:
      'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: 'treehugger',
    date: 'November 4, 2020',
  },
  {
    _id: Math.random() * 1000,
    image: image_04,
    title: 'Nature makes you better',
    article:
      'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    source: 'national geographic',
    date: 'October 19, 2020',
  },
  {
    _id: Math.random() * 1000,
    image: image_07,
    title: 'Grand Teton Renews Historic Crest Trail',
    article:
      '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...',
    source: 'National parks traveler',
    date: 'October 19, 2020',
  },
];
