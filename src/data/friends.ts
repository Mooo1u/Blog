export type FriendGroup = "team" | "friends";

export type FriendLink = {
  id: string;
  url: string;
  avatar: string;
  signature: string;
  group: FriendGroup;
};

export const FRIEND_GROUPS: Record<FriendGroup, { title: string; description: string }> = {
  team: {
    title: "Teams",
    description: "可以组一被子战队吗？",
  },
  friends: {
    title: "Friends",
    description: "互相串门的朋友",
  },
};

export const FRIEND_LINKS: FriendLink[] = [
  {
    id: "HuhstSec",
    url: "https://wiki.huhstsec.top/",
    avatar: "https://wiki.huhstsec.top/logo.svg",
    signature: "窝滴校队",
    group: "team",
  },
  {
    id: "SU",
    url: "https://su-team.cn/",
    avatar: "https://su-team.cn/img/SU.jpg",
    signature: "里面锅锅事人才，说话又豪庭",
    group: "team",
  },
  {
    id: "2hi5hu",
    url: "https://2hi5hu.cn/",
    avatar: "https://2hi5hu.cn/avatar-bakr.jpg",
    signature: "respect! musc大大大大大大大大手子",
    group: "friends",
  },
  {
    id: "Grand",
    url: "https://bygeee.github.io/",
    avatar: "https://pic1.imgdb.cn/item/691007b43203f7be00e66c0a.jpg",
    signature: "粉毛Re高手",
    group: "friends",
  },
  {
    id: "hurkin",
    url: "https://www.hurkin.top/",
    avatar: "https://www.hurkin.top/wp-content/uploads/2025/02/%E5%8F%8B%E5%88%A9%E5%A5%88%E7%BB%AA1.jpg",
    signature: "迎着阳光盛大逃亡|",
    group: "friends",
  },
  {
    id: "J1NXEM",
    url: "https://j1nxem-o.github.io/",
    avatar: "https://pic1.imgdb.cn/item/6910080e3203f7be00e67122.jpg",
    signature: "会赢的！",
    group: "friends",
  },
  {
    id: "L1nk",
    url: "https://li1nk3.github.io/",
    avatar: "https://pic1.imgdb.cn/item/691008863203f7be00e6779c.jpg",
    signature: "Live long and pwn",
    group: "friends",
  },
  {
    id: "MilkTeA",
    url: "https://mi1kte4.top/",
    avatar: "https://pic1.imgdb.cn/item/6910096e3203f7be00e6786a.jpg",
    signature: "奶茶洁洁",
    group: "friends",
  },
  {
    id: "PR0_M1X",
    url: "https://nacpromix.top/",
    avatar: "https://nacpromix.top/images/avatar.jpg",
    signature: "没事爱打鸟😋",
    group: "friends",
  },
  {
    id: "wuwupor",
    url: "https://blog.wuwupor.xyz/",
    avatar: "https://pic1.imgdb.cn/item/69100a333203f7be00e67d8b.jpg",
    signature: "这下真得启动猿神了",
    group: "friends",
  },
  {
    id: "yyyspark",
    url: "http://www.yyyspark.xyz",
    avatar: "https://pic1.imgdb.cn/item/69100a583203f7be00e67f79.png",
    signature: "yyy小朋友",
    group: "friends",
  },
  {
    id: "mimin",
    url: "https://mimin.top/",
    avatar: "https://mimin.top/wp-content/uploads/2025/06/cropped-%E5%A4%B4%E5%83%8F.jpg",
    signature: "三国杀的评分就是你打下来的吧😡",
    group: "friends",
  },
  {
    id: "sadfox",
    url: "https://blog.sadfox.top/",
    avatar: "https://pic1.imgdb.cn/item/69100aab3203f7be00e683dd.jpg",
    signature: "古月神",
    group: "friends",
  },
  {
    id: "Yangjiu",
    url: "https://blog.yangjiu.online/",
    avatar: "https://pic1.imgdb.cn/item/69100b6b3203f7be00e68c0f.jpg",
    signature: "汪汪队gogogo",
    group: "friends",
  },
  {
    id: "rufeii",
    url: "https://rufeii.github.io/",
    avatar: "https://rufeii.github.io/images/me.jpg",
    signature: "湖南工程学院的web师傅😋",
    group: "friends",
  },
  {
    id: "_sun_·empty.",
    url: "https://sun1028.top/",
    avatar: "https://sun1028.top/wp-content/uploads/2025/03/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250311210335.jpg",
    signature: "Web苦手😭（我看未必）",
    group: "friends",
  },
];
