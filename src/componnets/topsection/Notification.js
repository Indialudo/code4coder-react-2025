// components/NotificationsPage.js
import React from 'react';
import styles from '../../styles/top/notification.module.css';

const notifications = [
    'This is a sample notification.',
    'Another notification for demonstration.',
    'One more notification to show responsiveness.',
  ];


const Notification = () => {
  return (
    <div className={styles.notificationsWrapper}>
      {notifications.map((notification, index) => (
        <div key={index} className={styles.notificationWrapper}>
          {notification}
        </div>
      ))}
    </div>
  );
};

export default Notification;
