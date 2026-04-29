export type FriendLink = {
  id: string;
  url: string;
  avatar: string;
  signature: string;
};

export const FRIEND_LINKS: FriendLink[] = [
  {
    id: "test",
    url: "https://test.com",
    avatar: "/friends/test-avatar.svg",
    signature: "test",
  },
];
