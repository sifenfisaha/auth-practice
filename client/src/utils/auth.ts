export function getTokenDuration() {
  const storedexpirationDate = localStorage.getItem("expiration");
  if (!storedexpirationDate) {
    return;
  }
  const expirationDate = new Date(storedexpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken(): string | null {
  const token = localStorage.getItem("token");
  const tokenDuraion = getTokenDuration();
  if (tokenDuraion) {
    if (tokenDuraion < 0) {
      return "EXPIRED";
    }
  }
  if (!token) {
    return null;
  }

  return token;
}
