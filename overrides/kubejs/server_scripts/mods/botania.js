// priority: 0

onEvent("recipes", (event) => {
  // Nature's compass
  event.remove({ id: "naturescompass:natures_compass" });
  event.shaped(
    "naturescompass:naturescompass",
    [
      "DRD",
      "PCB", //
      "DID",
    ],
    {
      P: "botania:grass_seeds",
      B: "botania:podzol_seeds",
      I: "botania:mycelium_seeds",
      R: "botania:redstone_root",
      D: "#botania:mana_dusts",
      C: "minecraft:compass",
    }
  );
});
