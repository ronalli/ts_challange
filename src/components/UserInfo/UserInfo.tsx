import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';
import { ItemInfo, ItemInfoProps } from 'components/ItemInfo';

import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';

interface UserInfoProps
  extends Pick<LocalGithubUser, 'location' | 'company' | 'blog' | 'twitter'> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {

	const items: ItemInfoProps[] = [{
		icon: <CompanyIcon />,
		text: company
	},
	{
		icon: <LocationIcon />,
		text: location,
	}, 
	{
		icon: <BlogIcon />,
		text: blog,
		isLink: true
	}, 
	{
		icon: <TwitterIcon />,
		text: twitter
	}
]

	return(
  <div className={styles.userInfo}>
		{
			items.map((el, index) => <ItemInfo {...el} key={index}/>)
		}
	</div>)
};
