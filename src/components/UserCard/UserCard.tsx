import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle login={props.login} name={props.login} created={props.created} />
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
