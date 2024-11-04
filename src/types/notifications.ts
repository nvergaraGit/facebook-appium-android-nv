export type NotificationData = {
  body: string;
  category: string;
  createdAt: string;
  image: null | string;
  messageId: string;
  pairId: string;
  status: string;
  title: string;
  updatedAt: string;
};

export type NotificationsStack = {
  Notifications: undefined;
  NotificationsDetails: { notification: NotificationData };
};
