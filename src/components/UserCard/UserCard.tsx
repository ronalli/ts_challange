import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle login={props.login} name={props.name} created={props.created} />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio!'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      twitter={props.twitter}
      location={props.location}
    />
  </div>
);
