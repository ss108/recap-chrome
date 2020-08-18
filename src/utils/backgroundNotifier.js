// background notifier helpers
import { getImage } from './chrome';

const notificationOptions = ({ title, message }) => ({
  type: 'basic',
  title,
  message,
  iconUrl: getImage('icon-32.png'),
  priority: 0,
});

const id = 'recap_notification';

const showNotification = ({ title, message }) => {
  console.info('RECAP: Notifier dispatched. Expect a notification.');
  chrome.notifications.create(id, notificationOptions({ title, message }));

  chrome.notifications.onClicked.addListener((id) => chrome.notifications.clear(id));
};

export const handleBackgroundNotificationRequest = (req, sender, sendResponse) => {
  // destructure params
  const { action, title, message } = req.notifier;

  switch (action) {
    case 'show':
      showNotification({ title, message });
      sendResponse({ status: 'success' });
      break;
    case 'showUpload':
      chrome.storage.local.get('options', (items) => {
        if (!items || !items.options.show_notifications) return;
        showNotification({ title, message });
        sendResponse({ status: 'success ' });
      });
      break;
    case 'showStatus':
      chrome.storage.local.get('options', (items) => {
        if (!items || !items.options.show_notifications) return;
        showNotification({ title, message });
        sendResponse({ status: 'success ' });
      });
      break;
    default:
      break;
  }
};
