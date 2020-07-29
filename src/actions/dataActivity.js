export function pushActivity(activity) {
  return {
    type: "PUSH_ACTIVITY",
    activity,
  };
}
export function trigerActivytyOff() {
  return {
    type: "TRIGER_OFF",
  };
}
