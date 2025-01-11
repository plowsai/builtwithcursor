// Extract username from X/Twitter URL
export function extractTwitterUsername(url) {
  try {
    const urlObj = new URL(url);
    if (!urlObj.hostname.includes('twitter.com') && !urlObj.hostname.includes('x.com')) {
      return null;
    }
    // Remove any trailing slashes and get the last part of the path
    const username = urlObj.pathname.replace(/\/$/, '').split('/').pop();
    return username;
  } catch (e) {
    return null;
  }
}

// Construct profile image URL (since we can't directly fetch from Twitter's API without auth)
export function getTwitterProfileImageUrl(username) {
  if (!username) return null;
  return `https://unavatar.io/twitter/${username}`;
} 