import image_04 from '../images/image_04.jpg';
import image_07 from '../images/image_07.jpg';
import image_08 from '../images/image_08.jpg';
import image_01 from '../images/image_01.jpg';
import image_05 from '../images/image_05.jpg';

export const savedCards = [
  {
    _id: Math.random() * 1000,
    image: image_08,
    category: 'Nature',
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    article:
      'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: 'treehugger',
    date: 'November 4, 2020',
    isSaved: true,
  },
  {
    _id: Math.random() * 1000,
    image: image_04,
    category: 'Nature',
    title: 'Nature makes you better',
    article:
      'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    source: 'national geographic',
    date: 'February 19, 2019',
    isSaved: true,
  },
  {
    _id: Math.random() * 1000,
    image: image_05,
    category: 'Yellowstone',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    article:
      'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...',
    source: 'national geographic',
    date: 'October 19, 2020',
    isSaved: true,
  },
  {
    _id: Math.random() * 1000,
    image: image_07,
    category: 'Parks',
    title: 'Grand Teton Renews Historic Crest Trail',
    article:
      '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...',
    source: 'National parks traveler',
    date: 'November 4, 2020',
    isSaved: true,
  },
  {
    _id: Math.random() * 1000,
    image: image_01,
    category: 'Photography',
    title: "Scientists Don't Know Why Polaris Is So Weird ",
    article:
      'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.',
    source: 'treehugger',
    date: 'March 16, 2020',
    isSaved: true,
  },
];
