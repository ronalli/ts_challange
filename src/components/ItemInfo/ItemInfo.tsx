import styles from './ItemInfo.module.scss';
import React from 'react';

export interface ItemInfoProps {
  icon: React.ReactNode;
  text: string | null;
  isLink?: boolean;
}

export const ItemInfo = ({ icon, text, isLink }: ItemInfoProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.itemInfo}${text ? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target='_blanck'
            ref='noreferrer'
            className={styles.link}
          >
            currentText
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
