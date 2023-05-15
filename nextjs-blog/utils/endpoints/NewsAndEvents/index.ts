import { EndPoint } from '@/types/index';

export const NewsAndEvents: EndPoint = {
  getNews: {
    uri: '/news',
    method: 'GET',
    version: '',
  },
  getSingleNews: {
    uri: '/news/:newsId',
    method: 'GET',
    version: '',
  },
  getEvents: {
    uri: '/event',
    method: 'GET',
    version: '',
  },
};
