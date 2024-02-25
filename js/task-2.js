function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }

  const trimmedMessage = message.substring(0, maxLength - 3);

  return trimmedMessage + '...';
}
