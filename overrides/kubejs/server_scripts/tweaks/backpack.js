// priority: 0

onEvent("item.tags", (event) => {
  event
    .get("forge:bedroll")
    .add("druidcraftrg:white_bedroll")
    .add("druidcraftrg:orange_bedroll")
    .add("druidcraftrg:magenta_bedroll")
    .add("druidcraftrg:light_blue_bedroll")
    .add("druidcraftrg:yellow_bedroll")
    .add("druidcraftrg:lime_bedroll")
    .add("druidcraftrg:pink_bedroll")
    .add("druidcraftrg:gray_bedroll")
    .add("druidcraftrg:light_gray_bedroll")
    .add("druidcraftrg:cyan_bedroll")
    .add("druidcraftrg:purple_bedroll")
    .add("druidcraftrg:blue_bedroll")
    .add("druidcraftrg:brown_bedroll")
    .add("druidcraftrg:green_bedroll")
    .add("druidcraftrg:red_bedroll")
    .add("druidcraftrg:black_bedroll");
});

onEvent("recipes", (event) => {
  event.remove({ id: "supplementaries:sack" });
  event.shaped(
    "supplementaries:sack",
    [
      "121",
      "1 1", //
      "111",
    ],
    {
      1: "#forge:crops/flax",
      2: "druidcraftrg:rope",
    }
  );

  event.remove({ id: "bagofholding:leather_bag_of_holding" });
  event.shaped(
    "bagofholding:leather_bag_of_holding",
    [
      "SIS",
      "ICI", //
      "WIW",
    ],
    {
      C: "supplementaries:sack",
      S: "#forge:string",
      I: "#forge:leather",
      W: "#minecraft:wool",
    }
  );

  event.remove({ id: "sophisticatedbackpacks:backpack" });
  event.shaped(
    "sophisticatedbackpacks:backpack",
    [
      "ERE",
      "QBQ", //
      "LLL",
    ],
    {
      L: "#forge:leather",
      B: "bagofholding:iron_bag_of_holding",
      Q: "#forge:gems/quartz",
      E: "minecraft:lead",
      R: "#forge:bedroll",
    }
  );
});
