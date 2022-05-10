// priority: 0

const addLog = (event, burn, logs) => {
  if (!Array.isArray(logs)) logs = [logs];

  for (const log of logs) {
    event.add("minecraft:logs", log);
    if (burn) event.add("minecraft:logs_that_burn", log);
  }
};

onEvent("item.tags", (event) => {
  addLog(event, true, [
    "hexerei:willow_log",
    "hexerei:willow_wood",
    "hexerei:stripped_willow_log",
    "hexerei:stripped_willow_wood",
    "hexerei:mahogany_log",
    "hexerei:mahogany_wood",
    "hexerei:stripped_mahogany_log",
    "hexerei:stripped_mahogany_wood",
  ]);
});

onEvent("block.tags", (event) => {
  addLog(event, true, [
    "hexerei:willow_log",
    "hexerei:willow_wood",
    "hexerei:stripped_willow_log",
    "hexerei:stripped_willow_wood",
    "hexerei:mahogany_log",
    "hexerei:mahogany_wood",
    "hexerei:stripped_mahogany_log",
    "hexerei:stripped_mahogany_wood",
  ]);
});

onEvent("recipes", (event) => {
  event.custom({
    type: "hexerei:mixingcauldron",
    liquid: { fluid: "minecraft:water" },
    ingredients: [
      { item: "hexerei:blood_bottle" },
      { item: "biomemakeover:willow_log" },
      { item: "minecraft:gold_block" },
      { item: "minecraft:wheat" },
      { item: "hexerei:mandrake_root" },
      { item: "minecraft:wheat" },
      { item: "minecraft:gold_block" },
      { item: "biomemakeover:willow_log" },
    ],
    output: { item: "hexerei:willow_broom" },
    liquidOutput: { fluid: "hexerei:blood_fluid" },
    fluidLevelsConsumed: 1000,
  });

  event.remove({ id: "hexerei:leather_from_drying_rack" });
  event.custom({
    type: "hexerei:drying_rack",
    ingredients: [{ item: "minecraft:rotten_flesh" }],
    output: { item: "forbidden_arcanus:rotten_leather" },
    dryingTimeInTicks: 2000,
  });
});
