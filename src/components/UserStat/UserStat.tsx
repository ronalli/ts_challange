import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

interface UserStatProps extends Pick<LocalGithubUser, 'repos' | 'following' | 'followers'> { }

export const UserStat = ({ repos, following, followers }: UserStatProps) => (
  <div className={styles.userStat} >
   <div className={styles.info}>
		<div className={styles.infoTitle}>Repos</div>
		<div className={styles.infoNumbers}>{repos}</div>
	 </div>
   <div className={styles.info}>
		<div className={styles.infoTitle}>Following</div>
		<div className={styles.infoNumbers}>{following}</div>
	 </div>
   <div className={styles.info}>
		<div className={styles.infoTitle}>Followers</div>
		<div className={styles.infoNumbers}>{followers}</div>
	 </div>
  </div>
);
