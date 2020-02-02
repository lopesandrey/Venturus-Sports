import { Link } from 'src/app/core/models/link.model';

export const breadcrumb: Array<Link> = [
  {
    title: 'Home',
    url: '/',
    current: false,
  },
  {
    title: 'Albums',
    url: '/albums',
    current: true,
  },
];
