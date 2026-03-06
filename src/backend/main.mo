import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

actor {
  type Rank = {
    id : Text;
    memberThreshold : Nat;
    usdtReward : Nat;
  };

  let ranks = Map.fromIter<Text, Rank>([
    (
      "M1",
      {
        id = "M1";
        memberThreshold = 100;
        usdtReward = 180;
      },
    ),
    (
      "M2",
      {
        id = "M2";
        memberThreshold = 300;
        usdtReward = 250;
      },
    ),
    (
      "M3",
      {
        id = "M3";
        memberThreshold = 700;
        usdtReward = 300;
      },
    ),
    (
      "M4",
      {
        id = "M4";
        memberThreshold = 1000;
        usdtReward = 400;
      },
    ),
    (
      "M5",
      {
        id = "M5";
        memberThreshold = 2000;
        usdtReward = 700;
      },
    ),
    (
      "M6",
      {
        id = "M6";
        memberThreshold = 4000;
        usdtReward = 1500;
      },
    ),
    (
      "M7",
      {
        id = "M7";
        memberThreshold = 10000;
        usdtReward = 2500;
      },
    ),
    (
      "M8",
      {
        id = "M8";
        memberThreshold = 25000;
        usdtReward = 4000;
      },
    ),
    (
      "M9",
      {
        id = "M9";
        memberThreshold = 60000;
        usdtReward = 9000;
      },
    ),
    (
      "M10",
      {
        id = "M10";
        memberThreshold = 100000;
        usdtReward = 18000;
      },
    ),
  ].values());
};
